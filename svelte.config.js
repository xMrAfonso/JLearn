import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true,
	}),

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$data: 'src/data',
		}
	}
};

export default config;
