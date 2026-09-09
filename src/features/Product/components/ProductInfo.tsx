"use client";

import {
  CheckCircle2,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";

import { toast } from "sonner";

import type { Product } from "@/types/product";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

import "@/components/animations/css/product/product-info.css";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({
  product,
}: ProductInfoProps) {
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
            item.id === product.id
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
            item.id === product.id
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
    product.oldPrice &&
    product.oldPrice > product.price
      ? Math.round(
          (
            (
              product.oldPrice -
              product.price
            ) /
            product.oldPrice
          ) *
            100
        )
      : 0;

  const handleAddToCart = () => {
    if (isInCart) {
      toast.info(
        "Already in cart",
        {
          description:
            `${product.name} is already in your cart.`,
        }
      );

      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      sku: product.sku,
      image: product.image,
      price: product.price,
    });

    toast.success(
      "Added to cart",
      {
        description:
          `${product.name} has been added successfully.`,
      }
    );
  };

  const handleIncrease = () => {
    if (!isInCart) {
      return;
    }

    increaseQuantity(
      product.id
    );
  };

  const handleDecrease = () => {
    if (!isInCart) {
      return;
    }

    decreaseQuantity(
      product.id
    );
  };

  const handleWishlist = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      slug: product.slug,
      sku: product.sku,
      image: product.image,
      price: product.price,
    });

    if (isInWishlist) {
      toast.info(
        "Removed from wishlist"
      );

      return;
    }

    toast.success(
      "Added to wishlist"
    );
  };

  return (
    <section className="sth-product-info">
      <div className="sth-product-info__meta">
        <span className="sth-product-info__category">
          {product.category}
        </span>

        <span className="sth-product-info__dot">
          •
        </span>

        <span className="sth-product-info__brand">
          {product.brand}
        </span>
      </div>

      <h1 className="sth-product-info__title">
        {product.name}
      </h1>

      <div className="sth-product-info__sku">
        SKU: {product.sku}
      </div>

      <div className="sth-product-info__rating">
        <div className="sth-product-info__stars">
          {Array.from({
            length: 5,
          }).map(
            (_, index) => (
              <Star
                key={index}
                size={15}
                strokeWidth={1.4}
                fill={
                  index <
                  Math.round(
                    product.rating
                  )
                    ? "currentColor"
                    : "none"
                }
              />
            )
          )}
        </div>

        <strong>
          {product.rating}
        </strong>

        <span>
          ({product.reviewCount} reviews)
        </span>
      </div>

      <p className="sth-product-info__description">
        {product.description}
      </p>

      <div className="sth-product-info__price-block">
        <div className="sth-product-info__price-row">
          <strong className="sth-product-info__price">
            Rs.{" "}
            {formatPrice(
              product.price
            )}
          </strong>

          {product.oldPrice && (
            <span className="sth-product-info__old-price">
              Rs.{" "}
              {formatPrice(
                product.oldPrice
              )}
            </span>
          )}

          {discountPercentage >
            0 && (
            <span className="sth-product-info__discount">
              {
                discountPercentage
              }
              % OFF
            </span>
          )}
        </div>

        <span className="sth-product-info__tax-note">
          Final price may vary by
          supplier and delivery
          location.
        </span>
      </div>

      <div className="sth-product-info__availability">
        <span
          className={`sth-product-info__status ${
            product.status ===
            "In Stock"
              ? "sth-product-info__status--available"
              : "sth-product-info__status--unavailable"
          }`}
        >
          <CheckCircle2
            size={15}
            strokeWidth={1.8}
          />

          {product.status}
        </span>

        <span className="sth-product-info__stock">
          {product.stock} units
          available
        </span>
      </div>

      <div className="sth-product-info__purchase">
        <div
          className={`sth-product-info__quantity ${
            !isInCart
              ? "sth-product-info__quantity--disabled"
              : ""
          }`}
        >
          <button
            type="button"
            onClick={
              handleDecrease
            }
            disabled={
              !isInCart
            }
            aria-label="Decrease quantity"
          >
            <Minus
              size={15}
              strokeWidth={2}
            />
          </button>

          <strong>
            {displayQuantity}
          </strong>

          <button
            type="button"
            onClick={
              handleIncrease
            }
            disabled={
              !isInCart
            }
            aria-label="Increase quantity"
          >
            <Plus
              size={15}
              strokeWidth={2}
            />
          </button>
        </div>

        <button
          type="button"
          className={`sth-product-info__cart ${
            isInCart
              ? "sth-product-info__cart--added"
              : ""
          }`}
          onClick={
            handleAddToCart
          }
        >
          <ShoppingCart
            size={17}
            strokeWidth={1.9}
          />

          <span>
            {isInCart
              ? "Already in Cart"
              : "Add to Cart"}
          </span>
        </button>

        <button
          type="button"
          className={`sth-product-info__wishlist ${
            isInWishlist
              ? "sth-product-info__wishlist--active"
              : ""
          }`}
          onClick={
            handleWishlist
          }
          aria-label={
            isInWishlist
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <Heart
            size={18}
            strokeWidth={1.8}
            fill={
              isInWishlist
                ? "currentColor"
                : "none"
            }
          />
        </button>
      </div>
    </section>
  );
}