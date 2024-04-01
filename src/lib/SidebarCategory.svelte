<script lang="ts">
	import '../app.css';
	import IconExpand from '~icons/tabler/chevron-right';
	import IconDexpand from '~icons/tabler/chevron-down';
	import type { ComponentType, SvelteComponent } from 'svelte';
	import { sidebarExpanded } from '$lib';

	export let name: string;
	export let icon: ComponentType<SvelteComponent>;

	let expanded = false;
</script>

<button
	class="hover:bg-stone-700 py-2 rounded-lg flex items-center gap-2 cursor-default"
	on:click={() => (expanded = !expanded)}
>
	<svelte:component this={icon} />
	{#if $sidebarExpanded}
		<div class="flex-grow text-left mr-12">
			<span>{name}</span>
		</div>
	{/if}
	{#if !expanded}
		<IconExpand />
	{:else}
		<IconDexpand />
	{/if}
</button>
{#if expanded}
	<div class="flex flex-col space-y-1 ml-4">
		<slot />
	</div>
{/if}
