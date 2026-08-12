import type { MetadataRoute } from "next";

import { policies, products } from "@/lib/kds-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/book-appointment",
    "/services",
    "/shop-wigs",
    "/collections",
    "/gallery",
    "/about-kds",
    "/faq",
    "/contact",
    "/my-kds",
    "/bag",
    "/checkout",
    "/admin",
  ].map((path) => ({
    url: `https://kds-hair-and-beauty.example${path}`,
  }));

  const productRoutes = products.map((product) => ({
    url: `https://kds-hair-and-beauty.example/shop-wigs/${product.slug}`,
  }));

  const legalRoutes = policies.map((policy) => ({
    url: `https://kds-hair-and-beauty.example/legal/${policy.slug}`,
  }));

  return [...staticRoutes, ...productRoutes, ...legalRoutes];
}
