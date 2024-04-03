<script lang="ts">
  import Sidebar from "$lib/sidebar/Sidebar.svelte";

  import IconShare from "~icons/tabler/share";
  import IconDiscord from "~icons/tabler/brand-discord";

  import "../app.css";
  import { onMount } from "svelte";

  import hljs from 'highlight.js/lib/core';
  import json from 'highlight.js/lib/languages/json'
  import md from 'highlight.js/lib/languages/markdown'
  import "highlight.js/styles/github-dark.css"
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('md', md);

  onMount(() => {
    hljs.highlightAll();
  })

  var shareText = "Share";

  function copyUrl() {
    navigator.clipboard.writeText(window.location.href);
    shareText = "Copied!";
    setTimeout(() => {
      shareText = "Share";
    }, 2000);
  }
</script>

<div class="bg-stone-800 h-[56px] flex items-center px-2">
    <div class="flex items-center space-x-2 flex-grow">
      <img alt="Datapack Hub Logo" src="/logos/dph.svg" class="h-8" width="32" height="32" />
      <h1 class="font-bold text-lg">Datapack Wiki</h1>
    </div>
    <div class="flex items-center space-x-2 mr-1 h-full">
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

