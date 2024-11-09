<script lang="ts">
  import { sidebarExpanded } from "$lib/stores.svelte";

  type Props = {
    label: string;
    icon: any;
  };

  const { label, icon }: Props = $props();

  const Icon = $derived(icon);
</script>

<div class="cursor-default py-1 rounded-lg flex gap-2 pl-1 items-center text-stone-500">
  <Icon />

  {#if $sidebarExpanded}
    <span>{label}</span>
  {/if}
</div>
