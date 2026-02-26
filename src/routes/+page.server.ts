import { content } from '$lib/content';
import categories from '$lib/categories';

export function load() {
	const categoryPreviews = Array.from(categories.entries()).map(([slug, category]) => {
		const entries = content
			.entries()
			.filter(([, page]) => page.category === slug)
			.toArray()
			.sort((a, b) => b[1].metadata.date.getTime() - a[1].metadata.date.getTime());

		const [latestId, latest] = entries[0] ?? [null, null];

		return {
			slug,
			name: category.name,
			description: category.description,
			latestId,
			latest: JSON.parse(JSON.stringify(latest))
		};
	});

	return {
		title: 'Home',
		showHome: true,
		isLimited: false,
		categoryPreviews
	};
}
