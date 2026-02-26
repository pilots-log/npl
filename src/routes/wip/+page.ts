import { redirect } from "@sveltejs/kit";

export function load() {
	redirect(308, '/')
	return {
		title: 'WIP',
		showHome: true,
		isLimited: true
	};
}
