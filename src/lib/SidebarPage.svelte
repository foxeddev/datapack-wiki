<script lang="ts">
    export var label: string
    export var icon: ConstructorOfATypedSvelteComponent
    export var page: string
</script>

<a href={page} class="hover:bg-stone-700 cursor-default p-2 rounded-lg flex items-center space-x-2">
    <svelte:component this={icon} />
    <span>{label}</span>
</a>

