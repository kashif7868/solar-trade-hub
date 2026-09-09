import { ProductDetailPage } from "@/features/Product/ProductDetailPage";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  const { slug } = await params;

  return (
    <ProductDetailPage
      slug={slug}
    />
  );
}