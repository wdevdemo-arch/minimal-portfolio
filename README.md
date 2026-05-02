# Minimal Portfolio

A bilingual SK/EN portfolio website for a fictional Slovak web designer, built with Next.js App Router and ready for Vercel.

## Structure

```txt
app/                  Next.js routes and global styles
components/layout/    Shared page chrome
components/sections/  Portfolio page sections
components/ui/        Small reusable UI primitives
content/              Slovak and English copy
lib/                  i18n and metadata helpers
public/images/        Static image assets
styles/               Design tokens
types/                Shared TypeScript models
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/sk` or `http://localhost:3000/en`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js settings and deploy.

## Replace placeholders

- `Matej Novak`
- `hello@example.com`
- GitHub and LinkedIn links
- Project names and experience entries
