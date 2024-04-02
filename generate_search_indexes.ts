import { Glob } from "bun";
import matter from "gray-matter";
import removeMarkdown from "remove-markdown";
import * as DOMPurify from "isomorphic-dompurify";

// Requires Bun to be installed
// Sorry!

const fileGlob = new Glob("/**/*.{svx,md}");

type Post = {
  title: string;
  content: string;
  url: string;
  tags: string[];
  versions: string;
};

let posts: Post[] = [];

// read all routes
for await (const file of fileGlob.scan("./src/routes")) {
  const content = await Bun.file(`./src/routes/${await file}`).text();
  const frontmatter = matter(content); // parse markdown front matter

  // ignore the error page
  if (file === "+error.svx") continue;

  // add to posts
  posts.push({
    title: (frontmatter.data.title as string) || "MissingNo.",
    content: removeMarkdown(DOMPurify.sanitize(frontmatter.content)),
    tags: (frontmatter.data.tags as string[]) || ([] as string[]),
    versions: (frontmatter.data.versions as string) || "latest",
    url: "/" + file.slice(0, -9),
  });
}

// write to file
await Bun.write("./src/routes/search.json/meta.json", JSON.stringify(posts));
