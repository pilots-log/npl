import { content } from '$lib/content';

export function entries() {
	return Array.from(content.keys()).map((slug) => ({ slug }));
}

export async function load({ params: { slug } }) {
	const page = content.get(slug);

	return {
		page,
		title: page?.metadata.title,
		description: page?.metadata.description,
		showHome: false
	};
}
