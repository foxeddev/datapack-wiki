// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: "svelte",
    }),
    tailwindcss(),
  ],
  build: {
    cssMinify: "lightningcss",
  },
  css: {
    transformer: "lightningcss"
  }
});
