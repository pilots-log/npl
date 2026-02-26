<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Pilot's Log{page.data.title ? ` | ${page.data.title}` : ''}</title>
	<meta name="theme-color" content="#0000ff" />

	{#if page.data.description}
		<meta name="description" content={page.data.description} />
		<meta property="og:description" content={page.data.description} />
		<meta name="twitter:description" content={page.data.description} />
	{/if}
</svelte:head>

<div
	class={[
		'flex h-screen flex-col overflow-hidden',
		page.data.isLimited ? 'pointer-events-none cursor-not-allowed select-none opacity-30' : ''
	]}
	title={page.data.isLimited ? 'The site is disabled.' : ''}
>
	<header class="flex shrink-0 items-center gap-3 bg-[#0000ff] px-4 py-2.5">
		<a href="/" class="btn gap-2.5 text-white">
			<img src={favicon} alt="" class="h-6 w-6" />
			<span class="font-extrabold uppercase tracking-widest">Pilot's Log</span>
		</a>
		<nav class="ml-auto flex items-center gap-1">
			{#if !page.data.showHome}
				<a href="/" class="btn btn-ghost btn-sm uppercase text-white/90 hover:bg-white/10 hover:text-white"
					>Home</a
				>
			{/if}
			<a
				href="/events"
				class="btn btn-ghost btn-sm uppercase text-white/90 hover:bg-white/10 hover:text-white"
				>Events</a
			>
			<a
				href="/pages/pilot-report"
				class="btn btn-ghost btn-sm uppercase text-white/90 hover:bg-white/10 hover:text-white"
				>Pilot Report</a
			>
		</nav>
	</header>

	<main class="grow overflow-x-clip overflow-y-scroll pb-24">
		{@render children?.()}
	</main>
</div>
