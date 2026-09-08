"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import { featuredBrands } from "@/data/brandData";

import "@/components/animations/css/home/featured-brands.css";

export function FeaturedBrands() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollBrands = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const item =
      slider.querySelector<HTMLElement>(
        ".sth-featured-brands__item"
      );

    const itemWidth = item?.offsetWidth ?? 220;
    const gap = 14;

    slider.scrollBy({
      left:
        direction === "right"
          ? itemWidth + gap
          : -(itemWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="sth-featured-brands">
      <div className="sth-featured-brands__container">
        <div className="sth-featured-brands__header">
          <div className="sth-featured-brands__heading">
            <span className="sth-featured-brands__eyebrow">
              <BadgeCheck
                size={14}
                strokeWidth={1.8}
              />
              Trusted Manufacturers
            </span>

            <h2 className="sth-featured-brands__title">
              Featured <span>Brands</span>
            </h2>

            <p className="sth-featured-brands__description">
              Global brands you can trust for quality,
              performance and a cleaner tomorrow.
            </p>
          </div>

          <Link
            href="/brands"
            className="sth-featured-brands__view-all"
          >
            <span>View All Brands</span>

            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        <div className="sth-featured-brands__slider">
          <button
            type="button"
            aria-label="Previous brands"
            className="sth-featured-brands__slider-btn sth-featured-brands__slider-btn--left"
            onClick={() => scrollBrands("left")}
          >
            <ArrowLeft
              size={18}
              strokeWidth={1.8}
            />
          </button>

          <div
            ref={sliderRef}
            className="sth-featured-brands__strip"
          >
            {featuredBrands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.href}
                className="sth-featured-brands__item"
                aria-label={`View ${brand.name}`}
              >
                <div className="sth-featured-brands__logo-wrap">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={150}
                    height={70}
                    className="sth-featured-brands__logo"
                  />
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next brands"
            className="sth-featured-brands__slider-btn sth-featured-brands__slider-btn--right"
            onClick={() => scrollBrands("right")}
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