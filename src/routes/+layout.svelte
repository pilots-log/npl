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
	<title>Pilots' Log {page.data.title ? `| ${page.data.title}`:""}</title>
</svelte:head>

<div class="flex h-screen flex-col">
	<div
		class={[
			'flex items-center gap-x-2 bg-[#0000ff] px-4 font-extrabold text-white transition-all',
			{ 'h-12': page.data.showHome, 'h-10': !page.data.showHome },
			{ '*:disabled *:pointer-events-none cursor-not-allowed opacity-30 select-none': !!page.data.isLimited }
		]}
		title="{page.data.isLimited ? "The site is disabled." : ""}"
	>
		<a
			href="/"
			class={[
				'btn btn-ghost transition-all',
				{ 'btn-md': page.data.showHome, 'btn-sm': !page.data.showHome }
			]}
		>
			<img src={favicon} class={["transition-all", { "h-6": page.data.showHome, "h-5": !page.data.showHome }]} alt="" />
			<span
				class={[
					'uppercase transition-all',
					{ 'text-2xl': page.data.showHome, 'hidden text-xl': !page.data.showHome }
				]}>pilot's log</span
			>
		</a>
		<a href="/c/pilot-report" class="uppercase btn btn-xs">pilot report</a>
	</div>

	<main class="grow overflow-x-clip overflow-y-scroll">
		{@render children?.()}
	</main>
</div>
