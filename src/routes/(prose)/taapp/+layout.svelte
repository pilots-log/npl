<script>
	let { children } = $props();
</script>

{@render children()}

<style lang="postcss">

    @reference "tailwindcss";
	:global {
		h1 {
			@apply max-md:text-center;
		}
	}
</style>
