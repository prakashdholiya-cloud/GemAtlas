# GemAtlas Gemstone Hub + Article Engine

This package adds a full premium gemstone encyclopedia to GemAtlas.

## Included
- `/gemstones` hub page with category sections
- Dynamic article pages at `/gemstones/[slug]`
- 39 gemstone guides including natural diamond, lab-grown diamond, ruby, sapphire, emerald, pearl, organic gems, lab-created gems, and simulants
- Reusable article shell with hero image slot, quick facts, table of contents, related guides, source links, and premium layout
- Deployable Next.js + Tailwind project

## Deploy
1. Unzip this folder.
2. Replace your current GitHub repository files with these files, or copy these files into your existing GemAtlas repo.
3. Commit and push to `main`.
4. Vercel will redeploy automatically.

## Important
The article pages intentionally use image placeholders. Replace them with licensed images inside the design later. Do not copy images directly from Wikipedia unless the license allows it and you provide attribution.

## Add a new gemstone
Edit `data/articles.ts` and add a new entry to the `gems` array. The article page is generated automatically.
