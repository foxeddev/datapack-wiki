<script lang="ts">
	import Sidebar from '../lib/Sidebar.svelte';

	import IconShare from '~icons/tabler/share';
	import IconDiscord from '~icons/tabler/brand-discord';

	import '../app.css';

	var shareText = "Share"

	function copyUrl(){
		navigator.clipboard.writeText(window.location.href);
		shareText = "Copied!"
		setTimeout(() => {
			shareText = "Share"
		},2000)
	}
</script>

<div class="font-lexend bg-stone-900 h-screen text-stone-200">
	<div class="bg-stone-800 h-[6%] flex items-center px-2">
		<div class="flex items-center space-x-2 flex-grow">
			<img alt="Datapack Hub Logo" src="/logos/dph.svg" class="h-9" />
			<h1 class="font-bold text-lg">Datapack Wiki</h1>
		</div>
		<div class="flex items-center space-x-2 h-full">
			<a href="https://discord.datapackhub.net" class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 hover:text-stone-100">
				<IconDiscord />
				<span>Discord</span>
			</a> 
			<button class="bg-black/45 p-2 rounded-lg py-1 flex items-center space-x-2 hover:text-stone-100" on:click={copyUrl}>
				<IconShare />
				<span>{shareText}</span>
			</button> 
		</div>
	</div>
	<div class="flex h-[94%] w-full bg-stone-800">
		<Sidebar />
		<div class="flex flex-col w-full">
			<div class="p-3 w-full prose md prose-headings:text-stone-200 text-stone-200 bg-stone-900 h-full">
				<slot />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
