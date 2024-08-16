<script lang="ts">
  import Seo from "sk-seo";

  type Props = {
    title: string;
    description: string;
  };

  const { title, description }: Props = $props();
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

<slot />
