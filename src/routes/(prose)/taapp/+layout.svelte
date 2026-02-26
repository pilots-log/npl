<script>
	let { children } = $props();
</script>

<div class="mx-auto max-w-3xl px-4 py-10">
	<div class="prose prose-invert max-w-none">
		{@render children()}
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	:global {
		h1 {
			@apply max-md:text-center;
		}
	}
</style>
