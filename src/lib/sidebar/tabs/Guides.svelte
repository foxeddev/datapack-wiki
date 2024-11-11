<script lang="ts">
  // Page imports
  import SidebarPage from "$lib/sidebar/navigation/SidebarPage.svelte";
  import SidebarCategory from "$lib/sidebar/navigation/SidebarCategory.svelte";
  import SidebarHeading from "$lib/sidebar/navigation/SidebarHeading.svelte";

  // Icon imports
  // https://tabler-icons.io
  // import Icon<whatever name> from "~icons/tabler/<icon ID>"
  import IconHome from "~icons/tabler/home";
  import IconPennant from "~icons/tabler/pennant";
  import IconNew from "~icons/tabler/folder-plus";
  import IconMusic from "~icons/tabler/music";
  import IconBug from "~icons/tabler/bug";
  import IconDownload from "~icons/tabler/zip";
  import IconArrow from "~icons/tabler/arrow-down-left-circle";
  import IconBrackets from "~icons/tabler/code";
  import IconMouse from "~icons/tabler/mouse";
  import IconCarrot from "~icons/tabler/carrot";
  import IconEye from "~icons/tabler/eye";
  import IconApple from "~icons/tabler/apple";
  import IconSelection from "~icons/tabler/new-section";
  import IconDice from "~icons/tabler/dice-5";
  import IconID from "~icons/tabler/id-badge-2";
  import IconGrid from "~icons/tabler/grid-3x3";
  import IconItem from "~icons/tabler/icons";
  import IconServer from "~icons/tabler/server";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />
<SidebarPage label="Getting Started" icon={IconPennant} page="/guide/getting-started" />
<SidebarPage label="Installing datapacks" icon={IconDownload} page="/guide/installing-a-datapack" />
<SidebarPage label="Choosing a Server" icon={IconServer} page="/guide/choosing-a-server" />

<SidebarHeading label="Advanced" />
<SidebarCategory name="Adding new features" icon={IconNew}>
  <SidebarPage label="Jukebox Songs" icon={IconMusic} page="/guide/adding-new-features/jukebox-songs" />

  <SidebarHeading label="Custom Items" />
  <SidebarPage label="Introduction" icon={IconItem} page="/guide/adding-new-features/custom-items/intro" />
  <SidebarPage label="Custom Item Recipes" icon={IconGrid} page="/guide/adding-new-features/custom-items/crafting" />
</SidebarCategory>

<SidebarCategory name="Right Click Detection" icon={IconMouse}>
  <SidebarPage label="Summary" icon={IconPennant} page="/guide/right-click" />

  <SidebarHeading label="Techniques" />
  <SidebarPage label="Carrot on a Stick" icon={IconCarrot} page="/guide/right-click/coas" />
  <SidebarPage label="Eye of Ender" icon={IconEye} page="/guide/right-click/eoe" />
  <SidebarPage label="Consumable Component" icon={IconApple} page="/guide/right-click/consumable_component" />
  <SidebarPage label="Interaction Entity" icon={IconSelection} page="/guide/right-click/interaction" />
</SidebarCategory>

<SidebarCategory name="Technical" icon={IconBrackets}>
  <SidebarPage label="Debugging" icon={IconBug} page="/guide/technical/debugging" />
  <SidebarPage label="Random Numbers" icon={IconDice} page="/guide/technical/random-numbers" />
  <SidebarPage label="Player ID System" icon={IconID} page="/guide/technical/player-id-system" />
  <SidebarPage label="Raycasts" icon={IconArrow} page="/guide/technical/raycasts" />
  <SidebarPage label="Slowcasts" icon={IconArrow} page="/guide/technical/slowcasts" />
</SidebarCategory>
