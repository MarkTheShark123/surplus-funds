# Garden State Surplus Recovery prototype

A responsive, five-page website concept for a New Jersey foreclosure surplus recovery company. Garden State Surplus Recovery is a working brand; the company’s identity, contact details, professional credentials, attorney involvement, and fee disclosures remain subject to verification.

The site includes Home, How It Works, About Us, FAQ, and Contact pages, with a sample eligibility form on Home and Contact. Forms validate name, email, US phone number, property address, and the prototype acknowledgment, then show a clearly labeled demo confirmation. No form entries are transmitted or persisted, no records are searched, and no eligibility decision is made. FAQ categories and accordions, mobile navigation, and page links work in the prototype.

## Technologies

React 19, TypeScript, TanStack Start and Router, Vite, Tailwind CSS, custom responsive CSS, and the Netlify TanStack adapter. Typography uses DM Sans and Instrument Serif. An AI-generated illustrative home photograph is stored in `public/img/` and requested through Netlify Image CDN. There are no database, authentication, third-party inquiry, or live form integrations.

## Local development

Use Node 24 (or a compatible version listed in `package.json`) and pnpm.

```sh
pnpm install
netlify dev --port 8889
```

Netlify Dev includes the Image CDN proxy. A standalone framework development server does not emulate the `/.netlify/images` endpoint. File-route types are generated automatically by the framework when it starts or builds.

## Review and launch

This is a visual prototype awaiting approval for public launch. No deployment or custom domain connection was performed as part of its implementation. Search indexing is discouraged by the root robots meta tag and `public/robots.txt`; these are not access controls.

Before enabling real inquiries, verify all company details, attorney credentials and involvement, services, fees, privacy disclosures, and contact consent with the business and appropriate legal advisers. Replace the client-only demo with an approved Netlify-backed inquiry flow, revise the demo notices, and obtain explicit approval before publishing or connecting a domain. No sample credentials, testimonials, recovery totals, or guaranteed outcomes are presented.

The implementation was reviewed by reading the files. Local build, development, test, and type-check commands were not run during creation; the platform’s pipeline handles build validation.
