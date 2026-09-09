"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeftRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";

import { toast } from "sonner";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

import "@/components/animations/css/shop/product-card.css";

export interface ProductCardProps {
  id: number;
  slug: string;
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
  sku?: string;
}

export function ProductCard({
  id,
  slug,
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
  sku,
}: ProductCardProps) {
  const addItem = useCartStore(
    (state) => state.addItem
  );

  const increaseQuantity =
    useCartStore(
      (state) =>
        state.increaseQuantity
    );

  const decreaseQuantity =
    useCartStore(
      (state) =>
        state.decreaseQuantity
    );

  const quantity =
    useCartStore(
      (state) =>
        state.items.find(
          (item) =>
            item.id === id
        )?.quantity ?? 0
    );

  const toggleWishlist =
    useWishlistStore(
      (state) =>
        state.toggleItem
    );

  const isInWishlist =
    useWishlistStore(
      (state) =>
        state.items.some(
          (item) =>
            item.id === id
        )
    );

  const isInCart =
    quantity > 0;

  const displayQuantity =
    isInCart
      ? quantity
      : 1;

  const formatPrice = (
    value: number
  ) =>
    new Intl.NumberFormat(
      "en-PK"
    ).format(value);

  const discountPercentage =
    oldPrice &&
    oldPrice > price
      ? Math.round(
          ((oldPrice - price) /
            oldPrice) *
            100
        )
      : 0;

  const handleWishlist = () => {
    toggleWishlist({
      id,
      name,
      slug,
      sku: sku ?? "",
      image,
      price,
    });

    if (isInWishlist) {
      toast.info(
        "Removed from wishlist",
        {
          description:
            `${name} has been removed from your wishlist.`,
        }
      );

      return;
    }

    toast.success(
      "Added to wishlist",
      {
        description:
          `${name} has been saved to your wishlist.`,
      }
    );
  };

  const handleAddToCart = () => {
    if (isInCart) {
      toast.info(
        "Already in cart",
        {
          description:
            `${name} is already in your cart. Use + / - to change quantity.`,
        }
      );

      return;
    }

    addItem({
      id,
      name,
      slug,
      sku: sku ?? "",
      image,
      price,
    });

    toast.success(
      "Added to cart",
      {
        description:
          `${name} has been added successfully.`,
      }
    );
  };

  const handleIncrease = () => {
    if (!isInCart) {
      return;
    }

    increaseQuantity(id);

    toast.success(
      "Quantity updated",
      {
        description:
          `${name} quantity increased.`,
      }
    );
  };

  const handleDecrease = () => {
    if (!isInCart) {
      return;
    }

    if (quantity <= 1) {
      decreaseQuantity(id);

      toast.info(
        "Removed from cart",
        {
          description:
            `${name} has been removed from your cart.`,
        }
      );

      return;
    }

    decreaseQuantity(id);

    toast.success(
      "Quantity updated",
      {
        description:
          `${name} quantity decreased.`,
      }
    );
  };

  return (
    <article className="sth-product-card">
      <div className="sth-product-card__media">
        <div className="sth-product-card__media-glow" />

        {badge && (
          <span className="sth-product-card__badge">
            {badge}
          </span>
        )}

        <button
          type="button"
          className={`sth-product-card__wishlist ${
            isInWishlist
              ? "sth-product-card__wishlist--active"
              : ""
          }`}
          aria-label={
            isInWishlist
              ? `Remove ${name} from wishlist`
              : `Add ${name} to wishlist`
          }
          aria-pressed={
            isInWishlist
          }
          onClick={
            handleWishlist
          }
        >
          <Heart
            size={17}
            strokeWidth={1.8}
            fill={
              isInWishlist
                ? "currentColor"
                : "none"
            }
          />
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
            sizes="(max-width: 767px) 90vw, (max-width: 1023px) 46vw, 22vw"
            className="sth-product-card__image"
          />
        </Link>
      </div>

      <div className="sth-product-card__body">
        <div className="sth-product-card__meta">
          <div className="sth-product-card__meta-left">
            <span className="sth-product-card__category">
              {category}
            </span>

            <span className="sth-product-card__meta-dot">
              •
            </span>

            <span className="sth-product-card__brand">
              {brand}
            </span>
          </div>

          {sku && (
            <span className="sth-product-card__sku">
              SKU: {sku}
            </span>
          )}
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

        <div className="sth-product-card__rating-row">
          <div className="sth-product-card__stars">
            {Array.from({
              length: 5,
            }).map(
              (_, index) => (
                <Star
                  key={index}
                  size={12}
                  strokeWidth={1.4}
                  fill={
                    index <
                    Math.round(
                      rating
                    )
                      ? "currentColor"
                      : "none"
                  }
                />
              )
            )}
          </div>

          <strong>
            {rating}
          </strong>

          <span>
            ({reviewCount})
          </span>
        </div>

        <div className="sth-product-card__price-row">
          <div className="sth-product-card__price-content">
            <strong className="sth-product-card__price">
              Rs.{" "}
              {formatPrice(
                price
              )}
            </strong>

            {oldPrice && (
              <span className="sth-product-card__old-price">
                Rs.{" "}
                {formatPrice(
                  oldPrice
                )}
              </span>
            )}

            {discountPercentage >
              0 && (
              <span className="sth-product-card__discount">
                {
                  discountPercentage
                }
                % OFF
              </span>
            )}
          </div>

          <div
            className={`sth-product-card__quantity ${
              !isInCart
                ? "sth-product-card__quantity--disabled"
                : ""
            }`}
          >
            <button
              type="button"
              className="sth-product-card__quantity-button"
              aria-label={`Decrease ${name} quantity`}
              onClick={
                handleDecrease
              }
              disabled={
                !isInCart
              }
            >
              <Minus
                size={13}
                strokeWidth={2.1}
              />
            </button>

            <strong className="sth-product-card__quantity-value">
              {displayQuantity}
            </strong>

            <button
              type="button"
              className="sth-product-card__quantity-button"
              aria-label={`Increase ${name} quantity`}
              onClick={
                handleIncrease
              }
              disabled={
                !isInCart
              }
            >
              <Plus
                size={13}
                strokeWidth={2.1}
              />
            </button>
          </div>
        </div>

        <div className="sth-product-card__actions">
          <button
            type="button"
            className={`sth-product-card__cart ${
              isInCart
                ? "sth-product-card__cart--added"
                : ""
            }`}
            onClick={
              handleAddToCart
            }
          >
            <ShoppingCart
              size={15}
              strokeWidth={1.9}
            />

            <span>
              {isInCart
                ? "Already in Cart"
                : "Add to Cart"}
            </span>
          </button>

          <Link
            href={href}
            aria-label={`View ${name}`}
            className="sth-product-card__compare"
          >
            <ArrowLeftRight
              size={16}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        <div className="sth-product-card__benefits">
          <span>
            Free Delivery
          </span>

          <span>
            Official Warranty
          </span>
        </div>
      </div>
    </article>
  );
}