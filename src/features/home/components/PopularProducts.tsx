"use client";

import Link from "next/link";
import { useRef } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { ProductCard } from "@/components/common/ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";

import "@/components/animations/css/home/popular-products.css";

export function PopularProducts() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useProducts();

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollProducts = (
    direction: "left" | "right"
  ) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card =
      slider.querySelector<HTMLElement>(
        ".sth-product-card"
      );

    const cardWidth =
      card?.offsetWidth ?? 270;

    const gap = 14;

    slider.scrollBy({
      left:
        direction === "right"
          ? cardWidth + gap
          : -(cardWidth + gap),

      behavior: "smooth",
    });
  };

  return (
    <section className="sth-popular-products">
      <div className="sth-popular-products__container">
        <div className="sth-popular-products__header">
          <div className="sth-popular-products__heading">
            <span className="sth-popular-products__eyebrow">
              <span className="sth-popular-products__eyebrow-dot" />

              Trending Now
            </span>

            <h2 className="sth-popular-products__title">
              <span className="sth-popular-products__title-accent">
                Popular
              </span>{" "}
              Products
            </h2>

            <p className="sth-popular-products__description">
              Explore popular solar panels, hybrid
              inverters, lithium batteries, energy
              storage systems and essential solar
              accessories.
            </p>
          </div>

          <div className="sth-popular-products__header-right">
            <div className="sth-popular-products__benefits">
              <div className="sth-popular-products__benefit">
                <span className="sth-popular-products__benefit-icon sth-popular-products__benefit-icon--orange">
                  <ShieldCheck
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>

                <span>
                  Trusted
                  <strong>
                    Quality
                  </strong>
                </span>
              </div>

              <div className="sth-popular-products__benefit">
                <span className="sth-popular-products__benefit-icon sth-popular-products__benefit-icon--purple">
                  <Truck
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>

                <span>
                  Fast
                  <strong>
                    Delivery
                  </strong>
                </span>
              </div>

              <div className="sth-popular-products__benefit">
                <span className="sth-popular-products__benefit-icon sth-popular-products__benefit-icon--green">
                  <Headphones
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>

                <span>
                  Expert
                  <strong>
                    Support
                  </strong>
                </span>
              </div>
            </div>

            <Link
              href="/shop"
              className="sth-popular-products__view-all"
            >
              <span>
                View All Products
              </span>

              <ArrowRight
                size={16}
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>

        {isLoading && (
          <div className="sth-popular-products__slider">
            <div className="sth-popular-products__grid">
              {Array.from({
                length: 5,
              }).map((_, index) => (
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
          </div>
        )}

        {isError && (
          <div className="sth-popular-products__error">
            Unable to load products right now.
          </div>
        )}

        {!isLoading &&
          !isError &&
          products.length > 0 && (
            <div className="sth-popular-products__slider">
              <button
                type="button"
                aria-label="Previous products"
                className="sth-popular-products__slider-btn sth-popular-products__slider-btn--left"
                onClick={() =>
                  scrollProducts("left")
                }
              >
                <ArrowLeft
                  size={18}
                  strokeWidth={1.8}
                />
              </button>

              <div
                ref={sliderRef}
                className="sth-popular-products__grid"
              >
                {products.map(
                  (product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      slug={product.slug}
                      name={product.name}
                      href={`/products/${product.slug}`}
                      image={product.image}
                      category={
                        product.category
                      }
                      brand={product.brand}
                      description={
                        product.description
                      }
                      price={
                        product.price
                      }
                      oldPrice={
                        product.oldPrice
                      }
                      rating={
                        product.rating
                      }
                      reviewCount={
                        product.reviewCount
                      }
                      badge={
                        product.badge
                      }
                      sku={
                        product.sku
                      }
                    />
                  )
                )}
              </div>

              <button
                type="button"
                aria-label="Next products"
                className="sth-popular-products__slider-btn sth-popular-products__slider-btn--right"
                onClick={() =>
                  scrollProducts("right")
                }
              >
                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                />
              </button>
            </div>
          )}

        {!isLoading &&
          !isError &&
          products.length === 0 && (
            <div className="sth-popular-products__empty">
              No products available right now.
            </div>
          )}
      </div>
    </section>
  );
}