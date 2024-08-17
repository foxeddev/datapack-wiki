import { browser } from "$app/environment";
import { readable, writable } from "svelte/store";

// This file handles all of the stores in the app. Stores are used to share data between components.

export function createData() {
  let sidebarExpanded = $state(true)
  let windowWidth = $state(1920)

  sidebarExpanded = browser ? window.innerWidth > 768 : true;
  windowWidth = browser ? window.innerWidth : 1920;

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
