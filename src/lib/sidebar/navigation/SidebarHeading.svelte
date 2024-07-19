<script lang="ts">
  import { sidebarExpanded } from "$lib/stores";

  export let label: string;
</script>

<span class="uppercase text-sm mt-4 text-zinc-400 {$sidebarExpanded ? 'block' : 'hidden'}">{label}</span>
