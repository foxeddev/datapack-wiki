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
	class="hover:bg-stone-700 py-2 rounded-lg flex gap-2 cursor-default p-1 items-center"
	on:click={() => {expanded = !expanded; $sidebarExpanded = true}}
>
	<svelte:component this={icon} />
	{#if $sidebarExpanded}
		<div class="flex-grow text-left mr-12">
			<span>{name}</span>
		</div>	
		{#if !expanded}
			<IconExpand />
		{:else}
			<IconDexpand />
		{/if}
	{/if}
</button>
{#if expanded && $sidebarExpanded}
	<div class="flex flex-col ml-4">
		<slot />
	</div>
{/if}
