import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://astro.abyss.dev',
  base: '/',
  output: 'static',
  integrations: [
    tailwind(),
  ],
});
