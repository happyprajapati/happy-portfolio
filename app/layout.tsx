import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";
import { personal } from "@/data/portfolio";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import { DEFAULT_THEME, THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

// Mono is only used for real technical names (span labels, stack tokens),
// so load a single weight. It stays preloaded: measured without preload, the
// late font discovery lengthened Lighthouse's simulated mobile LCP by ~0.6s.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

// The Open Graph image comes from app/opengraph-image.tsx; Next adds its
// og:image / twitter:image tags automatically. JSON-LD lives in page.tsx.
const [firstName, ...lastNames] = personal.name.split(" ");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  applicationName: personal.name,
  authors: [{ name: personal.name, url: siteUrl.toString() }],
  creator: personal.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: personal.name,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    firstName,
    lastName: lastNames.join(" "),
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

// Browser chrome matches the default (dark) paper colour.
export const viewport: Viewport = {
  themeColor: "#0d1420",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Dark is rendered on the server; the head script may switch to light
    // before hydration, so React must not complain that the class differs.
    <html
      lang="en"
      className={`${schibsted.variable} ${plexMono.variable} ${DEFAULT_THEME === "dark" ? "dark" : ""}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
