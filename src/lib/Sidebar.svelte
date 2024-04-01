<script lang="ts">
	import SidebarPage from './SidebarPage.svelte';

	import SidebarCategory from './SidebarCategory.svelte';

	import '../app.css';

	import IconBasics from '~icons/tabler/box';
	import IconNBT from '~icons/tabler/braces';
	import IconBrackets from '~icons/tabler/brackets-contain';
	import IconHome from '~icons/tabler/home';
	import IconPennant from '~icons/tabler/pennant';
	import IconSearch from '~icons/tabler/search';
	import IconCommand from '~icons/tabler/slash';

	import { sidebarExpanded } from '$lib';
	import IconCollapse from '~icons/tabler/chevron-left';
	import { onMount } from 'svelte';
	import { createSearchIndex, search, type Post } from './search';

	let results: Post[] = [];
	let searchTerm = '';
	let searchState: 'waiting' | 'done' = 'waiting';

	onMount(async () => {
		const posts = await fetch('/search/').then((r) => r.json());
		createSearchIndex(posts);
		searchState = 'done';
	});

	$: if (searchState === 'done') {
		results = search(searchTerm);
	}

	let dialog: HTMLDialogElement;
</script>

<div class="w-fit max-w-[16.66%] bg-stone-800 flex flex-col items-center">
	<div class="flex flex-col p-2 pt-1 flex-grow overflow-y-auto">
		<!-- <button
			class="bg-stone-600 size-8 rounded-md flex items-center justify-center"
			on:click={() => ($sidebarExpanded = !$sidebarExpanded)}
		>
			<IconMenu />
		</button> -->
		{#if $sidebarExpanded}
			<button
				class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 mb-2"
				on:click={() => dialog.showModal()}
			>
				<IconSearch />
				<!-- <input class="bg-black/0 w-full focus:outline-0" /> -->
			</button>
		{/if}

		<!-- Add Sidebar Pages below! -->

		<SidebarPage label="Home" icon={IconHome} page="/" />
		<SidebarPage
			label="Getting Started"
			icon={IconPennant}
			page="/getting-started"
		/>

		<SidebarCategory name="Basics" icon={IconBasics}>
			<SidebarPage label="Functions" icon={IconPennant} page="/functions" />
		</SidebarCategory>

		<SidebarCategory name="Command Reference" icon={IconCommand}>
			<SidebarPage
				label="function"
				icon={IconCommand}
				page="/command/function"
			/>
			<SidebarPage label="execute" icon={IconCommand} page="/command/execute" />
			<SidebarPage label="data" icon={IconCommand} page="/command/data" />
			<SidebarPage label="summon" icon={IconCommand} page="/command/summon" />
		</SidebarCategory>

		<SidebarCategory name="Item Components" icon={IconBrackets}
		></SidebarCategory>

		<SidebarCategory name="NBT Data" icon={IconNBT}>
			<SidebarPage label="Entity NBT" icon={IconBrackets} page="/nbt/entity" />
			<SidebarPage label="Storages" icon={IconBasics} page="/nbt/storages" />
		</SidebarCategory>

		<!-- End of Sidebar Pages -->
	</div>
	<div class="text-sm text-stone-600 p-2 flex items-center w-full">
		{#if $sidebarExpanded}
			<span class="flex-grow flex flex-col items-center">
				BETA - Dev Version
			</span>
		{/if}
		<button
			class="text-stone-200 text-lg transition-all {$sidebarExpanded
				? 'rotate-0'
				: 'rotate-180'}"
			on:click={() => ($sidebarExpanded = !$sidebarExpanded)}
		>
			<IconCollapse />
		</button>
	</div>

	<dialog bind:this={dialog}>
		<div class="bg-stone-800 w-full md:max-w-xl max-w-full p-4 gap-1">
			<input
				class="bg-stone-900 w-full focus:outline-0 text-white p-2 placeholder:text-stone-500"
				type="text"
				placeholder="Looking for something?"
				bind:value={searchTerm}
			/>
			{#each results as result}
				<a on:click={() => dialog.close()} href="/{result.url}">
					<div class="p-2 my-4 bg-stone-700 rounded-md">
						<p class="text-stone-200 text-xl">
							{result.title}
							<span class="text-stone-500 text-xs">/{result.url}</span>
						</p>
						<span class="text-stone-500 line-clamp-2">
							{result.content}
						</span>
					</div>
				</a>
			{:else}
				<p class="text-stone-500">No results</p>
			{/each}
		</div>
	</dialog>
</div>
