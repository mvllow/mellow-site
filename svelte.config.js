import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter(),
		browser: {
			hydrate: false,
			router: false,
		},
		prerender: {
			default: true,
		},
	},
};

export default config;
