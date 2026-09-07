"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Eye,
  Minus,
  Plus,
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
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("en-PK").format(value);

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  return (
    <article className="sth-product-card">
      <div className="sth-product-card__media">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="sth-product-card__image"
        />

        <div className="sth-product-card__badges">
          <span className="sth-product-card__category">
            {category}
          </span>

          {badge && (
            <span className="sth-product-card__badge">
              {badge}
            </span>
          )}
        </div>

        <Link
          href={href}
          aria-label={`View ${name}`}
          className="sth-product-card__view"
        >
          <Eye size={16} strokeWidth={1.8} />
        </Link>
      </div>

      <div className="sth-product-card__body">
        <div className="sth-product-card__meta">
          <span className="sth-product-card__brand">
            {brand}
          </span>

          <div className="sth-product-card__rating">
            <Star
              size={13}
              fill="currentColor"
              strokeWidth={1.4}
            />

            <strong>{rating}</strong>

            <span>({reviewCount})</span>
          </div>
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

        <div className="sth-product-card__divider" />

        <div className="sth-product-card__price-row">
          <div>
            <span className="sth-product-card__price-label">
              Price
            </span>

            <strong className="sth-product-card__price">
              Rs. {formatPrice(price)}
            </strong>
          </div>

          {oldPrice && (
            <span className="sth-product-card__old-price">
              Rs. {formatPrice(oldPrice)}
            </span>
          )}
        </div>

        <div className="sth-product-card__quantity-row">
          <span className="sth-product-card__quantity-label">
            Quantity
          </span>

          <div className="sth-product-card__quantity">
            <button
              type="button"
              onClick={decreaseQuantity}
              aria-label="Decrease quantity"
            >
              <Minus size={13} />
            </button>

            <span>{quantity}</span>

            <button
              type="button"
              onClick={increaseQuantity}
              aria-label="Increase quantity"
            >
              <Plus size={13} />
            </button>
          </div>
        </div>

        <div className="sth-product-card__actions">
          <button
            type="button"
            className="sth-product-card__button sth-product-card__button--cart"
          >
            <ShoppingCart size={14} strokeWidth={1.8} />
            <span>Add to Cart</span>
          </button>

          <Link
            href={href}
            className="sth-product-card__button sth-product-card__button--buy"
          >
            <span>Buy Now</span>
            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </article>
  );
}