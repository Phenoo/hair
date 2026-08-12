import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import { SiteProvider } from "@/components/site-provider";
import { SiteShell } from "@/components/site-shell";
import { brandDefaults } from "@/lib/kds-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KDS Hair & Beauty | Luxury Wigs & Professional Hair Appointments",
    template: "%s | KDS Hair & Beauty.",
  },
  description:
    "Luxury wigs, premium installations and confidence-first hair services by KDS Hair & Beauty.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: brandDefaults.name,
  description: brandDefaults.tagline,
  areaServed: "United Kingdom",
  priceRange: "£££",
  address: {
    "@type": "PostalAddress",
    addressLocality: brandDefaults.location,
    addressCountry: "GB",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <Script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          id="kds-local-business-schema"
          type="application/ld+json"
        />
        <SiteProvider>
          <SiteShell>{children}</SiteShell>
        </SiteProvider>
      </body>
    </html>
  );
}
