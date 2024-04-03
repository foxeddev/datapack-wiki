<script lang="ts">
  import IconTick from "~icons/tabler/rosette-discount-check";
</script>

<div class="bg-green-500/25 w-fit min-w-[25%] border-l-4 border-green-600 p-3 my-2">
  <div class="flex text-sm space-x-2 items-center text-white-400 mb-1">
    <IconTick /> 
    <slot />
  </div>
</div>
