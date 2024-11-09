<script lang="ts">
  import { latestMCData } from "$lib/stores.svelte";
  import IconTick from "~icons/tabler/rosette-discount-check";
  import IconPencil from "~icons/tabler/pencil";
  interface Props {
    version: string;
  }

  let { version }: Props = $props();
</script>

<div
  class="bg-stone-500/25 w-fit min-w-[25%] border-l-4 {version == latestMCData.gameVersion
    ? 'border-green-600'
    : 'border-red-600'} p-3 py-2 mb-4">
  <div class="flex text-sm gap-2 items-center text-stone-400">
    {#if version == latestMCData.gameVersion}
      <IconTick />
    {:else}
      <IconPencil />
    {/if}
    <span>
      {#if version == latestMCData.gameVersion}
        This page is validated and up to date with Minecraft Java: {version}
      {:else}
        This page is marked with an older version! Expect breakage or changes for versions newer than Minecraft Java: {version}
      {/if}
    </span>
  </div>
</div>
