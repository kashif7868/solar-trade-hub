"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import type { Product } from "@/types/product";

import { ProductGallery } from "./components/ProductGallery";
import { ProductInfo } from "./components/ProductInfo";
import { ProductTrust } from "./components/ProductTrust";
import { RelatedProducts } from "./components/RelatedProducts";

import "@/components/animations/css/product/product-detail.css";

interface ProductDetailPageProps {
  slug: string;
}

async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "http://localhost:4000";

  const response = await fetch(
    `${baseUrl}/products?slug=${encodeURIComponent(slug)}`
  );

  if (!response.ok) {
    throw new Error("Failed to load product");
  }

  const products: Product[] =
    await response.json();

  return products[0] ?? null;
}

export function ProductDetailPage({
  slug,
}: ProductDetailPageProps) {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", slug],

    queryFn: () =>
      getProductBySlug(slug),
  });

  if (isLoading) {
    return (
      <section className="sth-product-detail">
        <div className="sth-product-detail__container">
          <div className="sth-product-detail__loading">
            <div className="sth-product-detail__loading-gallery" />

            <div className="sth-product-detail__loading-info">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (
    isError ||
    !product
  ) {
    return (
      <section className="sth-product-detail">
        <div className="sth-product-detail__container">
          <div className="sth-product-detail__not-found">
            <h1>
              Product not found
            </h1>

            <p>
              The product you are looking for is not available.
            </p>

            <Link href="/shop">
              Back to Shop
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sth-product-detail">
      <div className="sth-product-detail__decor sth-product-detail__decor--left" />

      <div className="sth-product-detail__decor sth-product-detail__decor--right" />

      <div className="sth-product-detail__container">
        <div className="sth-product-detail__breadcrumb">
          <Link href="/">
            Home
          </Link>

          <span>›</span>

          <Link href="/shop">
            Shop
          </Link>

          <span>›</span>

          <Link
            href={`/shop?category=${encodeURIComponent(
              product.category
            )}`}
          >
            {product.category}
          </Link>

          <span>›</span>

          <strong>
            {product.name}
          </strong>
        </div>

        <div className="sth-product-detail__main">
          <ProductGallery
            product={product}
          />

          <ProductInfo
            product={product}
          />
        </div>

        <ProductTrust />

        <div className="sth-product-detail__details">
          <section className="sth-product-detail__description-card">
            <div className="sth-product-detail__section-heading">
              <span className="sth-product-detail__section-heading-orange">
                Product
              </span>{" "}

              <span className="sth-product-detail__section-heading-purple">
                Description
              </span>
            </div>

            <p>
              {product.description}
            </p>
          </section>

          <section className="sth-product-detail__specifications">
            <div className="sth-product-detail__section-heading">
              <span className="sth-product-detail__section-heading-orange">
                Product
              </span>{" "}

              <span className="sth-product-detail__section-heading-purple">
                Specifications
              </span>
            </div>

            <div className="sth-product-detail__spec-grid">
              <div>
                <span>
                  Brand
                </span>

                <strong>
                  {product.brand}
                </strong>
              </div>

              <div>
                <span>
                  Category
                </span>

                <strong>
                  {product.category}
                </strong>
              </div>

              <div>
                <span>
                  SKU
                </span>

                <strong>
                  {product.sku}
                </strong>
              </div>

              <div>
                <span>
                  Type
                </span>

                <strong>
                  {product.type}
                </strong>
              </div>

              <div>
                <span>
                  Capacity
                </span>

                <strong>
                  {product.capacity}
                </strong>
              </div>

              <div>
                <span>
                  Availability
                </span>

                <strong>
                  {product.status}
                </strong>
              </div>
            </div>
          </section>
        </div>

        <RelatedProducts
          currentProduct={product}
        />
      </div>
    </section>
  );
}