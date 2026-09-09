"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/common/ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";

import type { Product } from "@/types/product";

import "@/components/animations/css/product/related-products.css";

interface RelatedProductsProps {
  currentProduct: Product;
}

export function RelatedProducts({
  currentProduct,
}: RelatedProductsProps) {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useProducts();

  const relatedProducts = useMemo(() => {
    const sameCategory = products.filter(
      (product) =>
        product.id !== currentProduct.id &&
        product.category === currentProduct.category
    );

    const sameBrand = products.filter(
      (product) =>
        product.id !== currentProduct.id &&
        product.brand === currentProduct.brand &&
        !sameCategory.some(
          (item) => item.id === product.id
        )
    );

    const fallback = products.filter(
      (product) =>
        product.id !== currentProduct.id &&
        !sameCategory.some(
          (item) => item.id === product.id
        ) &&
        !sameBrand.some(
          (item) => item.id === product.id
        )
    );

    return [
      ...sameCategory,
      ...sameBrand,
      ...fallback,
    ].slice(0, 4);
  }, [
    products,
    currentProduct.id,
    currentProduct.category,
    currentProduct.brand,
  ]);

  return (
    <section className="sth-related-products">
      <div className="sth-related-products__header">
        <div>
          <span className="sth-related-products__eyebrow">
            You may also like
          </span>

          <h2 className="sth-related-products__title">
            <span className="sth-related-products__title-orange">
              Related
            </span>{" "}
            <span className="sth-related-products__title-purple">
              Products
            </span>
          </h2>

          <p className="sth-related-products__description">
            Explore similar solar products from our marketplace.
          </p>
        </div>

        <Link
          href="/shop"
          className="sth-related-products__view-all"
        >
          <span>
            View All Products
          </span>

          <ArrowRight
            size={15}
            strokeWidth={1.9}
          />
        </Link>
      </div>

      {isLoading && (
        <div className="sth-related-products__grid">
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <div
              key={index}
              className="sth-related-products__skeleton"
            >
              <div className="sth-related-products__skeleton-image" />

              <div className="sth-related-products__skeleton-body">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          ))}
        </div>
      )}

      {isError && (
        <div className="sth-related-products__state">
          <strong>
            Unable to load related products
          </strong>

          <span>
            Please try again later.
          </span>
        </div>
      )}

      {!isLoading &&
        !isError &&
        relatedProducts.length > 0 && (
          <div className="sth-related-products__grid">
            {relatedProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  href={`/products/${product.slug}`}
                  image={product.image}
                  category={product.category}
                  brand={product.brand}
                  description={product.description}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  badge={product.badge}
                  sku={product.sku}
                />
              )
            )}
          </div>
        )}

      {!isLoading &&
        !isError &&
        relatedProducts.length === 0 && (
          <div className="sth-related-products__state">
            <strong>
              No related products found
            </strong>

            <Link href="/shop">
              Explore Shop
            </Link>
          </div>
        )}
    </section>
  );
}