<script lang="ts">
  import Navbar from "../lib/Navbar.svelte";
  import Sidebar from "$lib/sidebar/Sidebar.svelte";

  import { dev } from "$app/environment";

  import IconBeta from "~icons/tabler/flask-2-filled";

  import "../styles/fonts.css";
  import "../styles/app.css";
  import "../styles/code_theme.css";
  // import "remark-admonitions/styles/classic.css"

  let betaWarning: HTMLDivElement;
</script>

<div class="font-lexend h-full min-h-screen flex flex-col text-stone-200">
  <Navbar />
  <div class="flex w-full h-[93%]">
    <Sidebar />
    <div id="content" class="py-12 w-full min-h-screen text-stone-200 bg-stone-900">
      <div class="md px-6 md:px-10 lg:px-16 prose-headings:text-stone-200">
        <slot />
      </div>
      {#if !dev}
        <div class="fixed z-50 bottom-0 w-fit flex items-center" bind:this={betaWarning}>
          <div class="bg-red-700 flex items-center">
            <div class="p-3 flex items-center space-x-2 text-sm lg:text-base">
              <b>EARLY BETA</b>
              <IconBeta />
            </div>
            <div class="bg-red-800 p-3 flex items-center text-sm lg:text-base">
              <p>This wiki is in very early development. Your contributions are welcome!</p>
              <button class="underline ml-2" on:click={() => betaWarning.remove()}>Dismiss</button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
