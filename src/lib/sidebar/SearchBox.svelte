<script lang="ts">
  // ! IMPORTANT: If you want to add pages or categories, this is not the place to do it!

  import IconSearch from "~icons/tabler/search";
  import type { SvelteComponent } from "svelte";
  import SidebarSearchDialog from "./SidebarSearchDialog.svelte";
  import { windowInfo } from "$lib/stores.svelte";

  let dialog: SvelteComponent;

  let results: Page[] = $state([]);

  let { keyActivated }: { keyActivated?: boolean } = $props();

  let page = $state("wiki");

  $effect(() => {
    page = sessionStorage.getItem("page") || "wiki";
  });
</script>

<button
  aria-label="Open Search Modal"
  class="bg-black/45 px-2 py-1 rounded-lg flex justify-between items-center mt-1 mb-2 w-full"
  onclick={async () => await dialog.showModal()}>
  <div class="flex items-center gap-2">
    <IconSearch />
    <span class="py-1 text-stone-500">Search...</span>
  </div>
  <p class="text-stone-400 text-xs md:block hidden font-mono">
    <span class="bg-stone-800 px-1.5 py-1 rounded-sm">Ctrl</span>
    <span class="bg-stone-800 px-1.5 py-1 rounded-sm">K</span>
  </p>
</button>

<SidebarSearchDialog {keyActivated} bind:results bind:this={dialog} />
