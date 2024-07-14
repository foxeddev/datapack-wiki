<script lang="ts">
  import { onMount } from "svelte";
  import IconWarn from "~icons/tabler/alert-triangle";
  import SvelteMarkdown from 'svelte-markdown'

  let contents: HTMLSpanElement; 
  let src: string;
  onMount(() => {
    src = contents?.innerHTML;
  })
</script>

<div class="bg-red-500/25 w-fit min-w-[25%] border-l-4 border-red-600 p-3 my-2">
  <div class="flex text-sm space-x-2 items-center text-red-400 mb-1">
    <IconWarn />
    <span>WARNING</span>
  </div>
  <div class="prose md prose-p:my-0">
    <SvelteMarkdown source={src} />
  </div>
</div>

<span bind:this={contents} class="hidden">
  <slot />
</span>