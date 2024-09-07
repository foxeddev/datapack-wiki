<script lang="ts">
  import { sidebarExpanded, windowWidth } from "$lib/stores";
  import { createSearchIndex, search } from "../search";
  import autoAnimate from "@formkit/auto-animate";

  type Props = {
    results: any[];
  };

  let { results = $bindable([]) }: Props = $props();
  let dialog: HTMLDialogElement;

  let searchTerm = $state("");
  let searchState: "waiting" | "done" = $state("waiting");

  export async function showModal() {
    dialog.showModal();
    if (searchState === "waiting") {
      const posts = await fetch("/search.json").then(r => r.json());
      createSearchIndex(posts);
    }
    searchState = "done";
  }

  $effect(() => {
    if (searchState === "done") {
      search(searchTerm).then(r => (results = r as any[]));
    }
  });
</script>

<dialog
  bind:this={dialog}
  class="w-[90%] md:w-3/4 lg:w-1/2 xl:w-1/3 bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm">
  <div class="bg-stone-800 w-full p-4 gap-1 rounded-md">
    <!-- svelte-ignore a11y_autofocus -->
    <!-- as much as svelte wants to yell at me for autofocus, it actually makes accessibility better -->
    <input
      class="bg-stone-900 w-full rounded-sm focus:outline-0 text-white p-2 placeholder:text-stone-500 disabled:cursor-not-allowed disabled:bg-stone-900/50"
      disabled={searchState === "waiting"}
      autofocus
      autocomplete="off"
      spellcheck="false"
      type="search"
      placeholder="Search for a page..."
      bind:value={searchTerm} />
    <div class="overflow-y-auto max-h-[50vh]" use:autoAnimate={{ duration: 100 }}>
      {#each results as result}
        <a
          onclick={() => {
            dialog.close();
            if ($windowWidth < 640) {
              $sidebarExpanded = false;
            }
          }}
          href={result.url}>
          <div class="p-2 my-2 rounded-sm hover:bg-black/20 motion-safe:transition-all">
            <p class="text-stone-200 text-lg">
              {@html result.title}
              <span class="text-stone-400 text-xs">{result.url}</span>
            </p>
            <p class="text-stone-400 line-clamp-2">{@html result.content}</p>
          </div>
        </a>
      {:else}
        <p class="text-stone-400 mt-2">{searchState === "waiting" ? "Loading..." : "No results"}</p>
      {/each}
    </div>

    <button class="bg-stone-700 w-full rounded-sm p-2 mt-2 text-white" onclick={() => dialog.close()}>Close</button>
  </div>
</dialog>
