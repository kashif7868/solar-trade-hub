"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/common/ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";

import "@/components/animations/css/home/popular-products.css";

export function PopularProducts() {
  const {
    data: products,
    isLoading,
    isError,
  } = useProducts();

  return (
    <section className="sth-popular-products">
      <div className="sth-popular-products__container">
        <div className="sth-popular-products__header">
          <div className="sth-popular-products__heading">
            <span className="sth-popular-products__eyebrow">
              Trending Now
            </span>

            <h2 className="sth-popular-products__title">
              Popular Products
            </h2>

            <p className="sth-popular-products__description">
              Explore popular solar panels, hybrid inverters,
              lithium batteries, energy storage systems and
              essential solar accessories.
            </p>
          </div>

          <Link
            href="/shop"
            className="sth-popular-products__view-all"
          >
            <span>View All Products</span>

            <ArrowRight
              size={14}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {isLoading && (
          <div className="sth-popular-products__grid">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="sth-popular-products__skeleton"
              >
                <div className="sth-popular-products__skeleton-image" />

                <div className="sth-popular-products__skeleton-body">
                  <div className="sth-popular-products__skeleton-meta">
                    <span />
                    <span />
                  </div>

                  <span className="sth-popular-products__skeleton-title" />

                  <span className="sth-popular-products__skeleton-text" />

                  <span className="sth-popular-products__skeleton-text sth-popular-products__skeleton-text--short" />

                  <div className="sth-popular-products__skeleton-divider" />

                  <span className="sth-popular-products__skeleton-price" />

                  <div className="sth-popular-products__skeleton-actions">
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="sth-popular-products__error">
            Unable to load products right now.
          </div>
        )}

        {!isLoading &&
          !isError &&
          products &&
          products.length > 0 && (
            <div className="sth-popular-products__grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  href={product.href}
                  image={product.image}
                  category={product.category}
                  brand={product.brand}
                  description={product.description}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  badge={product.badge}
                />
              ))}
            </div>
          )}

        {!isLoading &&
          !isError &&
          products &&
          products.length === 0 && (
            <div className="sth-popular-products__empty">
              No products available right now.
            </div>
          )}
      </div>
    </section>
  );
}