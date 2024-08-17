import { browser } from "$app/environment";
import { readable, writable } from "svelte/store";

// This file handles all of the stores in the app. Stores are used to share data between components.

export function createData() {
  let sidebarExpanded = $state(true)
  let windowWidth = $state(1920)

  sidebarExpanded = browser ? window.innerWidth > 768 : true;

  return {
    get sidebarExpanded() {
      return sidebarExpanded
    },
    set sidebarExpanded(value) {
      sidebarExpanded = value
    },
    get windowWidth() {
      return windowWidth
    },
  }
}

// The sidebarExpanded store is used to control the sidebar's visibility.
export const sidebarExpanded = writable(browser ? window.innerWidth > 768 : true);

// The windowWidth store is used to track the window width.
export const windowWidth = readable(1920, set => {
  if (browser) {
    set(window.innerWidth);
    addEventListener("resize", () => set(window.innerWidth));
  }
});
