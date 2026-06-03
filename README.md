# Foundation on the Rock Phase 1 Website

A simple, polished Phase 1 nonprofit website for Foundation on the Rock, built with Next.js and React.

Core message: "Restoring Lives. Rebuilding Foundations. Strengthening Communities."

## Pages

- Home
- About
- Programs
- Donate
- Contact

## Local setup

Install dependencies:

```bash
npm install
```

This project also includes a `pnpm-lock.yaml`, so `pnpm install` is a good option if you prefer pnpm.

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
```

Start the production build:

```bash
npm run start
```

## Update before launch

- Replace placeholder donation links in `app/donate/page.tsx`.
- Connect the contact form in `components/ContactForm.tsx` to the selected backend, CRM, or form service.
- Update nonprofit compliance language, EIN, tax-deductibility, and charitable solicitation details in `components/Footer.tsx` and `app/donate/page.tsx`.
- Confirm phone, email, domain, and any mailing address language in `app/contact/page.tsx` and `components/Footer.tsx`.
- Update `metadataBase` in `app/layout.tsx` if the final domain changes.

## Design system

The main visual tokens live in `app/globals.css`, including warm white, soft gray, deep navy, muted gold, and forest green accents. Components are intentionally reusable so donations, prayer requests, volunteer applications, and blog/devotional sections can be added later without redesigning the site.
