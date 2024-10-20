<script lang="ts">
  type PackFormatEntry = {
    data_pack_version: number;
    stable: boolean;
  };

  let latestPackFormat = $state(26);
  const url = "https://raw.githubusercontent.com/misode/mcmeta/summary/versions/data.min.json";

  $effect(() => {
    fetch(url).then(r => r.json()).then((d: PackFormatEntry[]) => {
      latestPackFormat = d.filter(v => v.stable)[0].data_pack_version;
    });
  });
</script>

{latestPackFormat}
