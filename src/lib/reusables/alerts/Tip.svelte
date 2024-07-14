<script lang="ts">
  import IconTip from "~icons/tabler/bulb";
  import { onMount } from "svelte";
  import SvelteMarkdown from 'svelte-markdown'

  let contents: HTMLSpanElement; 
  let src: string;
  onMount(() => {
    src = contents?.innerHTML;
  })
</script>

<div class="bg-yellow-400/25 w-fit min-w-[25%] border-l-4 border-yellow-500 p-3 my-2">
  <div class="flex text-sm space-x-2 items-center text-yellow-300 mb-1">
    <IconTip />
    <span>INFO</span>
  </div>
  <div class="prose md prose-p:my-0">
    <SvelteMarkdown source={src} />
  </div>
</div>

<span bind:this={contents} class="hidden">
  <slot />
</span>