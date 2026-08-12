import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PolicyPage } from "@/components/site-pages";
import { getPolicyBySlug, policies } from "@/lib/kds-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return policies.map((policy) => ({
    slug: policy.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);

  return {
    title: policy?.title ?? "Legal",
    description: policy?.intro ?? "Legal information for KDS Hair & Beauty.",
    alternates: {
      canonical: `/legal/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);

  if (!policy) {
    notFound();
  }

  return <PolicyPage policy={policy} />;
}
