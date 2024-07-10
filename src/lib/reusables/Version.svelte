<script lang="ts">
  import IconTick from "~icons/tabler/rosette-discount-check";
</script>

<div class="bg-stone-500/25 w-fit min-w-[25%] border-l-4 border-green-600 p-3 py-2 mb-4">
  <div class="flex text-sm space-x-2 items-center text-stone-400">
    <IconTick />
    <span>
      <slot />
    </span>
  </div>
</div>
