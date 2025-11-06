const content_glob = import.meta.glob('./**/*.svx', { eager: false, base: "./content/" });

export const content = new Map((
	await Promise.all(Object.entries(content_glob).map(async ([x, y]) => [x.substring(2).slice(0, -4), await y()] as const))
).map(([name, m]) => [name, { name, metadata: m.metadata, component: m.default }]));
