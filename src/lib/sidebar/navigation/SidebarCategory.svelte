<script lang="ts">
  import { sidebarExpanded } from "$lib/stores";
  import autoAnimate from "@formkit/auto-animate";
  import type { ComponentType, SvelteComponent } from "svelte";
  import IconExpand from "~icons/tabler/chevron-right";

  export let name: string;
  export let icon: ComponentType<SvelteComponent>;

  let expanded = false;
</script>

<button
  class="hover:bg-stone-700 hover:text-white hover:font-medium rounded-lg flex gap-2 cursor-default p-1 items-center w-full"
  on:click={() => {
    expanded = !expanded;
    $sidebarExpanded = true;
  }}>
  <svelte:component this={icon} />

  {#if $sidebarExpanded}
    <div class="flex-grow text-left">
      <span>{name}</span>
    </div>
    <IconExpand class="motion-safe:transition-all {expanded ? 'rotate-90' : 'rotate-0'}" />
  {/if}
</button>

<div use:autoAnimate={{ duration: 200 }}>
  {#if expanded && $sidebarExpanded}
    <div class="flex flex-col ml-4 pb-2">
      <slot />
    </div>
  {/if}
</div>
