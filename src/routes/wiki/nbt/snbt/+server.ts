import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const prerender = true;

export const GET: RequestHandler = () => {
    redirect(308, "/wiki/nbt/nbt")
}