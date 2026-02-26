<script lang="ts">
	let { data } = $props();
	let { categoryPreviews } = data;
</script>

<div class="mx-auto max-w-6xl px-4 py-6">
	<h1 class="mb-8 text-3xl font-extrabold tracking-tight">Latest from Pilot's Log</h1>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each categoryPreviews as cat}
			<div class="flex flex-col rounded-lg bg-base-200 overflow-hidden">
				<div class="px-4 pt-4 pb-2">
					<a class="link text-xl font-bold" href={`/pages/${cat.slug}`}>{cat.name}</a>
					{#if cat.description}
						<p class="mt-1 text-sm text-base-content/60">{cat.description}</p>
					{/if}
				</div>
				<div class="m-3 mt-1 flex flex-col gap-y-2 rounded-md bg-base-300 p-4 grow">
					{#if cat.latest && cat.latestId}
						<a href={`/page/${cat.latestId}`} class="link text-base font-semibold leading-snug">
							{cat.latest.metadata.title}
						</a>
						{#if cat.latest.metadata.author}
							<span class="text-xs italic text-base-content/70">by {cat.latest.metadata.author}</span>
						{/if}
						{#if cat.latest.metadata.description}
							<p class="text-sm text-base-content/80">{cat.latest.metadata.description}</p>
						{/if}
						<span class="mt-auto pt-2 text-xs text-base-content/50">
							{new Date(cat.latest.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
						</span>
					{:else}
						<span class="italic text-base-content/50 text-sm">Nothing here yet</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
