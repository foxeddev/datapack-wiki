<script lang="ts">
  import { page } from "$app/stores";

  let messages = new Map([
    [404, "This page isn't real..."],
    [500, "Someone broke our redstone!"],
  ]);
</script>

<div class="flex items-center justify-center flex-col h-1/2 md:h-auto">
  <h1 class="text-9xl font-medium">{$page.status}</h1>
  <p class="text-4xl text-orange-600">{$page.error?.message}</p>
  <p class="mt-6 px-4 text-xl">
    {messages.get($page.status)}<br />
    If this is a serious error, contact us on
    <a href="https://discord.datapackhub.net" class="font-medium underline">Discord</a>.<br />
    If you'd like to help us by creating this page, see our
    <a href="https://github.com/Datapack-Hub/wiki" class="font-medium underline">GitHub</a>
  </p>
</div>
