<script>
  import Seo from "sk-seo";

  export let title;
  export let description;
</script>

<Seo
  title="{title} | WIP - Datapack Hub"
  description={description}
  author="Datapack Hub"
  logo="dph.png"
  imageURL="android-chrome-192x192.png"
  siteName="Datapack Hub"
  keywords="datapack, datapack hub, minecraft datapacks, datapack help, datapack creation"
  socials={[
    "https://discord.datapackhub.net",
    "https://planetminecraft.com/group/datapack_hub/",
    "https://github.com/Datapack-Hub",
    "https://x.com/DatapackHub",
    "https://instagram.com/datapackhub",
  ]}
  canonical="https://datapackhub.net" />

<slot />
