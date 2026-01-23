import { z } from 'zod';
import categories from '$lib/categories';
export const category = z.enum(Object.keys(categories));

export const Metadata = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	published: z.boolean(),
	author: z.string().optional()
});

const content_glob = import.meta.glob('./**/*.svx', {
	eager: false,
	base: './content/'
});

export const content = new Map(
	(
		await Promise.all(
			Object.entries(content_glob).map(
				async ([x, y]) => [x.substring(2).slice(0, -4), await y()] as const
			)
		)
	).map(([name, m]) => [
		name,
		{
			name,
			category: name.split('/')[0],
			metadata: Metadata.parse(m.metadata),
			component: m.default
		}
	])
);
