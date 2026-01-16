<script>
	let { children } = $props();
</script>

<div class="md:mx-20 mx-2 flex items-center">
	<div class="prose max-w-full">
		{@render children()}
	</div>
</div>
