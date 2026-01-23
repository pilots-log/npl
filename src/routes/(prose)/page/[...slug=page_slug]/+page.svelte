<script lang="ts">
	import categories from '$lib/categories';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { page } = data;
	let category_name = categories.get(page?.category).name;

	console.log(page?.metadata);
</script>

{#if page}
	<div>
		<h1 class="mb-2!">{page.metadata.title}</h1>
		{#if page.metadata.author}
			<span class="opacity-90">
				By: {page.metadata.author}
			</span>
		{/if}
		<a class="badge badge-primary" href="/pages/{page.category}">{category_name}</a>
	</div>
	<main>
		<page.component />
	</main>
{/if}
