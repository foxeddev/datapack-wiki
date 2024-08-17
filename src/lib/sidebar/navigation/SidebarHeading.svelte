<script lang="ts">
  import { createData } from "$lib/stores.svelte";

  const { label } = $props();
  let data = createData();
</script>

<span class="uppercase text-sm mt-4 text-zinc-400 {data.sidebarExpanded ? 'block' : 'hidden'}">{label}</span>
