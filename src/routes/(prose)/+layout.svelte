<script>
	let { children } = $props();
</script>

<div class="mx-2 flex justify-center md:mx-20">
	<div class="prose">
		{@render children()}
	</div>
</div>
