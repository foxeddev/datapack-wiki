<script lang="ts">
  import IconDiscord from "~icons/tabler/brand-discord";
  import IconShare from "~icons/tabler/share";
  import IconMenu from "~icons/tabler/menu-2";
  import IconEdit from "~icons/tabler/pencil";

  import { sidebarExpanded } from "$lib";
  import { page } from '$app/stores';  

  let shareText = "Share";

  function copyUrl() {
    // the windows share menu looks ugly, so only show it on mobile which looks nice
    if (navigator.maxTouchPoints > 0 && navigator.share) {
      navigator.share({ url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
    shareText = "Copied!";
    setTimeout(() => {
      shareText = "Share";
    }, 2000);
  }
</script>

<div class="bg-stone-800 flex w-full items-center p-3 h-full">
  <div class="flex items-center flex-grow">
    <button class="px-2 pr-3 sm:hidden" aria-label="{$sidebarExpanded ? 'Collapse' : 'Expand'} Sidebar" on:click={() => ($sidebarExpanded = !$sidebarExpanded)}><IconMenu /></button>
    <img alt="Datapack Hub Logo" src="/logos/dph.svg" class="h-8 mr-2" width="32" height="32" />
    <h1 class="font-bold text-xl">Datapack Wiki</h1>
  </div>
  <div class="flex items-center space-x-2">
    <a
      href="https://github.com/Datapack-Hub/wiki/blob/main/src/routes{$page.url.pathname}/%2Bpage.svx"
      class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 hover:text-stone-100 aspect-square sm:aspect-auto"
      aria-label="Discord">
      <IconEdit />
      <span class="hidden sm:block">Edit</span>
    </a>
    <button
      class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 hover:text-stone-100 aspect-square sm:aspect-auto"
      aria-label="Copy URL"
      on:click={copyUrl}>
      <IconShare />
      <span class="hidden sm:block">{shareText}</span>
    </button>
    <a
      href="https://discord.datapackhub.net"
      class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 hover:text-stone-100 aspect-square sm:aspect-auto"
      aria-label="Discord">
      <IconDiscord />
      <span class="hidden sm:block">Discord</span>
    </a>
  </div>
</div>
