<script lang="ts">
  // Page imports
  import SidebarPage from "$lib/sidebar/navigation/SidebarPage.svelte";
  import SidebarCategory from "$lib/sidebar/navigation/SidebarCategory.svelte";
  import SidebarHeading from "$lib/sidebar/navigation/SidebarHeading.svelte";
  import SidebarPlaceholder from "$lib/sidebar/navigation/SidebarPlaceholder.svelte";

  // Icon imports
  // https://tabler-icons.io
  // import Icon<whatever name> from "~icons/tabler/<icon ID>"

  import IconHome from "~icons/tabler/home";
  import IconAt from "~icons/tabler/at";
  import IconZip from "~icons/tabler/file-zip";
  import IconPennant from "~icons/tabler/pennant";
  import IconBox from "~icons/tabler/box";
  import IconCommand from "~icons/tabler/slash";
  import IconCommands from "~icons/tabler/slashes";
  import IconBraces from "~icons/tabler/braces";
  import IconStar from "~icons/tabler/star";
  import IconGrid from "~icons/tabler/grid-3x3";
  import IconButterfly from "~icons/tabler/butterfly";
  import IconCloud from "~icons/tabler/cloud";
  import IconChest from "~icons/tabler/brand-minecraft";
  import IconWorldgen from "~icons/tabler/mountain";
  import IconFilters from "~icons/tabler/filters";
  import IconList from "~icons/tabler/list-details";
  import IconComponents from "~icons/tabler/brackets-contain";
  import IconTilde from "~icons/tabler/tilde";
  import IconResourceLocation from "~icons/tabler/abc";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />

<SidebarCategory name="Commands" icon={IconCommand}>
  <SidebarPage label="About" icon={IconCommand} page="/wiki/commands/about" />

  <SidebarHeading label="Command Arguments" />
  <SidebarPage label="Target Selectors" icon={IconAt} page="/wiki/commands/target_selectors" />
  <SidebarPage label="Coordinates" icon={IconTilde} page="/wiki/commands/coordinates" />
  <SidebarPage label="Item Components" icon={IconComponents} page="/wiki/commands/item_components" />
  <SidebarPlaceholder label="JSON Text" icon={IconBraces} />
  <SidebarPlaceholder label="Resource Locations" icon={IconResourceLocation} />
</SidebarCategory>

<SidebarCategory name="Datapack Files" icon={IconZip}>
  <SidebarPage label="Functions" icon={IconPennant} page="/wiki/files/functions" />
  <SidebarPage label="Tags" icon={IconFilters} page="/wiki/files/tags" />
  <SidebarPage label="Recipes" icon={IconGrid} page="/wiki/files/recipes" />
  <SidebarPlaceholder label="Advancements" icon={IconStar} />
  <SidebarPlaceholder label="Loot Tables" icon={IconChest} />
</SidebarCategory>

<SidebarCategory name="Command Reference" icon={IconCommands}>
  <SidebarPage label="Commands List" icon={IconList} page="/wiki/command/all" />

  <SidebarHeading label="Commonly Used" />
  <SidebarPage label="function" icon={IconCommand} page="/wiki/command/function" />
  <SidebarPage label="execute" icon={IconCommand} page="/wiki/command/execute" />
  <SidebarPage label="summon" icon={IconCommand} page="/wiki/command/summon" />
  <SidebarPlaceholder label="data" icon={IconCommand} />
</SidebarCategory>

<SidebarCategory name="NBT Data" icon={IconBraces}>
  <SidebarPage label="NBT" icon={IconBraces} page="/wiki/nbt/nbt" />
  <SidebarPlaceholder label="Entity NBT" icon={IconButterfly} />
  <SidebarPlaceholder label="Block NBT" icon={IconBox} />
  <SidebarPage label="Storages" icon={IconCloud} page="/wiki/nbt/storages" />
</SidebarCategory>

<SidebarPlaceholder label="Worldgen" icon={IconWorldgen} />
