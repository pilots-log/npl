<script lang="ts">
	const { data } = $props();
	let { page_count, pages } = data;
</script>

<div class="mx-auto max-w-3xl px-4 py-10">
	<div class="mb-8 border-b border-base-content/15 pb-6">
		<h1 class="text-3xl font-extrabold uppercase tracking-tight">All Articles</h1>
		<p class="mt-1 text-sm text-base-content/40">{pages.length} article{pages.length !== 1 ? 's' : ''}</p>
	</div>

	<div class="flex flex-col gap-4">
		{#each pages as item}
			<article class="group rounded-lg border border-base-content/10 bg-base-200 p-5 transition-all hover:border-base-content/25">
				<div class="mb-2 flex flex-wrap items-center gap-2 text-xs text-base-content/40">
					<span>
						{new Date(item.post.metadata.date).toLocaleDateString('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric'
						})}
					</span>
					{#if item.post.metadata.author}
						<span>·</span>
						<span class="italic">{item.post.metadata.author}</span>
					{/if}
				</div>
				<a
					href="/page/{item.id}"
					class="text-lg font-bold leading-snug transition-colors hover:text-[#4488ff]"
				>
					{item.post.metadata.title}
				</a>
				{#if item.post.metadata.description}
					<p class="mt-1.5 text-sm text-base-content/60">{item.post.metadata.description}</p>
				{/if}
			</article>
		{/each}

		{#if pages.length === 0}
			<p class="text-center italic text-base-content/40">No articles yet.</p>
		{/if}
	</div>

	{#if page_count > 1}
		<div class="mt-8 flex items-center justify-center gap-3">
			<a href="?page=1" class="btn btn-sm btn-ghost">← First</a>
			<span class="text-sm text-base-content/50">Page 1 of {page_count}</span>
			<a href="?page={page_count}" class="btn btn-sm btn-ghost">Last →</a>
		</div>
	{/if}
</div>
