<script lang="ts">
  import { createData } from "$lib/stores.svelte";
  import IconExpand from "~icons/tabler/chevron-right";

  type Props = {
    name: string;
    icon: any;
    children: any;
  };

  const { children, name, icon }: Props = $props();

  let expanded = $state(false);
  let data = createData();
</script>

<button
  class="hover:bg-stone-700 hover:text-white hover:font-medium rounded-lg flex gap-2 cursor-default p-1 items-center w-full"
  onclick={() => {
    expanded = !expanded;
    data.sidebarExpanded = true;
  }}>
  <svelte:component this={icon} />

  {#if data.sidebarExpanded}
    <div class="flex-grow text-left">
      <span>{name}</span>
    </div>
    <IconExpand class="transition-all {expanded ? 'rotate-90' : 'rotate-0'}" />
  {/if}
</button>

{#if expanded && data.sidebarExpanded}
  <div class="flex flex-col ml-4 pb-2">
    {@render children()}
  </div>
{/if}
