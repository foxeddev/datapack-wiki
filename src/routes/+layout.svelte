<script lang="ts">
	import Sidebar from '../lib/Sidebar.svelte';

	import '../app.css';
</script>

<div class="font-lexend bg-stone-900 h-screen text-stone-200">
	<div class="bg-stone-800 h-[6%] flex items-center px-2">
		<div class="flex items-center space-x-2 flex-grow">
			<img alt="Datapack Hub Logo" src="/logos/dph.svg" class="h-9" />
			<h1 class="font-bold text-lg">Datapack Wiki</h1>
		</div>
		<a href="https://discord.datapackhub.net/" class="bg-blue-600 px-3 py-1 rounded-lg m-1">Join our discord</a>
	</div>
	<div class="flex h-[94%] w-full">
		<Sidebar />
		<div class="flex flex-col w-5/6">
			<div class="p-3 w-full prose md prose-headings:text-stone-200 text-stone-200">
				<slot />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
