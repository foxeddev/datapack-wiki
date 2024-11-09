<script lang="ts">
  // ! IMPORTANT: If you want to add pages or categories, this is not the place to do it!

  const INFOTEXT = "pack_format: 48 (1.21)";

  import IconSearch from "~icons/tabler/search";

  import GuidePages from "$lib/sidebar/tabs/Guides.svelte";
  import WikiPages from "$lib/sidebar/tabs/WikiPages.svelte";
  import { sidebarExpanded } from "$lib/stores.svelte";

  import IconCredits from "~icons/tabler/address-book";
  import IconResources from "~icons/tabler/book";
  import IconGuides from "~icons/tabler/book-2";
  import IconCollapse from "~icons/tabler/chevron-left";
  import IconWiki from "~icons/tabler/globe";

  import SidebarPage from "./navigation/SidebarPage.svelte";
  import SidebarSearchDialog from "./SidebarSearchDialog.svelte";

  let results: Page[] = $state([]);

  let page = $state("wiki");

  $effect(() => {
    page = sessionStorage.getItem("page") || "wiki";
  });

  let dialog: any;
</script>

<aside
  class="{$sidebarExpanded
    ? 'fixed w-full sm:w-80'
    : 'w-fit hidden sm:flex'} flex flex-col bg-stone-800 items-center h-[calc(100dvh-3rem)] sm:sticky top-12 z-50 border-r border-stone-700">
  <div class="flex flex-col p-2 pt-1 grow overflow-y-auto w-full">
    {#if $sidebarExpanded}
      <button
        aria-label="Open Search Modal"
        class="bg-black/45 px-2 py-1 rounded-lg flex items-center gap-2 mt-1 mb-2"
        onclick={async () => await dialog.showModal()}>
        <IconSearch />
        <span class="py-1 text-stone-500">Search...</span>
      </button>
      <div class="flex items-center mb-2 gap-1">
        <button
          class="{page == 'wiki'
            ? 'bg-stone-700'
            : 'bg-stone-800'} hover:text-white px-2 py-1 rounded-md flex items-center gap-1"
          onclick={() => {
            page = "wiki";
            sessionStorage.setItem("page", "wiki");
          }}>
          <IconWiki /><span>Wiki</span>
        </button>
        <button
          class="{page == 'guides'
            ? 'bg-stone-700'
            : 'bg-stone-800'} hover:text-white px-2 py-1 rounded-md flex items-center gap-1"
          onclick={() => {
            page = "guides";
            sessionStorage.setItem("page", "guides");
          }}>
          <IconGuides /><span>Guides</span>
        </button>
      </div>
    {/if}
    <div class="flex flex-col h-full">
      <div class="grow">
        {#if page == "wiki"}
          <WikiPages />
        {:else}
          <GuidePages />
        {/if}
      </div>
      <div class="mt-5">
        <SidebarPage label="Resources" icon={IconResources} page="/resources" />
        <SidebarPage label="Credits" icon={IconCredits} page="/credits" />
        <SidebarPage label="Contributing" icon={IconWiki} page="/contribute" />
      </div>
    </div>
  </div>
  <div class="hidden sm:flex text-sm text-stone-600 p-2 items-center w-full">
    {#if $sidebarExpanded}
      <span class="grow flex flex-col items-center">{INFOTEXT}</span>
    {/if}
    <button
      aria-label="{$sidebarExpanded ? 'Collapse' : 'Expand'} Sidebar"
      class="text-stone-200 text-lg motion-safe:transition-all {$sidebarExpanded ? 'rotate-0' : 'rotate-180'}"
      onclick={() => ($sidebarExpanded = !$sidebarExpanded)}>
      <IconCollapse />
    </button>
  </div>
</aside>

<SidebarSearchDialog bind:this={dialog} bind:results />
