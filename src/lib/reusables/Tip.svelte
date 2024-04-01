<script lang="ts">
    import IconTip from '~icons/tabler/bulb';

</script>

<div class="bg-yellow-400/25 w-fit min-w-[25%] border-l-4 border-yellow-500 p-3 my-2">
    <div class="flex text-sm space-x-2 items-center text-yellow-300 mb-1">
        <IconTip />
        <span>TIP</span>
    </div>
    <slot />
</div>