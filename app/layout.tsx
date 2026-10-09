import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { JsonLd } from "@/components/JsonLd";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "@/styles/base.css";
import "@/styles/chrome.css";
import "@/styles/home.css";
import "@/styles/pages.css";

const display = localFont({
  src: [
    { path: "./fonts/Novecentosanswide-Light.woff2", weight: "300" },
    { path: "./fonts/Novecentosanswide-Normal.woff2", weight: "400" },
    { path: "./fonts/Novecentosanswide-DemiBold.woff2", weight: "600" },
  ],
  variable: "--f-display",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const text = localFont({
  src: [
    { path: "./fonts/CreatoDisplay-Light.woff2", weight: "300" },
    { path: "./fonts/CreatoDisplay-Regular.woff2", weight: "400" },
    { path: "./fonts/CreatoDisplay-Medium.woff2", weight: "500" },
  ],
  variable: "--f-text",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Maçon à Aix-en-Provence : maçonnerie et gros œuvre | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "maçon Aix-en-Provence",
    "maçonnerie Aix-en-Provence",
    "entreprise de maçonnerie Pays d'Aix",
    "gros œuvre Aix-en-Provence",
    "extension maison Aix-en-Provence",
    "ouverture mur porteur Aix",
    "rénovation pierre Provence",
    "mur de soutènement",
    "enduit chaux façade",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name}, maçon à Aix-en-Provence`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: true },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#f2eee7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${display.variable} ${text.variable} no-js`}>
      <head>
        {/* Retire « no-js » avant le premier rendu : pas de saut des animations. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
      </head>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <RevealObserver />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
