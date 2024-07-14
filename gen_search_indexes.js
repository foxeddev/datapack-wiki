import { Glob } from "bun";
import matter from "gray-matter";
import removeMarkdown from "remove-markdown";
import { stripHtml } from "string-strip-html";

// Requires Bun to be installed
// Sorry!

const fileGlob = new Glob("./**/*.{svx,md}");

let posts = [];

// read all routes
for await (const file of fileGlob.scan("./src/routes")) {
  const content = await Bun.file(`./src/routes/${await file}`).text();
  const frontmatter = matter(content); // parse markdown front matter

  // ignore the error page
  if (file === "+error.svx") continue;

  const fileWithoutPage = file.slice(0, -9);
  const filePath = fileWithoutPage.slice(2);

  // add to posts
  posts.push({
    title: frontmatter.data.title || "MissingNo.",
    content: removeMarkdown(stripHtml(frontmatter.content).result),
    tags: frontmatter.data.tags || [],
    versions: frontmatter.data.versions || "latest",
    url: "/" + filePath,
  });
}

// first post is the error page
posts.shift();

// write to file
await Bun.write("./src/routes/search.json/meta.json", JSON.stringify(posts));
