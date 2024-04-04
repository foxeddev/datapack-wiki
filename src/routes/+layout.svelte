<script lang="ts">
  import Navbar from '../lib/Navbar.svelte';

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

<div class="font-lexend bg-stone-900 h-screen max-h-screen flex flex-col text-stone-200">
  <div class="h-[6%]">
    <Navbar />
  </div>
  <div class="flex w-full bg-stone-800 h-[94%]">
    <Sidebar />
    <div
      id="content"
      class="px-6 md:px-10 lg:px-16 py-12 w-full md prose-headings:text-stone-200 text-stone-200 bg-stone-900 overflow-y-auto">
      <slot />
    </div>
  </div>
</div>
