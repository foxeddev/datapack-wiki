# Contributing Guide

Contributing to the Datapack Wiki is very easy. We use MDSveX to integrate markdown pages with the SvelteKit backend, so to add or edit pages you only need to know how to write Markdown, and very limited HTML knowledge.

To contribute, please fork this repo and then submit a pull request with your added changes.

> [!TIP]
> If you don't understand markdown or HTML, or if you require additional support, please [join our Discord](https://discord.datapackhub.net) and we'd be happy to help!

## Adding a page

1. Create your page .svx file. If I want to make a page at `/command/say`, I would create the file at `/src/routes/command/say/+page.svx`.

2. Add the page metadata by putting the following at the top of the .svx file:

   ```yml
   ---
   title: Page title
   ---
   ```

3. Import the reusable components that you want to use in your page. Put the following after the metadata:

   ```svelte
   <script lang="ts">
   import {Info, Warning, Tip} from '$lib/reuseables';
   </script>
   ```

4. Use the rest of the file to write the page content as markdown:

   ```md
   # /function command

   This command runs any `.mcfunction` file when called. You can also pass in a NBT compound or NBT source path.

   <Info>I am a very important piece of information. Please dont ignore me. I'm only smol.</Info>

   <Warning>The stuff in this box is probably very important.</Warning>

   <Tip>You can do this really cool thing. It'll make your life a lot better!</Tip>

   ## Syntax

   `function <function>` - Runs a function
   ```

> [!TIP]
> You can create info, warning, or tip boxes using the following syntax:
>
> ```md
> <Info>This is an info box!</Info>
> <Warning>This is a warning box!</Warning>
> <Tip>This is a tip box!</Tip>
> ```

## Adding a page to the sidebar

> [!NOTE]
> If you don't know where to put a page on the sidebar, then mention that in your PR, and someone else will add it for you.
> The sidebar pages are stored in `/src/lib/SidebarPages.svelte`.

### Sidebar Categories

You can add categories using the `<SidebarCategory>` tag:

```svelte
<SidebarCategory name="Basics" icon={IconBox}>
    <SidebarPage label="Commands" icon={IconCommand} page="/commands" />
    <SidebarPage label="Functions" icon={IconPennant} page="/functions" />
    <SidebarPage label="Advancements" icon={IconStar} page="/advancements" />
    <SidebarPage label="Recipes" icon={IconGrid} page="/recipes" />
</SidebarCategory>
```

### Sidebar Pages

Sidebar categories contain pages, but the pages don't have to be within a category.

```svelte
<SidebarPage label="Page Name" icon={IconName} page="/path/to/page" />
```

### Icons

Pages and categories can have icons. We use [tabler icons](https://tabler-icons.io) to source our icons. To add an icon, import it in the `<script>` tag at the top:

```ts
import IconHome from "~icons/tabler/home";
```

You can then use these icons within a SidebarCategory or SidebarPage, like so

```svelte
<SidebarPage label="Commands" icon={IconCommand} page="/commands" />
```
