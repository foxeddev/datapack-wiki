<script lang="ts">
  import { onMount } from "svelte";
  import IconInfo from "~icons/tabler/info-circle";
  import SvelteMarkdown from 'svelte-markdown'

  let contents: HTMLSpanElement; 
  let src: string;
  onMount(() => {
    src = contents?.innerHTML;
  })
</script>

<div class="bg-slate-500/25 w-fit min-w-[25%] border-l-4 border-slate-600 p-3 my-2">
  <div class="flex text-sm space-x-2 items-center text-slate-400 mb-1">
    <IconInfo />
    <span>CONTRIBUTOR NOTE</span>
  </div>
  <div class="prose md prose-p:my-0">
    <SvelteMarkdown source={src} />
  </div>
</div>

<span bind:this={contents} class="hidden">
  <slot />
</span>