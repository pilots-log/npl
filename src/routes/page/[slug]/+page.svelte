<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { page } = data;
</script>

{#if page}
	<h1>{page.name}</h1>
	<div class="prose prose-amber">
		<page.component />
	</div>
{/if}
