<script lang="ts">
    type PageData = {
        path: string;
        title: string;
        tags: string;
        description: string;
    }

    type Props = {
        pages_data: PageData[];
    }

    let { pages_data }: Props = $props();
</script>

<div>
    {#each pages_data as data}
        <a
            href={data.path}
            class="bg-black/45 p-3 rounded-lg py-3 my-3 flex items-center gap-2 aspect-square sm:aspect-auto hover:scale-101 duration-100"
            style="text-decoration-line: none;">
            
            <div class="text-pretty">
                <span class="underline text-2xl">{data.title}</span><br>
                <span class="inline-block mt-3 text-xs text-stone-400">Tags: {data.tags}</span><br>
                <br>
                {data.description}
            </div>
        </a>
    {/each}
</div>
