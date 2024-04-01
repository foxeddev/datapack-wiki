<script lang="ts">
	import SidebarPage from './SidebarPage.svelte';

	import SidebarCategory from './SidebarCategory.svelte';

	import '../app.css';

	import IconHome from '~icons/tabler/home';
	import IconPennant from '~icons/tabler/pennant';
	import IconBasics from '~icons/tabler/box';
	import IconCommand from '~icons/tabler/slash';
	import IconBrackets from '~icons/tabler/brackets-contain';
	import IconNBT from '~icons/tabler/braces';
	import IconMenu from '~icons/tabler/menu2';
    import IconSearch from '~icons/tabler/search';

    import IconCollapse from '~icons/tabler/chevron-left'
    import IconUnCollapse from '~icons/tabler/chevron-right'
	import { sidebarExpanded } from '$lib';
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
        <div class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 mb-2">
            <IconSearch />
            <input class="bg-black/0 w-full focus:outline-0"/>
        </div> 
        {/if}
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
	</div>
    <div class="text-sm text-stone-600 p-2 flex items-center w-full">
        {#if $sidebarExpanded}
        <span class="flex-grow flex flex-col items-center">
            BETA - Dev Version
        </span>
        <button class="text-stone-200 text-lg" on:click={() => ($sidebarExpanded = !$sidebarExpanded)}>
            <IconCollapse />
        </button>
        {:else}
        <button class="text-stone-200 text-lg flex-grow" on:click={() => ($sidebarExpanded = !$sidebarExpanded)}>
            <IconUnCollapse />
        </button>
        {/if}
    </div>
</div>
