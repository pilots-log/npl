import type { ParamMatcher } from '@sveltejs/kit';
import categories from '$lib/categories';

export const match = ((slug: string): boolean => {
	return categories.has(slug);
}) satisfies ParamMatcher;
