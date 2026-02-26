<script lang="ts">
	import categories from '$lib/categories';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { page } = data;
	let category = $derived(page ? categories.get(page.category) : null);
</script>

{#if page}
	<div class="mx-auto max-w-3xl px-4 py-10">
		<!-- Breadcrumb -->
		<nav class="mb-6 flex items-center gap-2 text-xs text-base-content/40">
			<a href="/" class="transition-colors hover:text-base-content/70">Home</a>
			<span>›</span>
			{#if category}
				<a href="/pages/{page.category}" class="transition-colors hover:text-base-content/70"
					>{category.name}</a
				>
				<span>›</span>
			{/if}
			<span class="truncate text-base-content/60">{page.metadata.title}</span>
		</nav>

		<!-- Article Header -->
		<header class="mb-8 border-b border-base-content/15 pb-8">
			{#if category}
				<a
					href="/pages/{page.category}"
					class="mb-3 inline-block text-xs font-extrabold uppercase tracking-widest text-[#4488ff] transition-colors hover:text-blue-300"
				>
					{category.name}
				</a>
			{/if}
			<h1 class="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
				{page.metadata.title}
			</h1>
			{#if page.metadata.description}
				<p class="mt-3 text-base text-base-content/60">{page.metadata.description}</p>
			{/if}
			<div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-base-content/40">
				{#if page.metadata.author}
					<span>By <span class="italic">{page.metadata.author}</span></span>
				{/if}
				<span>
					{new Date(page.metadata.date).toLocaleDateString('en-US', {
						weekday: 'long',
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</span>
			</div>
		</header>

		<!-- Article Content -->
		<main class="prose prose-invert max-w-none">
			<page.component />
		</main>
	</div>
{/if}
