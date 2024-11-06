<script lang="ts">
  import type { Snippet } from "svelte";
  import IconTick from "~icons/tabler/rosette-discount-check";
  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="bg-stone-500/25 w-fit min-w-[25%] border-l-4 border-green-600 p-3 py-2 mb-4">
  <div class="flex text-sm gap-2 items-center text-stone-400">
    <IconTick />
    <span>
      {@render children?.()}
    </span>
  </div>
</div>
