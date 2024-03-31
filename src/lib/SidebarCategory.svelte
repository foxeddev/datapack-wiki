<script lang="ts">
    import "../app.css";
    import IconExpand from '~icons/tabler/chevron-right'
    import IconDexpand from '~icons/tabler/chevron-down'
    import type { SvelteComponent } from "svelte";

    export var name: string
    export var icon: ConstructorOfATypedSvelteComponent;

    var expanded = false
</script>

<a class="hover:bg-stone-700 p-2 rounded-lg flex items-center space-x-2 cursor-default" on:click={() => expanded = !expanded}>
    <svelte:component this={icon} />
    <div class="flex-grow">
        <span>{name}</span>
    </div>
    {#if !expanded}
    <IconExpand />
    {:else}
    <IconDexpand />
    {/if}
</a>
{#if expanded}
<div class="flex flex-col space-y-1 ml-4">
    <slot />
</div>
{/if}

