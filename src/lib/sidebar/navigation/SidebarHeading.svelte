<script lang="ts">
  import { sidebarExpanded } from "$lib/stores.svelte";

  const { label } = $props();
</script>

<span class="uppercase text-sm mt-4 text-zinc-400 {$sidebarExpanded ? 'block' : 'hidden'}">{label}</span>
