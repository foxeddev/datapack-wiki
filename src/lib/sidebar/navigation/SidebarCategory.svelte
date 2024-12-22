<script lang="ts">
  import { windowInfo } from "$lib/stores.svelte";
  import type { Snippet } from "svelte";
  import IconExpand from "~icons/tabler/chevron-right";

  type Props = {
    name: string;
    icon: any;
    children: Snippet;
  };

  const { children, name, icon }: Props = $props();

  let expanded = $state(false);

  const Icon = $derived(icon);
</script>

<a
  href="#"
  class="hover:bg-stone-700 hover:text-white hover:font-medium rounded-lg flex gap-2 cursor-default p-1 items-center w-full"
  onclick={() => {
    expanded = !expanded;
    windowInfo.isNavOpen = true;
  }}>
  <Icon />

  {#if windowInfo.isNavOpen}
    <div class="grow text-left">
      <span>{name}</span>
    </div>
    <IconExpand class="motion-safe:transition-all {expanded ? 'rotate-90' : 'rotate-0'}" />
  {/if}
</a>

<div>
  {#if expanded && windowInfo.isNavOpen}
    <div class="flex flex-col ml-4 pb-2">
      {@render children()}
    </div>
  {/if}
</div>
