<script lang="ts">
</script>

<main class="flex h-full flex-col items-center justify-center">
	<h1 class="text-4xl font-extrabold text-warning uppercase">Work In Progress</h1>
	<p class="mx-2 text-center text-xl md:text-2xl">
		This is the future home of the Pilot's Log, Norview High School's <em>official</em> School Newspaper
	</p>

	{#snippet mailto(email: string)}
		{@render link(email, `mailto:${email}`)}
	{/snippet}
	{#snippet link(name: string, link: string)}
		<a class="link text-blue-500" href={link}>{name}</a>
	{/snippet}
	<h1 class="mt-4">contact:</h1>
	<div class="flex flex-col *:even:opacity-80 md:grid md:grid-cols-2">
		<span>President:</span>
		{@render mailto('12m3g@npsk12.net')}
		<span>Ms. Dutch (sponsor):</span>
		{@render mailto('fdutch836@nps.k12.va.us')}
		<span>Ms. Herring (sponsor):</span>
		{@render mailto('lherring436@nps.k12.va.us')}
		<span>Norview High School</span>
		<!-- <span>6501 Chesapeake Blvd, Norfolk, VA 23513</span> -->
		{@render link('nhs.npsk12.com', 'https://nhs.npsk12.com/')}
	</div>
	<a href="/#" class="btn mt-2 cursor-not-allowed opacity-30">Admin Login</a>
	<div class="absolute bottom-5 opacity-60">
		Looking for TAAPP?: <a href="/taapp" class="link">here</a>
	</div>
</main>
