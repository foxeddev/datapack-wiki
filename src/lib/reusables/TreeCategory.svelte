<script lang="ts">
  export let label = "No Label!";

  import IconThing from "~icons/tabler/CaretDown";

  let open = true;
</script>

<ul class="not-prose flex flex-col h-auto">
  <button class="flex items-center h-7 w-max" on:click={() => open = !open}>
    <IconThing class="{open ? "rotate-0" : "-rotate-90"} motion-safe:transition-all size-4" />
    <p class="w-max">{label}</p>
  </button>
  {#if open}
    <slot/>
  {/if}
</ul>
