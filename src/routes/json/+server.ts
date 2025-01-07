import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROUTES_DIR = path.resolve('src/routes');

interface Frontmatter {
  [key: string]: any; // Define the shape of your frontmatter if you have specific keys
}

interface FrontmatterResult {
  file: string;
  frontmatter: Frontmatter;
}

/**
 * Recursively fetch all `.md` and `.svelte` files from a directory.
 */
const getRouteFiles = (dir: string): string[] => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      return getRouteFiles(res); // Recurse into directories
    } else if (entry.isFile() && res.endsWith('.svx')) {
      return res;
    }
    return [];
  });
};

export const GET: import('@sveltejs/kit').RequestHandler = async () => {
  // Fetch all route files
  const routeFiles = getRouteFiles(ROUTES_DIR);

  // Extract frontmatter from each file
  const frontmatterData: FrontmatterResult[] = routeFiles.map((file) => {
    const content = readFileSync(file, 'utf8');
    const fm = matter(content);
    return {
      path: file.replace(ROUTES_DIR, '').replace("\\","/"), 
      title: fm.data.title,
    };
  });

  return new Response(JSON.stringify(frontmatterData), {
    headers: { 'Content-Type': 'application/json' },
  });
};
