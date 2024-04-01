import { json } from '@sveltejs/kit'
import matter from 'gray-matter'

const patterns: Record<string, RegExp> = {
	frontmatter: /---.*?---/gs,
	code: /```.*?\n|```/gs,
	inline: /`([^`]*)`/g,
	link: /\[([^\]]+)\]\(([^)]+)\)/g,
	image: /\!\[.*?\]\(.*?\)/g,
	blockquote: /> /gm,
	bold: /\*\*/g,
	italic: /\b_([^_]+)_(?!\w)/g,
	special: /{%.*?%}/g,
    tags: /[<>]/g,
    headings: /#{1,6}/g
}

const htmlEntities: Record<string, string> = {
	'<': '&lt;',
	'>': '&gt;',
}

function stripMarkdown(markdown: string) {
	for (const pattern in patterns) {
		switch (pattern) {
			case 'inline':
				markdown = markdown.replace(patterns[pattern], '$1')
				break
			case 'tags':
				markdown = markdown.replace(
					patterns[pattern],
					(match) => htmlEntities[match]
				)
				break
			case 'link':
				markdown = markdown.replace(patterns[pattern], '$2')
				break
			case 'italic':
				markdown = markdown.replace(patterns[pattern], '$1')
				break
			default:
				markdown = markdown.replace(patterns[pattern], '')
		}
	}

	return markdown
}

export async function GET() {
	const paths = import.meta.glob("/{command,test}/**/*.{svx,md}", { query: '?raw', import: 'default', eager: true });
	const posts = Object.entries(paths)
		.map(([url, content]) => {
			const frontmatter = matter(content)

			if (frontmatter.data.draft) {
				return null
			}

			return {
				title: frontmatter.data.title,
                content: stripMarkdown(content as string),
                url: url.slice(0, -9),
			}
		})
		.filter(Boolean)

	return json(posts)
}
