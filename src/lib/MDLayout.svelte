<script lang="ts">
  import Seo from "sk-seo";

  export let title;
  export let description;
</script>

<Seo
  title="{title} | Datapack Wiki"
  {description}
  author="Datapack Wiki"
  siteName="Datapack Wiki"
  keywords="datapacks, datapack wiki, datapack docs, minecraft datapacks, datapack help, datapack creation, dph"
  socials={[
    "https://discord.datapackhub.net",
    "https://planetminecraft.com/group/datapack_hub/",
    "https://github.com/Datapack-Hub",
    "https://x.com/DatapackHub",
    "https://instagram.com/datapackhub",
  ]} />

<main class="md px-6 md:px-10 lg:px-16 prose-headings:text-stone-200">
  <slot />
</main>
