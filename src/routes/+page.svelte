<script lang="ts">
	let { data } = $props();
	let { categoryPreviews } = data;
</script>

<div class="mx-auto max-w-5xl px-4 py-10">
	<!-- Masthead -->
	<div class="mb-10 border-b border-base-content/15 pb-8 text-center">
		<h1 class="text-5xl font-black uppercase tracking-widest sm:text-6xl">Pilot's Log</h1>
		<p class="mt-2 text-sm uppercase tracking-widest text-base-content/50">
			Norview High School's Official School Newspaper
		</p>
		<p class="mt-1 text-xs text-base-content/30">
			{new Date().toLocaleDateString('en-US', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</p>
	</div>

	<!-- Category Cards -->
	<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each categoryPreviews as cat}
			<article
				class="group flex flex-col overflow-hidden rounded-lg border border-base-content/10 bg-base-200 transition-all hover:border-base-content/25"
			>
				<!-- Category Header -->
				<div class="border-b border-base-content/10 px-4 py-3">
					<a
						href="/pages/{cat.slug}"
						class="text-xs font-extrabold uppercase tracking-widest text-[#4488ff] transition-colors hover:text-blue-300"
					>
						{cat.name}
					</a>
					{#if cat.description}
						<p class="mt-0.5 line-clamp-1 text-xs text-base-content/40">{cat.description}</p>
					{/if}
				</div>

				<!-- Latest Article -->
				<div class="flex grow flex-col gap-2 p-4">
					{#if cat.latest && cat.latestId}
						<a
							href="/page/{cat.latestId}"
							class="font-bold leading-snug transition-colors hover:text-[#4488ff]"
						>
							{cat.latest.metadata.title}
						</a>
						{#if cat.latest.metadata.description}
							<p class="line-clamp-3 text-sm text-base-content/60">
								{cat.latest.metadata.description}
							</p>
						{/if}
						<div class="mt-auto flex items-end justify-between pt-3">
							{#if cat.latest.metadata.author}
								<span class="text-xs italic text-base-content/40"
									>{cat.latest.metadata.author}</span
								>
							{/if}
							<span class="ml-auto text-xs text-base-content/30">
								{new Date(cat.latest.metadata.date).toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric'
								})}
							</span>
						</div>
					{:else}
						<p class="text-sm italic text-base-content/30">Nothing here yet</p>
					{/if}
				</div>

				<div class="border-t border-base-content/10 px-4 py-2.5">
					<a
						href="/pages/{cat.slug}"
						class="text-xs font-semibold text-base-content/40 transition-colors hover:text-base-content/80"
					>
						All articles →
					</a>
				</div>
			</article>
		{/each}
	</div>
</div>
