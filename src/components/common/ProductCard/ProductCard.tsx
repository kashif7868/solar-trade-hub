"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  href: string;
  image: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviewCount?: number;
  badge?: string;
}

export function ProductCard({
  name,
  href,
  image,
  brand,
  price,
  oldPrice,
  rating = 4.8,
  reviewCount = 0,
  badge,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("en-PK").format(value);

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#ED2436]/30
        hover:shadow-lg
      "
    >
      <div className="relative">
        <Link
          href={href}
          className="relative flex h-[230px] items-center justify-center overflow-hidden bg-slate-50 p-5"
        >
          {badge && (
            <span
              className="
                absolute left-3 top-3 z-10
                rounded-md
                bg-[#ED2436]
                px-2.5 py-1
                text-[10px]
                font-bold
                uppercase
                tracking-wide
                text-white
              "
            >
              {badge}
            </span>
          )}

          {!imageError ? (
            <Image
              src={image}
              alt={name}
              width={220}
              height={190}
              onError={() => setImageError(true)}
              className="
                max-h-[185px]
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs font-medium text-slate-400">
              Product Image
            </div>
          )}
        </Link>

        <button
          type="button"
          aria-label={
            wishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          onClick={() => setWishlisted((value) => !value)}
          className="
            absolute right-3 top-3 z-20
            flex h-9 w-9
            items-center justify-center
            rounded-full
            border border-slate-200
            bg-white
            text-slate-600
            shadow-sm
            transition-all
            hover:border-[#ED2436]
            hover:text-[#ED2436]
          "
        >
          <Heart
            className={`h-4 w-4 ${
              wishlisted
                ? "fill-[#ED2436] text-[#ED2436]"
                : ""
            }`}
          />
        </button>
      </div>

      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          {brand}
        </p>

        <Link href={href}>
          <h3
            className="
              mt-1.5
              line-clamp-2
              min-h-[42px]
              text-[14px]
              font-semibold
              leading-5
              text-slate-900
              transition-colors
              group-hover:text-[#07143D]
            "
          >
            {name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />

          <span className="text-xs font-semibold text-slate-700">
            {rating}
          </span>

          <span className="text-[11px] text-slate-400">
            ({reviewCount})
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            {oldPrice && (
              <p className="text-xs text-slate-400 line-through">
                Rs. {formatPrice(oldPrice)}
              </p>
            )}

            <p className="text-lg font-bold text-[#07143D]">
              Rs. {formatPrice(price)}
            </p>
          </div>

          <button
            type="button"
            aria-label={`Add ${name} to cart`}
            className="
              flex h-10 w-10
              shrink-0
              items-center justify-center
              rounded-md
              bg-[#07143D]
              text-white
              transition-colors
              hover:bg-[#ED2436]
            "
          >
            <ShoppingCart className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </article>
  );
}