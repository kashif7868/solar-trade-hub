import { notFound } from "next/navigation";

import { CategoryPage } from "@/features/Category/CategoryPage";
import { getCategoryBySlug } from "@/data/categoryData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  const { slug } = await params;

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