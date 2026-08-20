# Spark Command Systems Website

Production website for Spark Command Systems LLC.

## Stack

- React
- Vite
- React Router
- Tailwind CSS
- Cloudflare hosting

## Commands

```bash
npm run lint
npm run build
npm run preview
```

There is no configured automated test suite or TypeScript check in this repository yet.

## Deployment Notes

The site is a Vite single-page app deployed through Cloudflare. Do not migrate it to Vercel or restore outdated Vercel deployment assumptions. Static files in `public/` should be served directly, including:

- `/robots.txt`
- `/sitemap.xml`
- favicons
- public image and video assets

The app still uses client-side route metadata. This improves browser and social metadata after JavaScript runs, but it is not the same as server-rendered or statically prerendered SEO.

## Pricing Source

`src/pricing.js` is the customer-facing pricing source of truth for SEO descriptions, homepage Partnership terms, website package cards, pricing FAQs, post-agreement options, and intake handoff identifiers.

## Lead Forms

The main contact and website request forms submit to the existing Formspree workflow. Preserve existing payload field names unless downstream handling is updated.

## Intake Handoff

External intake links should use the contract in `docs/INTAKE-HANDOFF-CONTRACT.md`.

## Command Lab

Command Lab has been removed from the public website router and navigation. Its source files remain under `src/components/command-lab/` only as the migration source of record. See `docs/COMMAND-LAB-MIGRATION-PLAN.md`.
