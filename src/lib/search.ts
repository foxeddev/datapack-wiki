import FlexSearch from "flexsearch";

let index: FlexSearch.Index
let posts: Post[] = []

export type Post = {
    title: string
    content: string, 
    url: string
}

export function createSearchIndex(pages: Post[]) {
    index = new FlexSearch.Index({ tokenize: "forward" });
    
    pages.forEach((page, i) => {
        const indexItem = `${page.title} ${page.content} ${page.url}`
        index.add(i, indexItem)
    })

    posts = pages
}

export function search(query: string) {
    // remove regex special characters
    const match = query.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    const results = index.search(match);

    return results.map(i => posts[i as number]).map(post => ({ ...post }))
}