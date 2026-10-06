import { personal } from "@/data/portfolio";

/**
 * The public origin, used for canonical URLs, Open Graph, the sitemap and
 * JSON-LD. No domain exists yet, so it comes from the environment:
 *   1. NEXT_PUBLIC_SITE_URL — set this once a domain is chosen;
 *   2. VERCEL_PROJECT_PRODUCTION_URL — provided automatically on Vercel;
 *   3. localhost, for local builds.
 */
function resolveSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return new URL(`https://${vercel}`);
  return new URL(`http://localhost:${process.env.PORT ?? 3000}`);
}

export const siteUrl = resolveSiteUrl();

export const siteTitle = `${personal.name} | ${personal.role}`;

/** Search-result length (under ~160 characters); restates resume facts only. */
export const siteDescription = `${personal.name}, ${personal.role}: React and Next.js interfaces, Node.js APIs, JWT and 2FA authentication, and Stripe payments.`;
