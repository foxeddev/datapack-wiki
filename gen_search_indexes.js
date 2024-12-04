import { file as defineFile, Glob, write } from "bun";
import matter from "gray-matter";
import stripMarkdown from "strip-markdown";
import { remark } from "remark";
import { stripHtml } from "string-strip-html";
import { createConsola } from "consola";

const log = createConsola({
  formatOptions: {
    date: true,
  },
});

// Requires Bun to be installed
// Sorry!

const posts = [];
const fileGlob = new Glob("./**/*.{svx,md}");
const matchingFiles = fileGlob.scan("./src/routes");

// read all routes
for await (const file of matchingFiles) {
  // ignore the error page
  if (file.includes("+error.svx")) {
    log.warn("Skipping error page");
    continue;
  }

  const rawContent = await defineFile(`./src/routes/${file}`).text();

  log.info("Transforming", file);
  const frontmatter = matter(rawContent); // parse markdown front matter

  const filePath = file.slice(0, -9).slice(2); // remove the file name and extension and leading slash

  // add to posts
  const contentNoHtml = stripHtml(frontmatter.content).result;
  const strippedMarkdown = RemoveMarkdown(contentNoHtml)

  const tags = frontmatter.data.tags || "";

  posts.push({
    title: frontmatter.data.title || "MissingNo.",
    content: strippedMarkdown.value,
    url: "/" + filePath,
    tags: tags
      .split(",")
      .map((el) => el.trim())
      .filter(String),
  });
}

// write to file
log.start("Writing to file...");
await write("./src/routes/search.json/meta.json", JSON.stringify(posts));

log.success("Done!");
