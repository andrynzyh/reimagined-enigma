# DMO Field Notes

A technical, wiki-first fan site for Digimon Master Online. Astro is used as the static site generator because it combines fast HTML for the landing page with validated Markdown content collections for the wiki.

## Run locally

```sh
npm install
npm run dev
```

The dev server includes draft articles so editors can preview unfinished work. Production builds exclude articles with `draft: true`.

## Add an article

1. Copy `content/articles/_template.md` to a new Markdown file in `content/articles/`.
2. Fill in every frontmatter field: `title`, `description`, `category`, `tags`, `gameVersion`, `updated`, `draft`, and `related`.
3. Write the article below the frontmatter. Verify game facts against an official source before publishing.
4. Set `draft: false` when the article is ready.
5. Run `npm run dev` and open `/wiki` to preview search and category filtering.
6. Run `npm run build` to verify the production output excludes drafts.
7. Commit the Markdown file and its related changes.

Markdown remains the source of truth. A CMS is intentionally not enabled.

## Content honesty

Unknown facts use `[REAL DATA]` or `belum tersedia`. The key art is an explicit `[KEY ART]` placeholder until licensed or official art is supplied. This is an unaffiliated fan guide.

## Design record

Genre: modern-minimal. Macrostructure: Wiki Spine. Theme: Obsidian Field Notes. Navigation: N2 split navigation. Footer: Ft1 compact legal bar. Dials: ENERGY 1, RHYTHM 1, MOTION 1. The palette uses OKLCH tokens in `src/styles/tokens.css`; the amber accent is reserved for key actions and active information.

## Verification note

The production build and interactive checks should be run with `npm run build` and the local preview. Search reports loading, empty, and result states. Theme, category filter, navigation, breadcrumbs, and draft exclusion are implemented. A live browser audit and 58 gate slop test require the running preview environment.
