<script lang="ts">
  import { sidebarExpanded } from "$lib/stores";
  import type { ComponentType, SvelteComponent } from "svelte";

  export let label: string;
  export let icon: ComponentType<SvelteComponent>;
</script>

<div class="cursor-default py-1 rounded-lg flex gap-2 pl-1 items-center text-stone-500">
  <svelte:component this={icon} />

  {#if $sidebarExpanded}
    <span>{label}</span>
  {/if}
</div>
