<script lang="ts">
  import { sidebarExpanded, windowWidth } from "$lib";
  import type { ComponentType, SvelteComponent } from "svelte";

  export let label: string;
</script>

<span class="uppercase text-sm mt-2 text-zinc-400">{label}</span>