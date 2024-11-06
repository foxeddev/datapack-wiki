<script lang="ts">
  import { sidebarExpanded, windowWidth } from "$lib/stores";

  type Props = {
    icon: any;
    page: string;
    label: string;
  };

  const { icon, page, label }: Props = $props();

  const Icon = $derived(icon);
</script>

<a
  href={page}
  onclick={() => ($windowWidth < 768 ? ($sidebarExpanded = !$sidebarExpanded) : null)}
  class="hover:bg-stone-700 hover:text-white hover:font-medium cursor-default py-1 rounded-lg flex gap-2 pl-1 items-center">
  <Icon />

  {#if $sidebarExpanded}
    <span>{label}</span>
  {/if}
</a>
