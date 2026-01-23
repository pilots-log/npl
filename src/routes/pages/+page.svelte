<script lang="ts">
	const { data } = $props();

	let { page_count, pages } = data;
	console.log(pages, page_count);
</script>

<div class="px-15">
	<h1 class="text-2xl font-bold">All Pages</h1>

	{#each pages as page}
		<div class="mt-2 flex flex-col gap-y-2 rounded-md bg-base-300 p-4">
			<a href={`/page/${page.id}`} class="link text-lg font-semibold">
				{page.post.metadata.title}
			</a>
			{#if page.post.metadata.author}
				<span class="text-sm italic">by {page.post.metadata.author}</span>
			{/if}
			<p>{page.post.metadata.description}</p>
		</div>
	{/each}
</div>
