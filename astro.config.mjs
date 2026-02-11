// @ts-check
import { defineConfig } from 'astro/config';

import tunnel from 'astro-tunnel';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    base: "/sdev-153-in-class-practice",
    vite: {
        server: {
            allowedHosts: [
                "vacuous-tameika-adsorptively.ngrok-free.dev",
            ],
        },
    },
    integrations: [tunnel(), sitemap()],
});