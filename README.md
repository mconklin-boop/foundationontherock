# Foundation on the Rock Website

A simple, polished nonprofit website for Foundation on the Rock, built with Next.js and React.

Core message: "Restoring Lives. Rebuilding Foundations. Strengthening Communities."

## Pages

- Home
- About
- Programs
- Donate
- Prayer Requests
- Volunteer
- Devotionals
- Contact
- Privacy Policy
- Terms
- Donation Disclaimer

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

## Launch checklist

- Replace `DONATION_URL` in `lib/site.ts` with the approved live donation or payment link.
- Replace `JOTFORM_PRAYER_REQUEST_URL` in `lib/site.ts` with the live Jotform prayer request form URL.
- Connect contact and volunteer forms to the selected backend, form service, CRM, or spreadsheet workflow.
- Add real community outreach, volunteer service, family support, and devotional/blog photos.
- Confirm EIN, nonprofit status, tax-deductibility, and charitable solicitation language.
- Review Privacy Policy, Terms, and Donation Disclaimer with appropriate legal guidance.
- Confirm phone, email, domain, and any mailing address language in `app/contact/page.tsx` and `components/Footer.tsx`.
- Confirm the `foundationontherock.org` domain deployment in Vercel.
- Confirm analytics, privacy settings, and cookie/privacy disclosures if analytics are added.
- Confirm SEO titles and descriptions for every public page.

## Design system

The main visual tokens live in `app/globals.css`, including warm white, soft gray, deep navy, muted gold, and forest green accents. Components are intentionally reusable so donations, prayer requests, volunteer applications, and blog/devotional sections can be added later without redesigning the site.
