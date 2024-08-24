<script lang="ts">
  import "../styles/app.css";
  import "../styles/code_theme.css";
  import "../styles/fonts.css";

  import Sidebar from "$lib/sidebar/Sidebar.svelte";
  import Navbar from "../lib/Navbar.svelte";

  import { dev } from "$app/environment";

  import IconBeta from "~icons/tabler/flask-2-filled";

  let betaWarning: HTMLDivElement | null = $state(null);

  // onNavigate(async (navigation) => {
  //   if (!document.startViewTransition) return;

  //   return new Promise((resolve) => {
  //     document.startViewTransition(async () => {
  //       resolve();
  //       await navigation.complete;
  //     });
  // });
  // })
</script>

<div class="font-lexend h-full min-h-screen flex flex-col text-stone-200">
  <Navbar />
  <div class="flex w-full h-[93%]">
    <Sidebar />
    <div id="content" class="py-12 w-full min-h-screen text-stone-200 bg-stone-900">
      <main
        class="prose prose-sm prose-stone prose-invert max-w-full md:prose-base
  prose-headings:mb-2 prose-h2:text-2xl prose-h2:mt-7 prose-headings:scroll-mt-16
  prose-p:my-3
  prose-blockquote:rounded-l-sm prose-blockquote:font-normal prose-blockquote:not-italic
  prose-code:bg-stone-800 prose-code:rounded-sm prose-code:border prose-code:text-orange-300 prose-code:border-stone-700 prose-code:p-1 prose-code:font-thin prose-code:before:content-none prose-code:after:content-none prose-code:break-all
  prose-pre:p-2 prose-code:prose-pre:p-0 prose-code:prose-pre:border-0 prose-pre:overflow-x-auto
  prose-ol:mt-0 prose-ul:mt-0 prose-li:my-1
  prose-h2:border-b prose-h2:pb-2 prose-h2:border-white/20
  prose-h3:border-b prose-h3:pb-2 prose-h3:border-white/20
  prose-th:p-2 prose-th:text-left prose-thead:bg-stone-800 prose-td:p-2 even:prose-tr:bg-stone-500/10 odd:prose-tr:bg-stone-700/10 prose-table:border prose-table:border-stone-700 px-6 md:px-10 lg:px-16 prose-headings:text-stone-200">
        <slot />
      </main>
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
