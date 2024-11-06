<script lang="ts">
  import Seo from "sk-seo";
  import type { Snippet } from "svelte";

  type Props = {
    title: string;
    description: string;
    tags: string;
    children: Snippet;
  };

  const { children, title, description, tags = "" }: Props = $props();

  let tagsArr = tags
    .split(",")
    .map(el => el.trim())
    .filter(String);
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

<main class="md px-4 md:px-8 lg:px-16 prose-headings:text-stone-200">
  {@render children()}
  {#if tags}
    <div class="bg-stone-950/40 p-2 rounded-lg flex items-center space-x-3 my-10">
      <span class="uppercase text-sm text-zinc-500">Tags:</span>
      {#each tagsArr ?? [] as tag}
        <span class="border border-yellow-500 px-1 text-yellow-500 rounded-lg uppercase text-sm">{tag}</span>
      {/each}
    </div>
  {/if}
</main>
