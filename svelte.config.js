import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess'; // Named import for sveltePreprocess

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex(),
		sveltePreprocess({
			typescript: {
				tsconfigFile: './tsconfig.json'
			},
		}),
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Required for GitHub Pages to handle client-side routing
			precompress: false
		}),
		paths: {
			base: '', // No base path needed since deploying to root (belatijagad.github.io)
		},
		appDir: 'app', // Keep the app directory separate
	},

	extensions: ['.svelte', '.svx']
};

export default config;