<script lang="ts">
    import IconInfo from '~icons/tabler/info-circle';

</script>

<div class="bg-blue-500/25 w-fit min-w-[25%] border-l-4 border-blue-600 p-3 my-2">
    <div class="flex text-sm space-x-2 items-center text-blue-400 mb-1">
        <IconInfo />
        <span>INFO</span>
    </div>
    <slot />
</div>