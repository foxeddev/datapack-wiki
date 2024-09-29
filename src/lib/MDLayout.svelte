<script lang="ts">
  import Seo from "sk-seo";

  export let title;
  export let description;
  export let tags = "";

  let tags_arr = tags.split(",").map(el => el.trim()).filter(String)
</script>

<Seo
  title="{title} | Datapack Wiki"
  description={description}
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
  {#if tags}
  <div class="bg-stone-950/40 p-2 rounded-lg flex items-center space-x-3 my-10">
    <span class="uppercase text-sm text-zinc-500">Tags:</span>
    {#each tags_arr ?? [] as tag}
      <span class="border border-yellow-500 px-1 text-yellow-500 rounded-lg uppercase text-sm">{tag}</span>
    {/each}
  </div>
  {/if}
</main>
