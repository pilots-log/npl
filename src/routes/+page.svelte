<script lang="ts">
	import { resolve } from '$app/paths';
	import { content } from '$lib/content.js';
	import {
		getUpcoming,
		sortByDate,
		upcomingEvents,
		upcomingMeetingDates,
		varsityGames,
		type DatedEvent
	} from '$lib/data/events';
	let { data } = $props();
	let { categoryPreviews } = data;

	const now = new Date();

	type HomeEvent = DatedEvent & { label: string };

	const upcomingHomeEvents: HomeEvent[] = [
		...getUpcoming(upcomingMeetingDates, now).map((event) => ({ ...event, label: 'Meeting' })),
		...getUpcoming(upcomingEvents, now).map((event) => ({ ...event, label: 'Event' })),
		...getUpcoming(varsityGames, now).map((event) => ({ ...event, label: 'Game' }))
	]
		.sort(sortByDate)
		.slice(0, 4);

	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
	const timeFormatter = new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: '2-digit'
	});

	const formatDateTime = (value: string) => {
		const date = new Date(value);
		return `${dateFormatter.format(date)} at ${timeFormatter.format(date)}`;
	};
</script>

<div class="mx-auto max-w-5xl px-4 py-10">
	<!-- Masthead -->
	<div class="mb-10 border-b border-base-content/15 pb-8 text-center">
		<h1 class="text-5xl font-black tracking-widest text-[#0000ff] uppercase sm:text-6xl">
			Pilot's Log
		</h1>
		<p class="mt-2 text-sm tracking-widest text-base-content/50 uppercase">
			Norview High School's Official School Newspaper
		</p>
		<p class="mt-1 text-xs text-base-content/30">
			{new Date().toLocaleDateString('en-US', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</p>
	</div>

	<article
		class="group mb-4 flex flex-col overflow-hidden rounded-lg border border-base-content/10 bg-base-200 transition-all hover:border-base-content/25"
	>
		<div class="border-b border-base-content/10 px-4 py-3">
			<a
				href={resolve('/events')}
				class="text-xs font-extrabold tracking-widest text-[#4488ff] uppercase transition-colors hover:text-blue-300"
			>
				Upcoming Events
			</a>
		</div>

		<div class="flex grow flex-col gap-3 p-4">
			{#each upcomingHomeEvents as event (event.title + event.startsAt)}
				<div class="rounded-md border border-base-content/10 bg-base-100 p-3">
					<p class="text-xs text-base-content/40">{formatDateTime(event.startsAt)}</p>
					<div class="mt-1 flex flex-wrap items-center gap-2">
						<span class="text-[10px] font-semibold tracking-widest text-[#4488ff] uppercase">
							{event.label}
						</span>
						<p class="text-sm font-bold">{event.title}</p>
					</div>
					{#if event.location}
						<p class="text-xs text-base-content/60">{event.location}</p>
					{/if}
				</div>
			{:else}
				<p class="text-sm text-base-content/30 italic">No upcoming events posted.</p>
			{/each}
		</div>

		<div class="border-t border-base-content/10 px-4 py-2.5">
			<a
				href={resolve('/events')}
				class="text-xs font-semibold text-base-content/40 transition-colors hover:text-base-content/80"
			>
				All events →
			</a>
		</div>
	</article>

	<article
		class="group mb-4 flex flex-col overflow-hidden rounded-lg border border-base-content/10 bg-base-200 transition-all hover:border-base-content/25"
	>
		<div class="border-b border-base-content/10 px-4 py-3">
			<a
				href={resolve('/pages')}
				class="text-xs font-extrabold tracking-widest text-[#4488ff] uppercase transition-colors hover:text-blue-300"
			>
				Latest Articles
			</a>
		</div>

		<div class="flex grow flex-col gap-2 p-4">
			{#each content
				.entries()
				.toArray()
				.sort((a, b) => b[1].metadata.date.getTime() - a[1].metadata.date.getTime())
				.slice(0, 4) as [slug, page], i (slug)}
				<a
					href={resolve('/(prose)/page/[...slug=page_slug]', { slug })}
					class="leading-snug font-bold transition-colors hover:text-[#4488ff]"
				>
					{page.metadata.title}
				</a>
				{#if page.metadata.description}
					<p class="line-clamp-3 text-sm text-base-content/60">
						{page.metadata.description}
					</p>
				{/if}
				<div class="mt-auto flex items-end justify-between pt-3">
					{#if page.metadata.author}
						<span class="text-xs text-base-content/40 italic">{page.metadata.author}</span>
					{/if}
					<span class="ml-auto text-xs text-base-content/30">
						{new Date(page.metadata.date).toLocaleDateString('en-US', {
							month: 'short',
							day: 'numeric',
							year: 'numeric'
						})}
					</span>
				</div>
				{#if i + 1 !== Math.min(content.size, 4)}
					<hr class="text-base-content/10" />
				{/if}
			{:else}
				<p class="text-sm text-base-content/30 italic">Nothing here yet</p>
			{/each}
		</div>

		<div class="border-t border-base-content/10 px-4 py-2.5">
			<a
				href={resolve('/pages')}
				class="text-xs font-semibold text-base-content/40 transition-colors hover:text-base-content/80"
			>
				All articles →
			</a>
		</div>
	</article>

	<!-- Category Cards -->
	<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
		{#each categoryPreviews as cat (cat.slug)}
			<article
				class="group flex flex-col overflow-hidden rounded-lg border border-base-content/10 bg-base-200 transition-all hover:border-base-content/25"
			>
				<!-- Category Header -->
				<div class="border-b border-base-content/10 px-4 py-3">
					<a
						href={resolve('/pages/[category=category_slug]', { category: cat.slug })}
						class="text-xs font-extrabold tracking-widest text-[#4488ff] uppercase transition-colors hover:text-blue-300"
					>
						{cat.name}
					</a>
					{#if cat.description}
						<p class="mt-0.5 line-clamp-1 text-xs text-base-content/40">{cat.description}</p>
					{/if}
				</div>

				<!-- Latest Article -->
				<div class="flex grow flex-col gap-2 p-4">
					{#if cat.latest && cat.latestId}
						<a
							href={resolve('/(prose)/page/[...slug=page_slug]', { slug: cat.latestId })}
							class="leading-snug font-bold transition-colors hover:text-[#4488ff]"
						>
							{cat.latest.metadata.title}
						</a>
						{#if cat.latest.metadata.description}
							<p class="line-clamp-3 text-sm text-base-content/60">
								{cat.latest.metadata.description}
							</p>
						{/if}
						<div class="mt-auto flex items-end justify-between pt-3">
							{#if cat.latest.metadata.author}
								<span class="text-xs text-base-content/40 italic">{cat.latest.metadata.author}</span
								>
							{/if}
							<span class="ml-auto text-xs text-base-content/30">
								{new Date(cat.latest.metadata.date).toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric'
								})}
							</span>
						</div>
					{:else}
						<p class="text-sm text-base-content/30 italic">Nothing here yet</p>
					{/if}
				</div>

				<div class="border-t border-base-content/10 px-4 py-2.5">
					<a
						href={resolve('/pages/[category=category_slug]', { category: cat.slug })}
						class="text-xs font-semibold text-base-content/40 transition-colors hover:text-base-content/80"
					>
						All articles →
					</a>
				</div>
			</article>
		{/each}
	</div>
</div>
