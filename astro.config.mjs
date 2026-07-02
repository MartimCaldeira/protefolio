// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Depois do primeiro deploy, substitui pelo teu domínio real
// (ex.: https://martimcaldeira.vercel.app ou domínio próprio).
export default defineConfig({
  site: 'https://martimcaldeira.vercel.app',
  integrations: [sitemap()],
});
