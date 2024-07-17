import { Glob, file as defineFile, write } from "bun";
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

  log.info("Reading", file);
  const rawContent = await defineFile(`./src/routes/${file}`).text();

  log.info("Transforming", file);
  const frontmatter = matter(rawContent); // parse markdown front matter

  const fileWithoutPage = file.slice(0, -9); // remove the file name and extension
  const filePath = fileWithoutPage.slice(2); // remove the leading slash and dot

  // add to posts
  const contentNoHtml = stripHtml(frontmatter.content).result;
  const strippedMarkdown = await remark().use(stripMarkdown).process(contentNoHtml);

  log.info("Adding to posts");
  posts.push({
    title: frontmatter.data.title || "MissingNo.",
    content: strippedMarkdown.value,
    url: "/" + filePath,
  });
}

// first post is the error page
// posts.shift();

// write to file
log.info("Writing to file");
await write("./src/routes/search.json/meta.json", JSON.stringify(posts));
log.success("Done!");
