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
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />
<SidebarPage label="Getting Started" icon={IconPennant} page="/guide/getting-started" />
<SidebarPage label="Debugging your Datapacks" icon={IconBug} page="/guide/debugging-datapacks" />

<SidebarCategory name="Adding new features" icon={IconNew}>
  <SidebarPage label="Adding Jukebox Songs" icon={IconMusic} page="/guide/jukebox-songs" />
</SidebarCategory>