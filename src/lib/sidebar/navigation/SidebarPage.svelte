<script lang="ts">
  import { createData } from "$lib/stores.svelte";

  type Props = {
    icon: any;
    page: string;
    label: string;
  };

  const { icon, page, label }: Props = $props();
  let data = createData();
</script>

<a
  href={page}
  onclick={() => (data.windowWidth < 768 ? (data.sidebarExpanded = !data.sidebarExpanded) : null)}
  class="hover:bg-stone-700 hover:text-white hover:font-medium cursor-default py-1 rounded-lg flex gap-2 pl-1 items-center">
  <svelte:component this={icon} />

  {#if data.sidebarExpanded}
    <span>{label}</span>
  {/if}
</a>
