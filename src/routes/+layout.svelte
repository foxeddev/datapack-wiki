<script lang="ts">
  import Sidebar from '../lib/Sidebar.svelte';

    import "../app.css";
</script>
  
<div class="font-lexend bg-stone-900 h-screen text-stone-200">
    <div class="bg-white/10 h-[6%] flex items-center px-2 space-x-2">
        <img src="/logos/dph.svg" class="h-9">
        <h1 class="font-bold text-lg">Datapack Wiki</h1>
    </div>
    <div class="flex h-[94%]">
        <Sidebar />
        <div class="flex flex-col w-5/6">
            <div class="p-3 prose prose-headings:text-stone-200 text-stone-200">
                <slot />
            </div>
        </div>
    </div>
</div>