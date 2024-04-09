import FlexSearch from "flexsearch";

let index: FlexSearch.Index;
let posts: Post[] = [];

export function createSearchIndex(pages: Post[]) {
  index = new FlexSearch.Index({ tokenize: "forward" });

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const indexItem = `${page.title} ${page.content} ${page.url} ${page.tags.join(" ")}`;
    index.add(i, indexItem);
  }

  posts = pages;
}

export function search(query: string) {
  // remove regex special characters
  const match = query.replaceAll(/[\\^$*+?.()|[\]{}]/g, "\\$&");
  const results = index.search(match);

  return results.map((i) => posts[i as number]).map((post) => ({ ...post }));
}
