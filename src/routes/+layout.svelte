<script lang="ts">
  // NEVER MOVE THIS INTO APP.CSS IT WILL BREAK
  // - cbble_
  import "../styles/fonts.css";
  import "../styles/app.css";

  import Sidebar from "$lib/sidebar/Sidebar.svelte";
  import Navbar from "../lib/Navbar.svelte";

  import { browser, dev } from "$app/environment";

  import IconBeta from "~icons/tabler/flask-2-filled";
  import type { Snippet } from "svelte";
  import type { PageData } from "./$types";
  import { latestMCData, windowInfo } from "$lib/stores.svelte";
  interface Props {
    children: Snippet;
    data: PageData;
  }

  let { children, data }: Props = $props();

  latestMCData.packFormat = data.packFormat || 0;
  latestMCData.gameVersion = data.gameVersion || "1.0";

  let betaWarning: HTMLDivElement | null = $state(null);

  $effect(() => {
    if (!browser) return;
    windowInfo.width = window.innerWidth;
    windowInfo.isNavOpen = window.innerWidth > 768;
  });
</script>

<div class="font-lexend h-full min-h-screen flex flex-col text-stone-200">
  <Navbar />
  <div class="flex w-full h-[93%]">
    <Sidebar />
    <div id="content" class="py-12 w-full min-h-screen text-stone-200 bg-stone-900">
      {@render children()}
      {#if !dev}
        <div class="fixed z-50 bottom-0 w-fit flex items-center" bind:this={betaWarning}>
          <div class="bg-red-700 flex items-center">
            <div class="p-3 flex items-center gap-2 text-sm lg:text-base">
              <b>EARLY BETA</b>
              <IconBeta />
            </div>
            <div class="bg-red-800 p-3 flex items-center text-sm lg:text-base">
              <p>This wiki is in very early development. Your contributions are welcome!</p>
              <button class="underline ml-2" onclick={() => betaWarning?.remove()}>Dismiss</button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
