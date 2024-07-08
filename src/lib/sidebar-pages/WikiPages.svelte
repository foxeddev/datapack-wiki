<script lang="ts">
  // Page imports
  import SidebarPage from "$lib/sidebar/SidebarPage.svelte";
  import SidebarCategory from "$lib/sidebar/SidebarCategory.svelte";

  // Icon imports
  // https://tabler-icons.io
  // import Icon<whatever name> from "~icons/tabler/<icon ID>"
  import IconHome from "~icons/tabler/home";
  import IconAt from "~icons/tabler/at";
  import IconZip from "~icons/tabler/file-zip";
  import IconPennant from "~icons/tabler/pennant";
  import IconBox from "~icons/tabler/box";
  import IconCommand from "~icons/tabler/slash";
  import IconNBT from "~icons/tabler/braces";
  import IconStar from "~icons/tabler/star";
  import IconGrid from "~icons/tabler/grid-3x3";
  import IconButterfly from "~icons/tabler/butterfly";
  import IconCloud from "~icons/tabler/cloud";
  import IconAlienShapedWeirdGraphThingy from "~icons/tabler/sitemap";
  import IconWorldgen from "~icons/tabler/mountain";
  import IconFilters from "~icons/tabler/filters";
  import IconGlobe from "~icons/tabler/globe";
  import IconList from "~icons/tabler/list-details";
  import IconComponents from "~icons/tabler/brackets-contain";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />

<SidebarCategory name="Basics" icon={IconBox}>
  <SidebarPage label="Commands" icon={IconCommand} page="/wiki/basics/commands" />
  <SidebarPage label="Target Selectors" icon={IconAt} page="/wiki/basics/target_selectors" />
  <SidebarPage label="Item Components" icon={IconComponents} page="/wiki/basics/item_components" />
</SidebarCategory>

<SidebarCategory name="Datapack Files" icon={IconZip}>
  <SidebarPage label="Functions" icon={IconPennant} page="/wiki/files/functions" />
  <SidebarPage label="Tags" icon={IconFilters} page="/wiki/files/tags" />
  <SidebarPage label="Advancements" icon={IconStar} page="/wiki/files/advancements" />
  <SidebarPage label="Recipes" icon={IconGrid} page="/wiki/files/recipes" />
  <SidebarPage label="Loot Tables" icon={IconAlienShapedWeirdGraphThingy} page="/wiki/files/recipes" />
</SidebarCategory>

<SidebarCategory name="Command Reference" icon={IconCommand}>
  <SidebarPage label="Commands List" icon={IconList} page="/wiki/command/all" />
  <SidebarPage label="function" icon={IconCommand} page="/wiki/command/function" />
  <SidebarPage label="execute" icon={IconCommand} page="/wiki/command/execute" />
  <SidebarPage label="data" icon={IconCommand} page="/wiki/command/data" />
  <SidebarPage label="summon" icon={IconCommand} page="/wiki/command/summon" />
</SidebarCategory>

<SidebarCategory name="NBT Data" icon={IconNBT}>
  <SidebarPage label="SNBT" icon={IconNBT} page="/wiki/nbt/snbt" />
  <SidebarPage label="Entity NBT" icon={IconButterfly} page="/wiki/nbt/entity" />
  <SidebarPage label="Block NBT" icon={IconBox} page="/wiki/nbt/block" />
  <SidebarPage label="Storages" icon={IconCloud} page="/wiki/nbt/storages" />
</SidebarCategory>

<SidebarCategory name="Worldgen" icon={IconWorldgen}></SidebarCategory>

<SidebarPage label="Site Development" icon={IconGlobe} page="/wiki/site-dev" />
