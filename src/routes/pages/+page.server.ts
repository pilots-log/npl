import { content } from '$lib/content';

const PAGE_SIZE = 15;

function paginate<T>(arr: T[], page_size: number, page_number: number): T[] {
	return arr.slice((page_number - 1) * page_size, page_number * page_size);
}

export async function load({ url }) {
	let pageNum = 1;
	try {
		pageNum = parseInt(url.searchParams.get('page') ?? '') || 1;
	} catch {
		// prerendering context – default to page 1
	}
	const sorted_page_array = content
		.entries()
		.map(([id, post]) => ({ id, post }) as const)
		.toArray()
		.sort((a, b) => b.post.metadata.date - a.post.metadata.date);
	const pages = paginate(sorted_page_array, PAGE_SIZE, page);

	return {
		pages: JSON.parse(JSON.stringify(pages)) as typeof pages,
		page_count: Math.ceil(sorted_page_array.length / PAGE_SIZE)
	};
}
