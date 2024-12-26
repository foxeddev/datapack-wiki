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
  import IconDatapack from "~icons/tabler/package";
  import IconResourcepack from "~icons/tabler/brush";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />

<SidebarHeading label="Thread Types"/>
<SidebarPage label="Datapack Help" icon={IconDatapack} page="/threads/datapack-help" />
<SidebarPage label="Resourcepack Help" icon={IconResourcepack} page="/threads/resourcepack-help" />