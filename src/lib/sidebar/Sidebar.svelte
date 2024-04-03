<script lang="ts">
  import IconSearch from "~icons/tabler/search";
  import IconPeopleBook from "~icons/tabler/address-book";
  import IconBook from "~icons/tabler/book";

  import { sidebarExpanded } from "$lib";
  import IconCollapse from "~icons/tabler/chevron-left";
  import { onMount } from "svelte";
  import { createSearchIndex, search } from "../search";
  import { windowWidth } from "$lib";
  
  import SidebarPage from "./SidebarPage.svelte";
  import SidebarPages from "$lib/SidebarPages.svelte";

  let results: Post[] = [];
  let searchTerm = "";
  let searchState: "waiting" | "done" = "waiting";

  onMount(async () => {
    const posts = await fetch("/search.json").then((r) => r.json());
    createSearchIndex(posts);
    searchState = "done";
  });

  $: if (searchState === "done") {
    results = search(searchTerm);
  }

  $: isSmall = $windowWidth < 930;

  let dialog: HTMLDialogElement;
</script>

<div class="bg-stone-800 flex flex-col items-center w-[23rem] md:relative fixed h-[92%] md:h-full {$sidebarExpanded ? '' : 'w-fit'}">
  <div class="flex flex-col p-2 pt-1 flex-grow overflow-y-auto">
    <!-- <button
			class="bg-stone-600 size-8 rounded-md flex items-center justify-center"
			on:click={() => ($sidebarExpanded = !$sidebarExpanded)}
		>
			<IconMenu />
		</button> -->
    {#if $sidebarExpanded}
      <button
        aria-label="Open Search Modal"
        class="bg-black/45 p-2 py-1 rounded-lg flex items-center space-x-2 mb-2"
        on:click={() => dialog.showModal()}>
        <IconSearch />
        <span class="py-1 text-stone-500">Search...</span>
      </button>
    {/if}
    
    <div class="flex-grow flex flex-col">
      <SidebarPages />
    </div>
    <div class="flex flex-col">
      <SidebarPage label="Resources" icon={IconBook} page="/resources" />
      <SidebarPage label="Credits" icon={IconPeopleBook} page="/credits" />
    </div>
  </div>

  <div class="text-sm text-stone-600 p-2 flex items-center w-full bottom-0">
    {#if $sidebarExpanded}
      <span class="flex-grow flex flex-col items-center"> BETA - Dev Version </span>
    {/if}
    <button
      aria-label="{$sidebarExpanded ? 'Collapse' : 'Expand'} Sidebar"
      class="text-stone-200 text-lg transition-all {$sidebarExpanded ? 'rotate-0' : 'rotate-180'}"
      on:click={() => ($sidebarExpanded = !$sidebarExpanded)}>
      <IconCollapse />
    </button>
  </div>
</div>

<dialog bind:this={dialog} class="w-1/3 bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm">
  <div class="bg-stone-800 w-full p-4 gap-1 rounded-lg">
    <input
      class="bg-stone-900 w-full rounded-md focus:outline-0 text-white p-2 placeholder:text-stone-500"
      type="search"
      placeholder="Search for a page..."
      bind:value={searchTerm} />
    {#each results as result}
      <a on:click={() => dialog.close()} href={result.url}>
        <div class="p-2 my-2 rounded-md hover:bg-black/20 transition-all">
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

    <button class="bg-stone-700 w-full rounded-md p-2 mt-2 text-white" on:click={() => dialog.close()}>Close</button>
  </div>
</dialog>