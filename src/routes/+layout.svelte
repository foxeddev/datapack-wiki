<script lang="ts">
  import Sidebar from "$lib/sidebar/Sidebar.svelte";

  import IconDiscord from "~icons/tabler/brand-discord";
  import IconShare from "~icons/tabler/share";

  import "../app.css";
  import "../code_theme.css";

  var shareText = "Copy URL";

  function copyUrl() {
    navigator.clipboard.writeText(window.location.href);
    shareText = "Copied!";
    setTimeout(() => {
      shareText = "Copy URL";
    }, 2000);
  }
</script>

<div class="font-lexend bg-stone-900 h-screen text-stone-200">
  <a href="#content" class="absolute -top-64 focus:top-8 left-1/2 -translate-x-1/2">Jump to content</a>
  <div class="bg-stone-800 flex w-full items-center fixed p-2 z-50">
    <div class="flex items-center space-x-2 flex-grow">
      <img alt="Datapack Hub Logo" src="/logos/dph.svg" class="h-8" width="32" height="32" />
      <h1 class="font-bold text-lg hidden md:block">Datapack Wiki</h1>
    </div>
    <div class="flex items-center space-x-2 h-full">
      <a
        href="https://discord.datapackhub.net"
        class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 hover:text-stone-100">
        <IconDiscord />
        <span>Discord</span>
      </a>
      <button
        class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 hover:text-stone-100"
        on:click={copyUrl}>
        <IconShare />
        <span>{shareText}</span>
      </button>
    </div>
  </div>
  <div class="flex h-full w-full bg-stone-800">
    <Sidebar />
    <div
      id="content"
      class="pl-20 pr-8 md:px-12 pt-16 w-full md prose-headings:text-stone-200 text-stone-200 bg-stone-900 h-full overflow-y-auto">
      <slot />
    </div>
  </div>
</div>
