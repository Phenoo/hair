import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { ProductPage } from "@/components/site-pages";
import { brandDefaults, getProductBySlug, products } from "@/lib/kds-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Wig not found",
    };
  }

  return {
    title: `${product.name} | KDS Hair & Beauty`,
    description: `${product.name} from KDS Hair & Beauty. ${product.description}`,
    alternates: {
      canonical: `/shop-wigs/${product.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.gallery,
    brand: {
      "@type": "Brand",
      name: brandDefaults.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
        id={`kds-product-schema-${product.slug}`}
        type="application/ld+json"
      />
      <ProductPage product={product} />
    </>
  );
}
