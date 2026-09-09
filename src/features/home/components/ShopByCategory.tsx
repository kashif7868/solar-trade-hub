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

import { CategoryCard } from "@/components/common/CategoryCard/CategoryCard";
import { homeCategories } from "@/data/categoryData";

import "@/components/animations/css/home/shop-by-category.css";

export function ShopByCategory() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (
    direction: "left" | "right"
  ) => {
    const slider =
      sliderRef.current;

    if (!slider) {
      return;
    }

    const card =
      slider.querySelector<HTMLElement>(
        ".sth-category-card"
      );

    const cardWidth =
      card?.offsetWidth ?? 240;

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
    <section className="sth-shop-category">
      <div className="sth-shop-category__container">
        <div className="sth-shop-category__header">
          <div className="sth-shop-category__heading">
            <span className="sth-shop-category__eyebrow">
              <span className="sth-shop-category__eyebrow-dot" />
              Shop By Category
            </span>

            <h2 className="sth-shop-category__title">
              <span className="sth-shop-category__title-orange">
                Shop by
              </span>{" "}
              <span className="sth-shop-category__title-purple">
                Categories
              </span>
            </h2>

            <p className="sth-shop-category__description">
              Explore a wide range of solar products from
              trusted suppliers across Pakistan. Find exactly
              what you need for your home, business or next
              project.
            </p>
          </div>

          <div className="sth-shop-category__header-right">
            <div className="sth-shop-category__benefits">
              <div className="sth-shop-category__benefit">
                <span className="sth-shop-category__benefit-icon sth-shop-category__benefit-icon--orange">
                  <ShieldCheck
                    size={16}
                    strokeWidth={1.8}
                  />
                </span>

                <span>
                  Verified
                  <strong>
                    Products
                  </strong>
                </span>
              </div>

              <div className="sth-shop-category__benefit">
                <span className="sth-shop-category__benefit-icon sth-shop-category__benefit-icon--purple">
                  <Truck
                    size={16}
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

              <div className="sth-shop-category__benefit">
                <span className="sth-shop-category__benefit-icon sth-shop-category__benefit-icon--orange">
                  <Headphones
                    size={16}
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
              className="sth-shop-category__view-all"
            >
              <span>
                View All Categories
              </span>

              <ArrowRight
                size={15}
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>

        <div className="sth-shop-category__slider">
          <button
            type="button"
            aria-label="Previous categories"
            className="sth-shop-category__slider-btn sth-shop-category__slider-btn--left"
            onClick={() =>
              scrollCategories("left")
            }
          >
            <ArrowLeft
              size={18}
              strokeWidth={1.8}
            />
          </button>

          <div
            ref={sliderRef}
            className="sth-shop-category__grid"
          >
            {homeCategories.map(
              (category, index) => (
                <CategoryCard
                  key={category.id}
                  title={category.title}
                  href={category.href}
                  image={category.image}
                  index={index}
                />
              )
            )}
          </div>

          <button
            type="button"
            aria-label="Next categories"
            className="sth-shop-category__slider-btn sth-shop-category__slider-btn--right"
            onClick={() =>
              scrollCategories("right")
            }
          >
            <ArrowRight
              size={18}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>
    </section>
  );
}