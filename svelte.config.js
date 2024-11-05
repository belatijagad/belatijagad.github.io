import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter({
			// Set the output directory for pages and assets
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',  // Required for GitHub Pages to handle client-side routing
			precompress: false
		}),
		paths: {
			// No base path needed since deploying to root (belatijagad.github.io)
			base: '',
		},
		appDir: 'app', // Keep the app directory separate
	},

	extensions: ['.svelte', '.svx']
};

export default config;