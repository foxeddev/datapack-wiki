import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  console.log(url.pathname);
    
  return redirect(308, "/guide/" + url.pathname.substring(8));
};
