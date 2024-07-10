<script lang="ts">
  import IconSearch from "~icons/tabler/search";

  import { sidebarExpanded } from "$lib";
  import WikiPages from "$lib/sidebar-pages/WikiPages.svelte";
  import GuidePages from "$lib/sidebar-pages/Guides.svelte";
  import { onMount } from "svelte";
  import { createSearchIndex, search } from "../search";

  import IconCollapse from "~icons/tabler/chevron-left";
  import IconCredits from "~icons/tabler/address-book";
  import IconResources from "~icons/tabler/book";
  import IconWiki from "~icons/tabler/globe";
  import IconGuides from "~icons/tabler/book-2";

  import SidebarPage from "./SidebarPage.svelte";

  let results: Post[] = [];
  let searchTerm = "";
  let searchState: "waiting" | "done" = "waiting";

  let page = "wiki";

  onMount(async () => {
    const posts = await fetch("/search.json").then((r) => r.json());
    createSearchIndex(posts);
    searchState = "done";

    if (typeof(sessionStorage.getItem("page")) == "string") {page = sessionStorage.getItem("page")}
  });

  $: if (searchState === "done") {
    results = search(searchTerm);
  }

  let dialog: HTMLDialogElement;
</script>

<aside
  class="{$sidebarExpanded
    ? 'absolute w-[100%] sm:w-80'
    : 'w-fit hidden sm:flex'} flex flex-col bg-stone-800 items-center sm:relative h-full z-50">
  <div class="flex flex-col p-2 pt-1 flex-grow overflow-y-auto w-full">
    {#if $sidebarExpanded}
      <button
        disabled={searchState === "waiting"}
        aria-label="Open Search Modal"
        class="bg-black/45 p-2 py-1 rounded-lg flex items-center space-x-2 mb-2"
        on:click={() => dialog.showModal()}>
        <IconSearch />
        <span class="py-1 text-stone-500">Search...</span>
      </button>
      <div class="flex items-center mb-2 ml-1 space-x-1">
        <button
          class="{page == 'wiki' ? 'bg-stone-700' : 'bg-stone-800'} px-2 py-1 rounded-md flex items-center space-x-1"
          on:click={() => {page = "wiki"; sessionStorage.setItem("page","wiki")}}>
          <IconWiki /><span>Wiki</span>
        </button>
        <button
          class="{page == 'guides' ? 'bg-stone-700' : 'bg-stone-800'} px-2 py-1 rounded-md flex items-center space-x-1"
          on:click={() => {page = "guides"; sessionStorage.setItem("page","guides")}}>
          <IconGuides /><span>Guides</span>
        </button>
      </div>
    {/if}
    <div class="flex flex-col h-full">
      <div class="flex-grow">
        {#if page == "wiki"}
          <WikiPages />
        {:else}
          <GuidePages />
        {/if}
      </div>
      <div>
        <SidebarPage label="Resources" icon={IconResources} page="/resources" />
        <SidebarPage label="Credits" icon={IconCredits} page="/credits" />
        <SidebarPage label="Contributing" icon={IconWiki} page="/contribute" />
      </div>
    </div>
  </div>
  <div class="hidden sm:flex text-sm text-stone-600 p-2 items-center w-full">
    {#if $sidebarExpanded}
      <span class="flex-grow flex flex-col items-center"> BETA - Expect bugs! </span>
    {/if}
    <button
      aria-label="{$sidebarExpanded ? 'Collapse' : 'Expand'} Sidebar"
      class="text-stone-200 text-lg transition-all {$sidebarExpanded ? 'rotate-0' : 'rotate-180'}"
      on:click={() => ($sidebarExpanded = !$sidebarExpanded)}>
      <IconCollapse />
    </button>
  </div>
</aside>

<dialog
  bind:this={dialog}
  class="w-[90%] sm:w-1/2 lg:w-1/3 bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm">
  <div class="bg-stone-800 w-full p-4 gap-1 rounded-lg">
    <input
      class="bg-stone-900 w-full rounded-sm focus:outline-0 text-white p-2 placeholder:text-stone-500"
      type="search"
      placeholder="Search for a page..."
      bind:value={searchTerm} />
    {#each results as result}
      <a on:click={() => dialog.close()} href={result.url}>
        <div class="p-2 my-2 rounded-sm hover:bg-black/20 transition-all">
          <p class="text-stone-200 text-lg">
            {result.title}
            <span class="text-stone-400 text-xs">{result.url}</span>
          </p>
          <p class="text-stone-400 line-clamp-2">{result.content}</p>
        </div>
      </a>
    {:else}
      <p class="text-stone-400 mt-2">No results</p>
    {/each}

    <button class="bg-stone-700 w-full rounded-sm p-2 mt-2 text-white" on:click={() => dialog.close()}>Close</button>
  </div>
</dialog>
