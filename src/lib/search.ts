import FlexSearch from "flexsearch";
import { stripHtml } from "string-strip-html";

let index: FlexSearch.Index;
let posts: Post[] = [];

export function createSearchIndex(pages: Post[]) {
  index = new FlexSearch.Index({ tokenize: "forward" });

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const indexItem = `${page.title} ${page.content} ${page.url}`;
    index.add(i, indexItem);
  }

  posts = pages;
}

function replaceWithHighlights(text: string, match: string) {
  const regex = new RegExp(match, "gi");
  return text.replace(regex, match => `<mark>${match}</mark>`);
}

export async function search(query: string) {
  // remove regex special characters
  const htmlStripped = stripHtml(query).result;
  const match = htmlStripped.replaceAll(/[\\^$*+?.()|[\]{}]/g, "\\$&");
  const results = index.search(match);

  return results
    .map(i => posts[i as number])
    .map(({ content, title, url }) => {
      return { content: getMatches(content, match), title: replaceWithHighlights(title, match), url };
    });
}

function getMatches(text: string, searchTerm: string, limit = 1) {
  const regex = new RegExp(searchTerm, "gi");
  const results = [];
  let matches = 0;
  let match;

  while ((match = regex.exec(text)) !== null && results.length < limit) {
    results.push(match.index);
    matches++;
  }

  return results.map(index => {
    const start = index - 80;
    const end = index + 80;
    const textBlock = text.substring(start, end).trim();
    return `...${replaceWithHighlights(textBlock, searchTerm)}...`;
  });
}
