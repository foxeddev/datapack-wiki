<script lang="ts">
  let tab = "post";
</script>

<div class="bg-stone-500/5 w-full flex items-center border-stone-700 border-t border-l border-r">
  <button class="p-3 py-2 uppercase {tab == 'post' ? 'bg-stone-700' : ''}" on:click={() => (tab = "post")}>
    post 1.20.5
  </button>
  <button class="p-3 py-2 uppercase {tab == 'pre' ? 'bg-stone-700' : ''}" on:click={() => (tab = "pre")}>
    pre 1.20.5
  </button>
</div>
<div class="bg-stone-500/5 w-full mb-4 flex items-center p-3 py-2 border-stone-700 border">
  {#if tab == "post"}
    <slot name="post" />
  {:else if tab == "pre"}
    <slot name="pre" />
  {:else}
    <span>Gone!</span>
  {/if}
</div>
