<script lang="ts">
	const { data } = $props();

	let page_count = $derived(data.page_count);
	let pages = $derived(data.pages);
</script>

<div class="mx-auto max-w-3xl px-4 py-10">
	<div class="mb-8 border-b border-base-content/15 pb-6">
		<p class="mb-1 text-xs font-extrabold uppercase tracking-widest text-[#4488ff]">Section</p>
		<h1 class="text-3xl font-extrabold uppercase tracking-tight">{data.category}</h1>
		{#if data.desc}
			<p class="mt-2 text-sm text-base-content/50">{data.desc}</p>
		{/if}
		<p class="mt-1 text-xs text-base-content/30">{pages.length} article{pages.length !== 1 ? 's' : ''}</p>
	</div>

	<div class="flex flex-col gap-4">
		{#each pages as item}
			<article class="group rounded-lg border border-base-content/10 bg-base-200 p-5 transition-all hover:border-base-content/25">
				<div class="mb-2 flex flex-wrap items-center gap-2 text-xs text-base-content/40">
					<span>
						{new Date(item.page.metadata.date).toLocaleDateString('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric'
						})}
					</span>
					{#if item.page.metadata.author}
						<span>·</span>
						<span class="italic">{item.page.metadata.author}</span>
					{/if}
				</div>
				<a
					href="/page/{item.id}"
					class="text-lg font-bold leading-snug transition-colors hover:text-[#4488ff]"
				>
					{item.page.metadata.title}
				</a>
				{#if item.page.metadata.description}
					<p class="mt-1.5 text-sm text-base-content/60">{item.page.metadata.description}</p>
				{/if}
			</article>
		{/each}

		{#if pages.length === 0}
			<p class="text-center italic text-base-content/40">No articles in this section yet.</p>
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
