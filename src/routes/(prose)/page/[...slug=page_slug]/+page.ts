import { content } from '$lib/content';

export async function load({ params: { slug } }) {
	const page = content.get(slug);

	return {
		page,
		title: page?.metadata.title,
		description: page?.metadata.description,
		showHome: false
	};
}
