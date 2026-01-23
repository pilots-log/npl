import type { ParamMatcher } from '@sveltejs/kit';
import { content } from '$lib/content';

export const match = ((slug: string): boolean => {
	return content.has(slug);
}) satisfies ParamMatcher;
