// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

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
});
