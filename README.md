# Portfólio — Martim Caldeira

Site de portfólio pessoal, estático, construído com [Astro](https://astro.build). Custo de alojamento: **zero**.

## Comandos

| Comando           | O que faz                                        |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Instala as dependências (só na primeira vez)     |
| `npm run dev`     | Servidor local em `http://localhost:4321`        |
| `npm run build`   | Gera o site estático em `dist/`                  |
| `npm run preview` | Pré-visualiza o build de produção                |

## Como adicionar um projeto novo

**Não precisas de tocar em código.** Cria um ficheiro `.md` em `src/content/projetos/` — o nome do ficheiro define o URL (`meu-projeto.md` → `/projetos/meu-projeto`):

```markdown
---
titulo: Nome do Projeto
resumo: Uma frase que aparece no cartão da grelha e na página de detalhe.
stack: [C#, .NET 8, ASP.NET Core MVC]
ordem: 5
---

Descrição longa em Markdown. Podes usar títulos (##), listas, **negrito**, links, etc.
```

Campos disponíveis no frontmatter:

| Campo      | Obrigatório | Descrição                                                        |
| ---------- | ----------- | ---------------------------------------------------------------- |
| `titulo`   | sim         | Nome do projeto                                                  |
| `resumo`   | sim         | Uma frase — aparece no cartão e serve de meta description        |
| `stack`    | sim         | Lista de tecnologias, ex.: `[C#, .NET 8]`                        |
| `ordem`    | sim         | Posição na grelha (1 aparece primeiro)                           |
| `destaque` | não         | `true` faz o cartão ocupar a largura toda com etiqueta dourada   |
| `estado`   | não         | Texto livre, ex.: `Em desenvolvimento · PAP`                     |
| `link`     | não         | URL do projeto online — mostra o botão «Ver online»              |
| `repo`     | não         | URL do repositório — mostra o botão «Código no GitHub»           |

Para **editar** ou **remover** um projeto, edita ou apaga o respetivo `.md`. O schema em [src/content.config.ts](src/content.config.ts) valida os campos — se te enganares num nome, o build avisa.

Imagens: coloca-as em `public/projetos/` e referencia no Markdown com `![legenda](/projetos/imagem.png)`.

## Deploy gratuito (Vercel)

1. Cria um repositório no GitHub e faz push do projeto:
   ```bash
   git init
   git add .
   git commit -m "Portfólio inicial"
   git remote add origin https://github.com/O-TEU-USER/portfolio.git
   git push -u origin main
   ```
2. Vai a [vercel.com](https://vercel.com), entra com a conta GitHub e escolhe **Add New → Project**.
3. Importa o repositório. A Vercel deteta o Astro automaticamente — não mudes nada, carrega em **Deploy**.
4. Fica online num URL tipo `https://portfolio-xxx.vercel.app`. A partir daí, **cada `git push` faz deploy automático**.

Depois do primeiro deploy, atualiza o URL real em dois sítios (para o sitemap e SEO ficarem certos):

- `site:` em [astro.config.mjs](astro.config.mjs)
- `Sitemap:` em [public/robots.txt](public/robots.txt)

## Onde está cada coisa

```
src/
├── content/projetos/   ← os projetos (só mexes aqui no dia a dia)
├── content.config.ts   ← schema/validação dos projetos
├── styles/global.css   ← design tokens (cores, fontes) e utilitários
├── layouts/Base.astro  ← <head>, meta tags, SEO
├── components/         ← Nav, Hero, Sobre, ProjetoCard, Contacto
└── pages/
    ├── index.astro     ← página principal
    └── projetos/[slug].astro  ← gera uma página por projeto
```

Para mudar as cores do tema, edita as variáveis no topo de [src/styles/global.css](src/styles/global.css) (`--ouro`, `--bg`, …).

## Por preencher (TODOs)

- Os _(placeholders)_ e os `# TODO` de stack nos `.md` em `src/content/projetos/`
- Capturas de ecrã dos projetos em `public/projetos/`
