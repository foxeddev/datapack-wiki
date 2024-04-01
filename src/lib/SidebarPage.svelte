<script lang="ts">
	import { sidebarExpanded } from '$lib';
	import type { ComponentType, SvelteComponent } from 'svelte';

	export let label: string;
	export let icon: ComponentType<SvelteComponent>;
	export let page: string;
</script>

<a
	href={page}
	class="hover:bg-stone-700 cursor-default py-2 rounded-lg flex gap-2"
>
	<svelte:component this={icon} />
	{#if $sidebarExpanded}
		<span>{label}</span>
	{/if}
</a>
