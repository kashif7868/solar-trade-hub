"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import { toast } from "sonner";

import { useCartStore } from "@/store/cartStore";

import "@/components/animations/css/cart/cart.css";

export function CartPage() {
  const items = useCartStore(
    (state) => state.items
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

  const removeItem =
    useCartStore(
      (state) =>
        state.removeItem
    );

  const clearCart =
    useCartStore(
      (state) =>
        state.clearCart
    );

  const formatPrice = (
    value: number
  ) =>
    new Intl.NumberFormat(
      "en-PK"
    ).format(value);

  const subtotal =
    items.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  const totalItems =
    items.reduce(
      (total, item) =>
        total +
        item.quantity,
      0
    );

  const handleRemove = (
    id: number,
    name: string
  ) => {
    removeItem(id);

    toast.info(
      "Removed from cart",
      {
        description:
          `${name} has been removed from your cart.`,
      }
    );
  };

  const handleDecrease = (
    id: number,
    name: string,
    quantity: number
  ) => {
    decreaseQuantity(id);

    if (quantity <= 1) {
      toast.info(
        "Removed from cart",
        {
          description:
            `${name} has been removed from your cart.`,
        }
      );

      return;
    }

    toast.success(
      "Quantity updated",
      {
        description:
          `${name} quantity decreased.`,
      }
    );
  };

  const handleIncrease = (
    id: number,
    name: string
  ) => {
    increaseQuantity(id);

    toast.success(
      "Quantity updated",
      {
        description:
          `${name} quantity increased.`,
      }
    );
  };

  const handleClearCart = () => {
    clearCart();

    toast.info(
      "Cart cleared",
      {
        description:
          "All products have been removed from your cart.",
      }
    );
  };

  if (items.length === 0) {
    return (
      <section className="sth-cart">
        <div className="sth-cart__container">
          <div className="sth-cart__breadcrumb">
            <Link href="/">
              Home
            </Link>

            <span>›</span>

            <strong>
              Cart
            </strong>
          </div>

          <div className="sth-cart__empty">
            <span className="sth-cart__empty-icon">
              <ShoppingCart
                size={32}
                strokeWidth={1.7}
              />
            </span>

            <h1>
              Your Cart is Empty
            </h1>

            <p>
              Explore solar products
              and add the equipment
              you need to your cart.
            </p>

            <Link
              href="/shop"
              className="sth-cart__shop-button"
            >
              <ShoppingBag
                size={16}
                strokeWidth={1.8}
              />

              Explore Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sth-cart">
      <div className="sth-cart__decor sth-cart__decor--left" />
      <div className="sth-cart__decor sth-cart__decor--right" />

      <div className="sth-cart__container">
        <div className="sth-cart__breadcrumb">
          <Link href="/">
            Home
          </Link>

          <span>›</span>

          <strong>
            Cart
          </strong>
        </div>

        <div className="sth-cart__header">
          <div>
            <Link
              href="/shop"
              className="sth-cart__back"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.8}
              />

              Back to Shop
            </Link>

            <h1 className="sth-cart__title">
              <span className="sth-cart__title-orange">
                Shopping
              </span>{" "}
              <span className="sth-cart__title-purple">
                Cart
              </span>
            </h1>

            <p className="sth-cart__count">
              {totalItems}{" "}
              {totalItems === 1
                ? "item"
                : "items"}{" "}
              in your cart
            </p>
          </div>

          <button
            type="button"
            className="sth-cart__clear"
            onClick={
              handleClearCart
            }
          >
            <Trash2
              size={15}
              strokeWidth={1.8}
            />

            Clear Cart
          </button>
        </div>

        <div className="sth-cart__layout">
          <div className="sth-cart__items">
            {items.map(
              (item) => (
                <article
                  key={item.id}
                  className="sth-cart__item"
                >
                  <Link
                    href={`/products/${item.slug}`}
                    className="sth-cart__image-link"
                  >
                    <Image
                      src={
                        item.image
                      }
                      alt={
                        item.name
                      }
                      fill
                      sizes="160px"
                      className="sth-cart__image"
                    />
                  </Link>

                  <div className="sth-cart__item-content">
                    <span className="sth-cart__sku">
                      SKU:{" "}
                      {item.sku}
                    </span>

                    <Link
                      href={`/products/${item.slug}`}
                      className="sth-cart__name"
                    >
                      {item.name}
                    </Link>

                    <strong className="sth-cart__unit-price">
                      Rs.{" "}
                      {formatPrice(
                        item.price
                      )}
                    </strong>
                  </div>

                  <div className="sth-cart__quantity">
                    <button
                      type="button"
                      onClick={() =>
                        handleDecrease(
                          item.id,
                          item.name,
                          item.quantity
                        )
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <Minus
                        size={14}
                        strokeWidth={
                          2
                        }
                      />
                    </button>

                    <strong>
                      {
                        item.quantity
                      }
                    </strong>

                    <button
                      type="button"
                      onClick={() =>
                        handleIncrease(
                          item.id,
                          item.name
                        )
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <Plus
                        size={14}
                        strokeWidth={
                          2
                        }
                      />
                    </button>
                  </div>

                  <div className="sth-cart__item-total">
                    <span>
                      Total
                    </span>

                    <strong>
                      Rs.{" "}
                      {formatPrice(
                        item.price *
                          item.quantity
                      )}
                    </strong>
                  </div>

                  <button
                    type="button"
                    className="sth-cart__remove"
                    onClick={() =>
                      handleRemove(
                        item.id,
                        item.name
                      )
                    }
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2
                      size={16}
                      strokeWidth={
                        1.8
                      }
                    />
                  </button>
                </article>
              )
            )}
          </div>

          <aside className="sth-cart__summary">
            <div className="sth-cart__summary-header">
              <ShoppingBag
                size={19}
                strokeWidth={1.8}
              />

              <h2>
                Order Summary
              </h2>
            </div>

            <div className="sth-cart__summary-row">
              <span>
                Items
              </span>

              <strong>
                {totalItems}
              </strong>
            </div>

            <div className="sth-cart__summary-row">
              <span>
                Subtotal
              </span>

              <strong>
                Rs.{" "}
                {formatPrice(
                  subtotal
                )}
              </strong>
            </div>

            <div className="sth-cart__summary-row">
              <span>
                Delivery
              </span>

              <strong className="sth-cart__free">
                Free
              </strong>
            </div>

            <div className="sth-cart__summary-divider" />

            <div className="sth-cart__summary-total">
              <span>
                Total
              </span>

              <strong>
                Rs.{" "}
                {formatPrice(
                  subtotal
                )}
              </strong>
            </div>

            <Link
              href="/checkout"
              className="sth-cart__checkout"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/shop"
              className="sth-cart__continue"
            >
              <ArrowLeft
                size={14}
              />

              Continue Shopping
            </Link>

            <div className="sth-cart__summary-note">
              <span>
                Secure Checkout
              </span>

              <span>
                Official Warranty
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}