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
  import IconMusic from "~icons/tabler/music";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />

<SidebarPage label="Getting Started" icon={IconPennant} page="/guide/getting-started" />

<SidebarPage label="Adding Jukebox Songs" icon={IconMusic} page="/guide/jukebox-songs" />