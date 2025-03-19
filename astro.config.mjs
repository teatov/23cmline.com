// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://23cmline.com",
  vite: {
    plugins: [tailwindcss()],
  },
	experimental: {
		svg: {
			mode: "sprite",
		},
	},
});
