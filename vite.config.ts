import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			$components: path.resolve('src/components'),
			$src: path.resolve('src'),
		}
	},
	plugins: [sveltekit()]
});
