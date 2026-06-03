# Foundation on the Rock Phase 2 Website

A polished Phase 2 nonprofit website for Foundation on the Rock, built with Next.js and React.

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

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
```

## Phase 2 notes

- Donation buttons use `DONATION_URL` in `lib/site.ts` and are placeholders until a giving platform is approved.
- Prayer request and volunteer forms are static placeholders with TODO comments for future backend or form-provider integration.
- Devotionals are static example posts and can later be connected to a CMS if needed.
- Community impact metrics live in `components/CommunityImpact.tsx` and are editable placeholders.
- Legal pages are placeholders and need legal review before public launch.

## Update before launch

- Replace `DONATION_URL` in `lib/site.ts` with the approved donation link.
- Connect forms in `components/ContactForm.tsx`, `components/PrayerRequestForm.tsx`, and `components/VolunteerApplicationForm.tsx`.
- Update nonprofit compliance language, EIN, tax-deductibility, charitable solicitation language, privacy policy, terms, and donation disclaimer.
- Confirm phone, email, domain, and any mailing address language.

## Design system

The main visual tokens live in `app/globals.css`, including warm white, soft gray, deep navy, muted gold, and forest green accents. Components are intentionally reusable so future donations, prayer requests, volunteer applications, and devotional/blog content can be expanded without redesigning the site.
