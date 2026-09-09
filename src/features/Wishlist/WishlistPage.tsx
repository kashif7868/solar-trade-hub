"use client";

import Link from "next/link";

import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { toast } from "sonner";

import { ProductCard } from "@/components/common/ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { useWishlistStore } from "@/store/wishlistStore";

import "@/components/animations/css/wishlist/wishlist.css";

export function WishlistPage() {
  const wishlistItems = useWishlistStore(
    (state) => state.items
  );

  const clearWishlist = useWishlistStore(
    (state) => state.clearWishlist
  );

  const {
    data: products = [],
    isLoading,
    isError,
  } = useProducts();

  const wishlistIds = new Set(
    wishlistItems.map((item) => item.id)
  );

  const wishlistProducts =
    products.filter((product) =>
      wishlistIds.has(product.id)
    );

  const handleClearWishlist = () => {
    clearWishlist();

    toast.info(
      "Wishlist cleared",
      {
        description:
          "All saved products have been removed from your wishlist.",
      }
    );
  };

  if (
    wishlistItems.length === 0
  ) {
    return (
      <section className="sth-wishlist">
        <div className="sth-wishlist__container">
          <div className="sth-wishlist__breadcrumb">
            <Link href="/">
              Home
            </Link>

            <span>/</span>

            <strong>
              Wishlist
            </strong>
          </div>

          <div className="sth-wishlist__empty">
            <span className="sth-wishlist__empty-icon">
              <Heart
                size={30}
                strokeWidth={1.7}
              />
            </span>

            <h1>
              Your Wishlist is Empty
            </h1>

            <p>
              Save your favorite
              solar products and
              easily find them later.
            </p>

            <Link
              href="/shop"
              className="sth-wishlist__shop-button"
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
    <section className="sth-wishlist">
      <div className="sth-wishlist__decor sth-wishlist__decor--left" />
      <div className="sth-wishlist__decor sth-wishlist__decor--right" />

      <div className="sth-wishlist__container">
        <div className="sth-wishlist__breadcrumb">
          <Link href="/">
            Home
          </Link>

          <span>›</span>

          <strong>
            Wishlist
          </strong>
        </div>

        <div className="sth-wishlist__header">
          <div className="sth-wishlist__heading">
            <Link
              href="/shop"
              className="sth-wishlist__back"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.8}
              />

              Back to Shop
            </Link>

            <h1 className="sth-wishlist__title">
              <span className="sth-wishlist__title-orange">
                My
              </span>{" "}
              <span className="sth-wishlist__title-purple">
                Wishlist
              </span>
            </h1>

            <p className="sth-wishlist__count">
              {wishlistItems.length}{" "}
              {wishlistItems.length === 1
                ? "saved product"
                : "saved products"}
            </p>
          </div>

          <button
            type="button"
            className="sth-wishlist__clear"
            onClick={
              handleClearWishlist
            }
          >
            <Trash2
              size={15}
              strokeWidth={1.8}
            />

            Clear Wishlist
          </button>
        </div>

        {isLoading && (
          <div className="sth-wishlist__grid">
            {Array.from({
              length:
                Math.min(
                  wishlistItems.length,
                  4
                ),
            }).map(
              (_, index) => (
                <div
                  key={index}
                  className="sth-wishlist__skeleton"
                >
                  <div className="sth-wishlist__skeleton-image" />

                  <div className="sth-wishlist__skeleton-body">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {isError && (
          <div className="sth-wishlist__state">
            <strong>
              Unable to load wishlist products
            </strong>

            <span>
              Please try again in a
              moment.
            </span>
          </div>
        )}

        {!isLoading &&
          !isError && (
            <div className="sth-wishlist__grid">
              {wishlistProducts.map(
                (product) => (
                  <ProductCard
                    key={
                      product.id
                    }
                    id={
                      product.id
                    }
                    slug={
                      product.slug
                    }
                    name={
                      product.name
                    }
                    href={`/products/${product.slug}`}
                    image={
                      product.image
                    }
                    category={
                      product.category
                    }
                    brand={
                      product.brand
                    }
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
          )}

        <div className="sth-wishlist__footer-strip">
          <div className="sth-wishlist__footer-message">
            <Heart
              size={18}
              strokeWidth={1.8}
            />

            <span>
              Save your favorite
              products and easily
              find them later.
            </span>
          </div>

          <Link
            href="/shop"
            className="sth-wishlist__explore"
          >
            <ShoppingBag
              size={17}
              strokeWidth={1.8}
            />

            <span>
              Explore More Products
            </span>

            <span
              aria-hidden="true"
              className="sth-wishlist__explore-arrow"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}