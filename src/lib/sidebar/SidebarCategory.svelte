<script lang="ts">
  import { sidebarExpanded } from "$lib";
  import type { ComponentType, SvelteComponent } from "svelte";
  import IconDexpand from "~icons/tabler/chevron-down";
  import IconExpand from "~icons/tabler/chevron-right";

  export let name: string;
  export let icon: ComponentType<SvelteComponent>;

  let expanded = false;
</script>

<button
  class="hover:bg-stone-700 py-1 rounded-lg flex gap-2 cursor-default p-1 items-center w-full"
  on:click={() => {
    expanded = !expanded;
    $sidebarExpanded = true;
  }}>
  <svelte:component this={icon} />
  {#if $sidebarExpanded}
    <div class="flex-grow text-left">
      <span>{name}</span>
    </div>
    {#if !expanded}
      <IconExpand />
    {:else}
      <IconDexpand />
    {/if}
  {/if}
</button>
{#if expanded && $sidebarExpanded}
  <div class="flex flex-col ml-4">
    <slot />
  </div>
{/if}