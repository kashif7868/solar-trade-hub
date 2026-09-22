import { ProductDetailPage } from "@/features/Product/ProductDetailPage";

import { popularProducts } from "@/data/productData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   STATIC PRODUCT ROUTES

   IMPORTANT:

   output: "export" ke saath Next.js ko build time par
   dynamic product routes pata honi chahiye.

   Hum localhost/backend ko build time par call nahi karte.
   Routes local productData se generate honge.
========================================================= */

export function generateStaticParams() {
  const products =
    Array.isArray(popularProducts)
      ? popularProducts
      : [];

  const params =
    products
      .map((product) => {
        const item =
          product as unknown as {
            slug?: string;
            id?: string | number;
            productId?: string;
          };

        const slug =
          String(
            item.slug ??
              item.productId ??
              item.id ??
              ""
          ).trim();

        if (!slug) {
          return null;
        }

        return {
          slug,
        };
      })
      .filter(
        (
          item
        ): item is {
          slug: string;
        } => item !== null
      );

  return params;
}

/* =========================================================
   STATIC EXPORT

   Only routes returned from generateStaticParams()
   exist in the generated `out` directory.
========================================================= */

export const dynamicParams =
  false;

/* =========================================================
   PRODUCT DETAIL PAGE
========================================================= */

export default async function Page({
  params,
}: PageProps) {
  const { slug } =
    await params;

  return (
    <ProductDetailPage
      slug={slug}
    />
  );
}