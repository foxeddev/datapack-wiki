import { json } from '@sveltejs/kit'
import posts from "./meta.json";

export const prerender = true

export async function GET() {
	return json(posts)
}