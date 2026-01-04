import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://niklas.software',
  integrations: [
    react(),
    tailwind(),
    keystatic()
  ],
  adapter: cloudflare(),
});