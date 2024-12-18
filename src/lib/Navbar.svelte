<script lang="ts">
  import IconDiscord from "~icons/tabler/brand-discord";
  import IconShare from "~icons/tabler/share";
  import IconMenu from "~icons/tabler/menu-2";
  import IconEdit from "~icons/tabler/pencil";

  import { windowInfo } from "$lib/stores.svelte";
  import { page } from "$app/state";

  let shareText = $state("Share");

  function copyUrl() {
    // the windows share menu looks ugly, so only show it on mobile which looks nice
    if (navigator.maxTouchPoints > 0 && navigator.share) {
      // checks for mobile
      navigator.share({ url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      shareText = "Copied!";
      setTimeout(() => {
        shareText = "Share";
      }, 2000);
    }
  }
</script>

<div class="bg-stone-800 flex w-full items-center justify-between p-2 h-12 sticky top-0 border-b border-stone-700 z-20">
  <div class="flex items-center grow">
    <button
      class="px-2 pr-3 sm:hidden"
      aria-label="{windowInfo.isNavOpen ? 'Collapse' : 'Expand'} Sidebar"
      onclick={() => (windowInfo.isNavOpen = !windowInfo.isNavOpen)}><IconMenu /></button>
    <a class="flex items-center cursor-default hover:text-white p-1" href="/">
      <img alt="Datapack Hub Logo" src="/logos/dph.svg" class="h-8 mr-2" width="32" height="32" />
      <h1 class="font-bold hidden text-lg lg:text-xl sm:block">Datapack Wiki</h1>
      <div class="bg-red-900/50 px-2 py-1 rounded-lg space-x-3 items-center flex mx-2">
        <b>ALPHA</b>
      </div>
    </a>
  </div>

  <div class="flex items-center gap-2">
    <a
      href="https://github.com/Datapack-Hub/wiki/blob/main/src/routes{page.url.pathname}/%2Bpage.svx"
      class="bg-black/45 p-2 rounded-lg py-1 flex items-center gap-2 hover:text-stone-100 aspect-square sm:aspect-auto"
      aria-label="Discord">
      <IconEdit />
      <span class="hidden sm:block">Edit</span>
    </a>
    <button
      class="bg-black/45 p-2 rounded-lg py-1 flex items-center gap-2 hover:text-stone-100 aspect-square sm:aspect-auto"
      aria-label="Copy URL"
      onclick={copyUrl}>
      <IconShare />
      <span class="hidden sm:block">{shareText}</span>
    </button>
    <a
      href="https://discord.datapackhub.net"
      class="bg-black/45 p-2 rounded-lg py-1 flex items-center gap-2 hover:text-stone-100 aspect-square sm:aspect-auto"
      aria-label="Discord">
      <IconDiscord />
      <span class="hidden sm:block">Discord</span>
    </a>
  </div>
</div>
