<script lang="ts">
  // Page imports
  import SidebarPage from "$lib/sidebar/SidebarPage.svelte";
  import SidebarCategory from "$lib/sidebar/SidebarCategory.svelte";
  import SidebarHeading from "$lib/sidebar/SidebarHeading.svelte";

  // Icon imports
  // https://tabler-icons.io
  // import Icon<whatever name> from "~icons/tabler/<icon ID>"
  import IconHome from "~icons/tabler/home";
  import IconPennant from "~icons/tabler/pennant";
  import IconNew from "~icons/tabler/folder-plus";
  import IconMusic from "~icons/tabler/music";
  import IconBug from "~icons/tabler/bug";
  import IconFileZip from "~icons/tabler/zip";
  import IconArrow from "~icons/tabler/arrow-down-left-circle";
  import IconBrackets from "~icons/tabler/code";
  import IconMouse from "~icons/tabler/mouse";
  import IconCarrot from "~icons/tabler/carrot";
  import IconEye from "~icons/tabler/eye";
  import IconApple from "~icons/tabler/apple";
  import IconSelection from "~icons/tabler/new-section";
  import IconDice from "~icons/tabler/dice-5";
  import IconID from "~icons/tabler/id-badge";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />
<SidebarPage label="Getting Started" icon={IconPennant} page="/guide/getting-started" />
<SidebarPage label="Installing datapacks" icon={IconFileZip} page="/guide/installing-a-datapack" />
<SidebarHeading label="Advanced" />
<SidebarCategory name="Adding new features" icon={IconNew}>
  <SidebarPage label="Jukebox Songs" icon={IconMusic} page="/guide/jukebox-songs" />
  <SidebarPage label="Custom Items" icon={IconApple} page="/guide/custom-items" />
</SidebarCategory>

<SidebarCategory name="Right Click Detection" icon={IconMouse}>
  <SidebarPage label="Summary" icon={IconPennant} page="/guide/right-click" />

  <SidebarHeading label="Techniques" />
  <SidebarPage label="Carrot on a Stick" icon={IconCarrot} page="/guide/right-click/coas" />
  <SidebarPage label="Eye of Ender" icon={IconEye} page="/guide/right-click/eoe" />
  <SidebarPage label="Food" icon={IconApple} page="/guide/right-click/food" />
  <SidebarPage label="Interaction Entity" icon={IconSelection} page="/guide/right-click/interaction" />
</SidebarCategory>

<SidebarCategory name="Technical" icon={IconBrackets}>
  <SidebarPage label="Debugging" icon={IconBug} page="/guide/debugging" />
  <SidebarPage label="Random Numbers (old)" icon={IconDice} page="/guide/random-number-old" />
  <SidebarPage label="Player ID System" icon={IconID} page="/guide/player-id-system" />
  <SidebarPage label="Raycasts" icon={IconArrow} page="/guide/raycasts" />
  <SidebarPage label="Slowcasts" icon={IconArrow} page="/guide/slowcasts" />
</SidebarCategory>
