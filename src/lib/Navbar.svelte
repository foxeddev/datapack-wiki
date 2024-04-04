<script lang="ts">
  import IconDiscord from "~icons/tabler/brand-discord";
  import IconShare from "~icons/tabler/share";
  import IconMenu from "~icons/tabler/menu-2";

  import "../app.css";
  import "../code_theme.css";

  import { sidebarExpanded } from "$lib";

  var shareText = "Copy URL";

  function copyUrl() {
    navigator.clipboard.writeText(window.location.href);
    shareText = "Copied!";
    setTimeout(() => {
      shareText = "Copy URL";
    }, 2000);
  }
</script>

<div class="bg-stone-800 flex w-full items-center p-2 h-full">
  <div class="flex items-center flex-grow">
    <button class="px-2 pr-3 sm:hidden" on:click={() => $sidebarExpanded = !$sidebarExpanded}><IconMenu /></button>
    <img alt="Datapack Hub Logo" src="/logos/dph.svg" class="h-8 mr-2" width="32" height="32" />
    <h1 class="font-bold text-lg block">Datapack Wiki</h1>
  </div>
  <div class="flex items-center space-x-2">
    <a
      href="https://discord.datapackhub.net"
      class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 hover:text-stone-100 aspect-square sm:aspect-auto">
      <IconDiscord />
      <span class="hidden sm:block">Discord</span>
    </a>
    <button
      class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 hover:text-stone-100 aspect-square sm:aspect-auto"
      on:click={copyUrl}>
      <IconShare />
      <span class="hidden sm:block">{shareText}</span>
    </button>
  </div>
</div>

