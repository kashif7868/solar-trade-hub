"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeftRight,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import "@/components/animations/css/home/product-card.css";

export interface ProductCardProps {
  name: string;
  href: string;
  image: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
}

export function ProductCard({
  name,
  href,
  image,
  category,
  brand,
  description,
  price,
  oldPrice,
  rating,
  reviewCount,
  badge,
}: ProductCardProps) {
  const formatPrice = (value: number) =>
    new Intl.NumberFormat("en-PK").format(value);

  return (
    <article className="sth-product-card">
      <div className="sth-product-card__media">
        <div className="sth-product-card__media-circle" />

        {badge && (
          <span className="sth-product-card__badge">
            {badge}
          </span>
        )}

        <button
          type="button"
          aria-label={`Add ${name} to wishlist`}
          className="sth-product-card__wishlist"
        >
          <Heart size={15} strokeWidth={1.8} />
        </button>

        <Link
          href={href}
          aria-label={`View ${name}`}
          className="sth-product-card__image-link"
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 767px) 80vw, (max-width: 1023px) 33vw, 16vw"
            className="sth-product-card__image"
          />
        </Link>
      </div>

      <div className="sth-product-card__body">
        <div className="sth-product-card__meta">
          <span className="sth-product-card__category">
            {category}
          </span>

          <span className="sth-product-card__brand">
            {brand}
          </span>
        </div>

        <div className="sth-product-card__rating">
          <Star
            size={12}
            fill="currentColor"
            strokeWidth={1.4}
          />

          <strong>{rating}</strong>

          <span>({reviewCount})</span>
        </div>

        <Link
          href={href}
          className="sth-product-card__title-link"
        >
          <h3 className="sth-product-card__title">
            {name}
          </h3>
        </Link>

        <p className="sth-product-card__description">
          {description}
        </p>

        <div className="sth-product-card__price-row">
          <strong className="sth-product-card__price">
            Rs. {formatPrice(price)}
          </strong>

          {oldPrice && (
            <span className="sth-product-card__old-price">
              Rs. {formatPrice(oldPrice)}
            </span>
          )}
        </div>

        <div className="sth-product-card__actions">
          <button
            type="button"
            className="sth-product-card__cart"
          >
            <ShoppingCart size={14} strokeWidth={1.8} />
            <span>Add to Cart</span>
          </button>

          <Link
            href={href}
            aria-label={`Compare or view ${name}`}
            className="sth-product-card__compare"
          >
            <ArrowLeftRight size={15} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </article>
  );
}