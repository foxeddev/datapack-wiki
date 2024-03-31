<script lang="ts">
    import "../app.css";
    import IconGo from '~icons/tabler/chevron-right'
    import IconPennant from '~icons/tabler/pennant'
    import IconBasics from '~icons/tabler/box'
    import IconCommand from '~icons/tabler/slash'
    import IconBrackets from '~icons/tabler/brackets-contain'
    import IconNBT from '~icons/tabler/braces'
    import type { SvelteComponent } from "svelte";

    export var name: string
    export var icon: ConstructorOfATypedSvelteComponent;
</script>

<a href="other" class="p-2 rounded-lg flex items-center space-x-2">
    <svelte:component this={icon} />
    <div class="flex-grow">
        <span>{name}</span>
    </div>
    <IconGo />
</a>

