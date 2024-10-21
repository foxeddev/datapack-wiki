import { browser } from "$app/environment";
import { readable, writable } from "svelte/store";

// This file handles all of the stores in the app. Stores are used to share data between components.

// The sidebarExpanded store is used to control the sidebar's visibility.
export const sidebarExpanded = writable(browser ? window.innerWidth > 768 : true);

// The windowWidth store is used to track the window width.
export const windowWidth = readable(1920, set => {
  if (browser) {
    set(window.innerWidth);
    addEventListener("resize", () => set(window.innerWidth));
  }
});

export const redirects = [
  {
    origin: "/wiki/nbt/storage",
    target: "/wiki/nbt/storages",
  },
];
