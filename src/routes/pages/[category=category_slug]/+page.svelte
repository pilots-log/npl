<script lang="ts">
	const { data } = $props();

  let page_count = $derived(data.page_count)
  let pages = $derived(data.pages);
	$inspect(pages, page_count);
</script>

<div class="px-15">
	<h1 class="text-2xl font-bold">Pages in {data.category} category</h1>
	<p>{data.desc}</p>

	{#each pages as page}
		<div class="mt-2 flex flex-col gap-y-2 rounded-md bg-base-300 p-4">
			<a href={`/page/${page.id}`} class="link text-lg font-semibold">
				{page.page.metadata.title}
			</a>
			{#if page.page.metadata.author}
				<span class="text-sm italic">by {page.page.metadata.author}</span>
			{/if}
			<p>{page.page.metadata.description}</p>
		</div>
	{/each}
</div>
