import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter(), experimental: { remoteFunctions: true } },
	compilerOptions: {
		experimental: {
			async: true
		}
	},
	preprocess: [mdsvex({
		extensions: ['.svx', '.md']
	})],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
