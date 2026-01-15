<script>
	let { children } = $props();
</script>

<div class="mx-20 flex items-center">
	<div class="mx-7 prose max-w-full">
		{@render children()}
	</div>
</div>
