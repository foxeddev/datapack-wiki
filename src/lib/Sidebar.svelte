<script lang="ts">
  import SidebarCategory from './SidebarCategory.svelte';

    import "../app.css";
    import IconGo from '~icons/tabler/chevron-right'
    import IconPennant from '~icons/tabler/pennant'
    import IconBasics from '~icons/tabler/box'
    import IconCommand from '~icons/tabler/slash'
    import IconBrackets from '~icons/tabler/brackets-contain'
    import IconNBT from '~icons/tabler/braces'
</script>

<div class="w-1/6 bg-stone-800">
    <div class="flex flex-col p-2 space-y-1">
        <a href="other" class="bg-stone-700 p-2 rounded-lg flex items-center space-x-2">
            <IconPennant />
            <div class="flex-grow">
                <span>Getting Started</span>
            </div>
        </a>
        <SidebarCategory name="Basics" icon={IconBasics}>
            <a href="other" class="bg-stone-700 p-2 rounded-lg flex items-center space-x-2">
                <IconPennant />
                <div class="flex-grow">
                    <span>Functions</span>
                </div>
            </a>
        </SidebarCategory>
        <a href="other" class="p-2 rounded-lg flex items-center space-x-2">
            <IconCommand />
            <div class="flex-grow">
                <span>Command Reference</span>
            </div>
            <IconGo />
        </a>
        <a href="other" class="p-2 rounded-lg flex items-center space-x-2">
            <IconBrackets />
            <div class="flex-grow">
                <span>Item Components</span>
            </div>
            <IconGo />
        </a>
        <a href="other" class="p-2 rounded-lg flex items-center space-x-2">
            <IconNBT />
            <div class="flex-grow">
                <span>NBT Data</span>
            </div>
            <IconGo />
        </a>
    </div>
</div>

