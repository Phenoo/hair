import type { Metadata } from "next";

import { brandDefaults } from "@/lib/kds-data";

const baseUrl = "https://kds-hair-and-beauty.example";

export function buildMetadata(
  title: string,
  description: string,
  pathname = "/",
): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: brandDefaults.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
