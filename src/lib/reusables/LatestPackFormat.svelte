<script lang="ts">
  import { onMount } from "svelte";

  type PackFormatEntry = {
    data_pack_version: number;
    stable: boolean;
  };

  let latestPackFormat = $state(57);
  const url = "https://raw.githubusercontent.com/misode/mcmeta/summary/versions/data.min.json";

  onMount(async () => {
    const data: PackFormatEntry[] = await fetch(url).then(r => r.json());
    latestPackFormat = data.filter(v => v.stable)[0].data_pack_version;
  });
</script>

{latestPackFormat}
