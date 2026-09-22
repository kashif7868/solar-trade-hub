import { notFound } from "next/navigation";

import { CategoryPage } from "@/features/Category/CategoryPage";

import {
  getCategoryBySlug,
  getCategoryStaticParams,
} from "@/data/categoryData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   STATIC CATEGORY ROUTES
========================================================= */

export function generateStaticParams() {
  return getCategoryStaticParams();
}

/* =========================================================
   CATEGORY PAGE
========================================================= */

export default async function Page({
  params,
}: PageProps) {
  const { slug } =
    await params;

  const category =
    getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <CategoryPage
      category={category}
    />
  );
}