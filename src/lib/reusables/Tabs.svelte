<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    post?: Snippet;
    pre?: Snippet;
  }

  let { post, pre }: Props = $props();
  let tab = $state("post");
</script>

<div class="bg-stone-500/5 w-full flex items-center border-stone-700 border-t border-l border-r">
  <button class="p-3 py-2 uppercase {tab == 'post' ? 'bg-stone-700' : ''}" onclick={() => (tab = "post")}>
    post 1.20.5
  </button>
  <button class="p-3 py-2 uppercase {tab == 'pre' ? 'bg-stone-700' : ''}" onclick={() => (tab = "pre")}>
    pre 1.20.5
  </button>
</div>
<div class="bg-stone-500/5 w-full mb-4 flex items-center p-3 py-2 border-stone-700 border">
  {#if tab == "post"}
    {@render post?.()}
  {:else if tab == "pre"}
    {@render pre?.()}
  {:else}
    <span>Gone!</span>
  {/if}
</div>
