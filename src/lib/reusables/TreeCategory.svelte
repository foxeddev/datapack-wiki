<script lang="ts">

  import IconThing from "~icons/tabler/CaretDown";
  interface Props {
    label?: string;
    children?: import('svelte').Snippet;
  }

  let { label = "No Label!", children }: Props = $props();

  let open = $state(true);
</script>

<ul class="not-prose flex flex-col h-auto">
  <button class="flex items-center h-7 w-max" onclick={() => (open = !open)}>
    <IconThing class="{open ? 'rotate-0' : '-rotate-90'} motion-safe:transition-all size-4" />
    <p class="w-max">{label}</p>
  </button>
  {#if open}
    {@render children?.()}
  {/if}
</ul>
