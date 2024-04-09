import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGemoji from "remark-gemoji";

// TODO: if needed, add embeds and twemoji support

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".svx", ".md"],
      remarkPlugins: [remarkGemoji],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
  ],

  kit: {
    adapter: adapter(),
  },

  extensions: [".svelte", ".svx"],
};

export default config;
