<script lang="ts">
	import {
		attendanceRecoveryReminder,
		getUpcoming,
		upcomingEvents,
		upcomingMeetingDates,
		varsityGames
	} from '$lib/data/events';

	const now = new Date();
	const meetingDates = getUpcoming(upcomingMeetingDates, now);
	const generalEvents = getUpcoming(upcomingEvents, now);
	const upcomingGames = getUpcoming(varsityGames, now);

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

<div class="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-10">
	<header class="border-b border-base-content/15 pb-5">
		<h1 class="text-3xl font-extrabold uppercase tracking-tight">Upcoming Events</h1>
		<p class="mt-1 text-sm text-base-content/50">
			This page updates automatically as events pass.
		</p>
	</header>

	<section class="rounded-lg border border-base-content/10 bg-base-200">
		<div class="border-b border-base-content/10 px-4 py-3">
			<h2 class="text-sm font-extrabold uppercase tracking-widest text-[#4488ff]">
				Upcoming Meeting Date
			</h2>
		</div>
		<div class="flex flex-col gap-3 p-4">
			{#each meetingDates as event (event.title + event.startsAt)}
				<article class="rounded-md border border-base-content/10 bg-base-100 p-4">
					<p class="text-xs text-base-content/40">{formatDateTime(event.startsAt)}</p>
					<h3 class="text-lg font-bold">{event.title}</h3>
					{#if event.location}
						<p class="text-sm text-base-content/60">{event.location}</p>
					{/if}
					{#if event.details}
						<p class="text-sm text-base-content/60">{event.details}</p>
					{/if}
				</article>
			{:else}
				<p class="text-sm italic text-base-content/40">No upcoming meeting dates posted.</p>
			{/each}
		</div>
	</section>

	<section class="rounded-lg border border-base-content/10 bg-base-200">
		<div class="border-b border-base-content/10 px-4 py-3">
			<h2 class="text-sm font-extrabold uppercase tracking-widest text-[#4488ff]">Events</h2>
		</div>
		<div class="flex flex-col gap-3 p-4">
			{#each generalEvents as event (event.title + event.startsAt)}
				<article class="rounded-md border border-base-content/10 bg-base-100 p-4">
					<p class="text-xs text-base-content/40">{formatDateTime(event.startsAt)}</p>
					<h3 class="text-lg font-bold">{event.title}</h3>
					{#if event.location}
						<p class="text-sm text-base-content/60">{event.location}</p>
					{/if}
					{#if event.details}
						<p class="text-sm text-base-content/60">{event.details}</p>
					{/if}
				</article>
			{:else}
				<p class="text-sm italic text-base-content/40">No upcoming events posted.</p>
			{/each}
		</div>
	</section>

	<section class="rounded-lg border border-base-content/10 bg-base-200">
		<div class="border-b border-base-content/10 px-4 py-3">
			<h2 class="text-sm font-extrabold uppercase tracking-widest text-[#4488ff]">
				{attendanceRecoveryReminder.title}
			</h2>
		</div>
		<div class="flex flex-col gap-2 p-4">
			{#each attendanceRecoveryReminder.lines as line, index (index)}
				<p class="text-sm text-base-content/70">{line}</p>
			{/each}
		</div>
	</section>

	<section class="rounded-lg border border-base-content/10 bg-base-200">
		<div class="border-b border-base-content/10 px-4 py-3">
			<h2 class="text-sm font-extrabold uppercase tracking-widest text-[#4488ff]">
				Upcoming Varsity Games
			</h2>
		</div>
		<div class="flex flex-col gap-3 p-4">
			{#each upcomingGames as event (event.title + event.startsAt)}
				<article class="rounded-md border border-base-content/10 bg-base-100 p-4">
					<p class="text-xs text-base-content/40">{formatDateTime(event.startsAt)}</p>
					<h3 class="text-lg font-bold">{event.title}</h3>
					{#if event.location}
						<p class="text-sm text-base-content/60">{event.location}</p>
					{/if}
					{#if event.details}
						<p class="text-sm text-base-content/60">{event.details}</p>
					{/if}
				</article>
			{:else}
				<p class="text-sm italic text-base-content/40">No upcoming games posted.</p>
			{/each}
		</div>
	</section>
</div>
