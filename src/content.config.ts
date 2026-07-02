import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada projeto é um ficheiro .md em src/content/projetos/.
// O nome do ficheiro define o URL: aura.md -> /projetos/aura
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    stack: z.array(z.string()),
    ordem: z.number(),
    destaque: z.boolean().default(false),
    estado: z.string().optional(),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
});

export const collections = { projetos };
