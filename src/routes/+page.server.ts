import { content } from '$lib/content';

export function load() {
	const [last_pilot_report_id, last_pilot_report] = content
		.entries()
		.filter(([, page]) => page.category === 'pilot-report')
		.toArray()
		.sort((a, b) => b[1].metadata.date.getTime() - a[1].metadata.date.getTime())
		.find(() => true) ?? [null, null];

	const [last_advice_id, last_advice] = content
		.entries()
		.filter(([, page]) => page.category === 'advice')
		.toArray()
		.sort((a, b) => b[1].metadata.date.getTime() - a[1].metadata.date.getTime())
		.find(() => true) ?? [null, null];

	return {
		title: 'Home',
		showHome: true,
		isLimited: false,
		last_pilot_report_id,
		last_pilot_report: JSON.parse(JSON.stringify(last_pilot_report)),
		last_advice_id,
		last_advice: JSON.parse(JSON.stringify(last_advice))
	};
}
