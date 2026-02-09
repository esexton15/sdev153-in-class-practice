// @ts-check
import { defineConfig } from 'astro/config';

import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			allowedHosts: true,
		},
		preview: {
			allowedHosts: true,
		},
	},
	integrations: [tunnel()],
});