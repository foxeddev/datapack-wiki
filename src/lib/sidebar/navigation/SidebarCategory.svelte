<script lang="ts">
  import { sidebarExpanded } from "$lib/stores";
  import autoAnimate from "@formkit/auto-animate";
  import IconExpand from "~icons/tabler/chevron-right";

  type Props = {
    name: string;
    icon: any;
    children: any;
  };

  const { children, name, icon }: Props = $props();

  let expanded = $state(false);
</script>

<button
  class="hover:bg-stone-700 hover:text-white hover:font-medium rounded-lg flex gap-2 cursor-default p-1 items-center w-full"
  onclick={() => {
    expanded = !expanded;
    $sidebarExpanded = true;
  }}>
  <svelte:component this={icon} />

  {#if $sidebarExpanded}
    <div class="grow text-left">
      <span>{name}</span>
    </div>
    <IconExpand class="motion-safe:transition-all {expanded ? 'rotate-90' : 'rotate-0'}" />
  {/if}
</button>

<div use:autoAnimate={{ duration: 200 }}>
  {#if expanded && $sidebarExpanded}
    <div class="flex flex-col ml-4 pb-2">
      {@render children()}
    </div>
  {/if}
</div>
