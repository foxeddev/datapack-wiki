<script lang="ts">
	import SidebarPage from './SidebarPage.svelte';

	import SidebarCategory from './SidebarCategory.svelte';

	import '../app.css';

	import IconBasics from '~icons/tabler/box';
	import IconHome from '~icons/tabler/home';
	import IconPennant from '~icons/tabler/pennant';
	import IconBox from '~icons/tabler/box';
	import IconCommand from '~icons/tabler/slash';
	import IconBrackets from '~icons/tabler/brackets-contain';
	import IconNBT from '~icons/tabler/braces';
    import IconSearch from '~icons/tabler/search';
    import IconStar from '~icons/tabler/star'
    import IconGrid from '~icons/tabler/grid-3x3'
    import IconButterfly from '~icons/tabler/butterfly'
    import IconCloud from '~icons/tabler/cloud'

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

<div class="{$sidebarExpanded ? "w-[18%]" : "w-fit"} bg-stone-800 flex flex-col items-center">
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

		<SidebarCategory name="Basics" icon={IconBox}>
            <SidebarPage label="Commands" icon={IconCommand} page="/commands" />
			<SidebarPage label="Functions" icon={IconPennant} page="/functions" />
            <SidebarPage label="Advancements" icon={IconStar} page="/advancements" />
            <SidebarPage label="Recipes" icon={IconGrid} page="/recipes" />
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
            <SidebarPage label="SNBT" icon={IconNBT} page="/nbt/entity" />
			<SidebarPage label="Entity NBT" icon={IconButterfly} page="/nbt/entity" />
            <SidebarPage label="Block NBT" icon={IconBox} page="/nbt/block" />
			<SidebarPage label="Storages" icon={IconCloud} page="/nbt/storages" />
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
</div>


<dialog bind:this={dialog} class="w-1/3 bg-none">
	<div class="bg-stone-900 w-full p-4 gap-1 rounded-lg">
		<input
			class="bg-stone-950 w-full rounded-md focus:outline-0 text-white p-2 placeholder:text-stone-500"
			type="text"
			placeholder="Search for a page..."
			bind:value={searchTerm}
		/>
		{#each results as result}
			<a on:click={() => dialog.close()} href="/{result.url}">
				<div class="p-2 my-2 rounded-md hover:bg-black/20">
					<p class="text-stone-200 text-lg">
						{result.title}
						<span class="text-stone-500 text-xs">/{result.url}</span>
					</p>
				</div>
			</a>
			<a on:click={() => dialog.close()} href="/{result.url}">
				<div class="p-2 my-2 rounded-md hover:bg-black/20">
					<p class="text-stone-200 text-lg">
						{result.title}
						<span class="text-stone-500 text-xs">/{result.url}</span>
					</p>
				</div>
			</a>
		{:else}
			<p class="text-stone-500 mt-2">No results</p>
		{/each}
	</div>
</dialog>