<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();

	let { showHome, isLimited } = data as App.PageData;

	$inspect(isLimited, !!isLimited);
	$inspect(data, showHome);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Pilot's Log {page.data.title ? `| ${page.data.title}` : ''}</title>
	<meta name="theme-color" content="#0000ff" />

	{#if page.data.description}
		<meta name="description" content={page.data.description} />
		<meta name="og:description" content={page.data.description} />
		<meta name="twitter:description" content={page.data.description} />
	{/if}
</svelte:head>

<div class="flex h-screen flex-col overflow-hidden">
	<div
		class={[
			'flex items-center gap-x-2 bg-[#0000ff] px-4 font-extrabold text-white transition-all',
			{ 'h-12': page.data.showHome, 'h-10': !page.data.showHome },
			{
				'*:disabled cursor-not-allowed opacity-30 select-none *:pointer-events-none':
					!!page.data.isLimited
			}
		]}
		title={page.data.isLimited ? 'The site is disabled.' : ''}
	>
		<a
			href="/"
			class={[
				'btn btn-ghost transition-all',
				{ 'btn-md': page.data.showHome, 'btn-sm': !page.data.showHome }
			]}
		>
			<img
				src={favicon}
				class={['transition-all', { 'h-6': page.data.showHome, 'h-5': !page.data.showHome }]}
				alt=""
			/>
			<span
				class={[
					'uppercase transition-all',
					{ 'text-2xl': page.data.showHome, 'hidden text-xl': !page.data.showHome }
				]}>pilot's log</span
			>
		</a>
		<a href="/c/pilot-report" class="btn uppercase btn-xs">pilot report</a>
	</div>

	<main class="grow overflow-x-clip overflow-y-scroll pt-8 pb-24">
		{@render children?.()}
	</main>
</div>
