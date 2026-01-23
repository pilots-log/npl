<script>
	import '$lib/content';
	let { data } = $props();
	let { last_pilot_report, last_pilot_report_id, last_advice, last_advice_id } = data;
</script>

<div class="grid grid-cols-3 *:px-4">
	<div class="grow">
		<div class="rounded-md bg-base-200 p-2">
			<a class="link text-2xl font-bold" href="/pages/advice">Advice</a>
			<div class="mt-2 flex flex-col gap-y-2 rounded-md bg-base-300 p-4">
				{#if last_advice && last_advice_id}
					<a href={`/page/${last_advice_id}`} class="link text-lg font-semibold">
						{last_advice.metadata.title}
					</a>
					{#if last_advice.metadata.author}
						<span class="text-sm italic">by {last_advice.metadata.author}</span>
					{/if}
					<p>{last_advice.metadata.description}</p>
				{:else}
					<span class="italic">Nothing here yet</span>
				{/if}
			</div>
		</div>
	</div>
	<div class="grow">
		<div class="rounded-md bg-base-200 p-2">
			<a class="link text-2xl font-bold" href="/pages/pilot-report">Pilot Report</a>
			<div class="mt-2 flex flex-col gap-y-2 rounded-md bg-base-300 p-4">
				{#if last_pilot_report && last_pilot_report_id}
					<a href={`/page/${last_pilot_report_id}`} class="link text-lg font-semibold">
						{last_pilot_report.metadata.title}
					</a>
					{#if last_pilot_report.metadata.author}
						<span class="text-sm italic">by {last_pilot_report.metadata.author}</span>
					{/if}
					<p>{last_pilot_report.metadata.description}</p>
				{:else}
					<span class="italic">Nothing here yet</span>
				{/if}
			</div>
		</div>
	</div>
	<div class="grow"></div>
</div>
