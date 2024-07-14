<script lang="ts">
  import { sidebarExpanded, windowWidth } from "$lib";
  import type { ComponentType, SvelteComponent } from "svelte";

  export let label: string;
  export let icon: ComponentType<SvelteComponent>;
  export let page: string;
</script>

<a
  href={page}
  on:click={() => ($windowWidth < 768 ? ($sidebarExpanded = !$sidebarExpanded) : null)}
  class="hover:bg-stone-700 hover:text-white hover:font-medium cursor-default py-1 rounded-lg flex gap-2 pl-1 items-center">
  <svelte:component this={icon} />

  {#if $sidebarExpanded}
    <span>{label}</span>
  {/if}
</a>
