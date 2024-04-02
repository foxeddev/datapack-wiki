<script lang="ts">
    // Page imports
    import SidebarPage from "$lib/sidebar/SidebarPage.svelte";
    import SidebarCategory from "$lib/sidebar/SidebarCategory.svelte";
  
    // Icon imports
    // https://tabler-icons.io
    // import Icon<whatever name> from "~icons/tabler/<icon ID>"
    import IconHome from "~icons/tabler/home";
    import IconPennant from "~icons/tabler/pennant";
    import IconBox from "~icons/tabler/box";
    import IconCommand from "~icons/tabler/slash";
    import IconBrackets from "~icons/tabler/brackets-contain";
    import IconNBT from "~icons/tabler/braces";
    import IconStar from "~icons/tabler/star";
    import IconGrid from "~icons/tabler/grid-3x3";
    import IconButterfly from "~icons/tabler/butterfly";
    import IconCloud from "~icons/tabler/cloud";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />

<SidebarPage label="Getting Started" icon={IconPennant} page="/getting-started" />

<SidebarCategory name="Basics" icon={IconBox}>
    <SidebarPage label="Commands" icon={IconCommand} page="/commands" />
    <SidebarPage label="Functions" icon={IconPennant} page="/functions" />
    <SidebarPage label="Advancements" icon={IconStar} page="/advancements" />
    <SidebarPage label="Recipes" icon={IconGrid} page="/recipes" />
</SidebarCategory>

<SidebarCategory name="Command Reference" icon={IconCommand}>
    <SidebarPage label="function" icon={IconCommand} page="/command/function" />
    <SidebarPage label="execute" icon={IconCommand} page="/command/execute" />
    <SidebarPage label="data" icon={IconCommand} page="/command/data" />
    <SidebarPage label="summon" icon={IconCommand} page="/command/summon" />
</SidebarCategory>

<SidebarCategory name="Item Components" icon={IconBrackets}></SidebarCategory>

<SidebarCategory name="NBT Data" icon={IconNBT}>
    <SidebarPage label="SNBT" icon={IconNBT} page="/nbt/entity" />
    <SidebarPage label="Entity NBT" icon={IconButterfly} page="/nbt/entity" />
    <SidebarPage label="Block NBT" icon={IconBox} page="/nbt/block" />
    <SidebarPage label="Storages" icon={IconCloud} page="/nbt/storages" />
</SidebarCategory>