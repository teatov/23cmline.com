// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://23cmline.com',
  build: {
    assets: '_assets',
  },
  // redirects: {
  //   '/': '/en',
  // },
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: {
      mode: 'sprite',
    },
  },
  integrations: [sitemap()],
});
