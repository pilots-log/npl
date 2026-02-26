import categories from '$lib/categories.js';
import { content } from '$lib/content';

const PAGE_SIZE = 15;

export function entries() {
	return Array.from(categories.keys()).map((category) => ({ category }));
}

function paginate<T>(arr: T[], page_size: number, page_number: number): T[] {
	return arr.slice((page_number - 1) * page_size, page_number * page_size);
}

export async function load({ url, params }) {
	const page = parseInt(url.searchParams.get('page')) || 1;
	const sorted_page_array = content
		.entries()
		.filter((v) => v[1].category == params.category)
		.map(([id, page]) => ({ id, page }) as const)
		.toArray()
		.sort((a, b) => b.page.metadata.date - a.page.metadata.date);
	const pages = paginate(sorted_page_array, PAGE_SIZE, page);

	return {
		pages: JSON.parse(JSON.stringify(pages)) as typeof pages,
		page_count: Math.ceil(sorted_page_array.length / PAGE_SIZE) || 0,
		category: categories.get(params.category)?.name,
		desc: categories.get(params.category)?.description
	};
}
