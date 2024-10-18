import { createConsola } from "consola";
import fg from "fast-glob";
import matter from "gray-matter";
import { readFile, writeFile } from "node:fs/promises";
import { remark } from "remark";
import { stripHtml } from "string-strip-html";
import stripMarkdown from "strip-markdown";

const log = createConsola({
  formatOptions: {
    date: true,
  },
});

// Requires Bun to be installed
// Sorry!

const posts = [];
const matchingFiles = fg.stream("**/+page.svx", { dot: true });

// read all routes
for await (const file of matchingFiles) {
  // ignore the error page
  if (file.includes("+error.svx")) {
    log.warn("Skipping error page");
    continue;
  }

  const rawContent = await readFile(file);

  log.info("Transforming", file);
  const frontmatter = matter(rawContent); // parse markdown front matter

  const filePath = file.slice(0, -9).slice(2); // remove the file name and extension and leading slash

  // add to posts
  const contentNoHtml = stripHtml(frontmatter.content).result;
  const strippedMarkdown = await remark().use(stripMarkdown).process(
    contentNoHtml,
  );

  posts.push({
    title: frontmatter.data.title || "MissingNo.",
    content: strippedMarkdown.value,
    url: "/" + filePath,
  });
}

// write to file
log.start("Writing to file...");
await writeFile("./src/routes/search.json/meta.json", JSON.stringify(posts));

log.success("Done!");
