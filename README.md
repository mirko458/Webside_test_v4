# SAP Consultant One-Pager

Modern, minimal one-page website for a freelance SAP PLM consultant.

## Stack

- React + Vite + TypeScript
- TailwindCSS
- shadcn-style reusable UI components
- Framer Motion + Lucide icons
- Dark/Light mode + DE/EN language toggle
- Vercel-ready contact API (`/api/contact`)

## Run locally

1. Install Node.js 20+
2. Install dependencies

```bash
npm install
```

3. Start dev server

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Contact form on Vercel

Set these environment variables for real email delivery via Resend:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (optional)