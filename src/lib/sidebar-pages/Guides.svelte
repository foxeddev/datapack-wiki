<script lang="ts">
  // Page imports
  import SidebarPage from "$lib/sidebar/SidebarPage.svelte";
  import SidebarCategory from "$lib/sidebar/SidebarCategory.svelte";

  // Icon imports
  // https://tabler-icons.io
  // import Icon<whatever name> from "~icons/tabler/<icon ID>"
  import IconHome from "~icons/tabler/home";
  import IconPennant from "~icons/tabler/pennant";
  import IconNew from "~icons/tabler/folder-plus";
  import IconMusic from "~icons/tabler/music";
  import IconBug from "~icons/tabler/bug";
  import IconFileZip from "~icons/tabler/zip";
  import IconArrow from "~icons/tabler/ArcheryArrow";
  import IconBrackets from "~icons/tabler/code";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />
<SidebarPage label="Getting Started" icon={IconPennant} page="/guide/getting-started" />
<SidebarPage label="Debugging your Datapacks" icon={IconBug} page="/guide/debugging-datapacks" />
<SidebarPage label="Installing a Datapack" icon={IconFileZip} page="/guide/installing-a-datapack" />
<SidebarPage label="Creating a Datapack" icon={IconBrackets} page="/guide/creating-a-datapack" />

<SidebarCategory name="Adding new features" icon={IconNew}>
  <SidebarPage label="Adding Jukebox Songs" icon={IconMusic} page="/guide/jukebox-songs" />
  <SidebarPage label="Random Numbers (old)" icon={IconBrackets} page="/guide/random-number-old" />
  <SidebarPage label="Player ID System" icon={IconBrackets} page="/guide/player-id-system" />
  <SidebarPage label="Custom Items (old)" icon={IconBrackets} page="/guide/player-id-system" />
  <SidebarPage label="Raycasts" icon={IconArrow} page="/guide/raycasts" />
</SidebarCategory>

<SidebarCategory name="Right Click Detection" icon={IconNew}>
  <SidebarPage label="Summary" icon={IconPennant} page="/guide/right-click" />
  <SidebarPage label="Carrot on a Stick" icon={IconPennant} page="/guide/right-click/coas" />
  <SidebarPage label="Eye of Ender" icon={IconPennant} page="/guide/right-click/eoe" />
  <SidebarPage label="Food" icon={IconPennant} page="/guide/right-click/food" />
  <SidebarPage label="Interaction Entity" icon={IconPennant} page="/guide/right-click/interaction" />
</SidebarCategory>
