"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { ProductCard } from "@/components/common/ProductCard/ProductCard";
import { useShopStore } from "@/store/shopStore";

import type { Product } from "@/types/product";
import "@/components/animations/css/shop/shop-product-grid.css";
interface ShopProductGridProps {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
}

const PRODUCTS_PER_PAGE = 6;

export function ShopProductGrid({
  products,
  isLoading,
  isError,
}: ShopProductGridProps) {
  const {
    search,
    category,
    brand,
    sortBy,
    minPrice,
    maxPrice,
    minRating,
    viewMode,
  } = useShopStore();

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const filteredProducts =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      const filtered =
        products.filter(
          (product) => {
            const matchesSearch =
              !query ||
              product.name
                .toLowerCase()
                .includes(query) ||
              product.brand
                .toLowerCase()
                .includes(query) ||
              product.category
                .toLowerCase()
                .includes(query) ||
              product.sku
                .toLowerCase()
                .includes(query) ||
              product.capacity
                .toLowerCase()
                .includes(query);

            const matchesCategory =
              category === "all" ||
              product.category ===
                category;

            const matchesBrand =
              brand === "all" ||
              product.brand ===
                brand;

            const matchesPrice =
              product.price >=
                minPrice &&
              product.price <=
                maxPrice;

            const matchesRating =
              minRating === 0 ||
              product.rating >=
                minRating;

            return (
              matchesSearch &&
              matchesCategory &&
              matchesBrand &&
              matchesPrice &&
              matchesRating
            );
          }
        );

      return [
        ...filtered,
      ].sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return (
              a.price -
              b.price
            );

          case "price-high":
            return (
              b.price -
              a.price
            );

          case "rating":
            return (
              b.rating -
              a.rating
            );

          case "newest":
            return (
              b.id -
              a.id
            );

          case "featured":
          default:
            return 0;
        }
      });
    }, [
      products,
      search,
      category,
      brand,
      sortBy,
      minPrice,
      maxPrice,
      minRating,
    ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    category,
    brand,
    sortBy,
    minPrice,
    maxPrice,
    minRating,
  ]);

  const totalPages =
    Math.ceil(
      filteredProducts.length /
        PRODUCTS_PER_PAGE
    );

  const safeCurrentPage =
    Math.min(
      currentPage,
      Math.max(
        totalPages,
        1
      )
    );

  const startIndex =
    (safeCurrentPage - 1) *
    PRODUCTS_PER_PAGE;

  const paginatedProducts =
    filteredProducts.slice(
      startIndex,
      startIndex +
        PRODUCTS_PER_PAGE
    );

  const handlePageChange = (
    page: number
  ) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return (
      <div
        className={`sth-shop-grid ${
          viewMode === "list"
            ? "sth-shop-grid--list"
            : ""
        }`}
      >
        {Array.from({
          length:
            PRODUCTS_PER_PAGE,
        }).map(
          (_, index) => (
            <div
              key={index}
              className="sth-shop-grid__skeleton"
            >
              <div className="sth-shop-grid__skeleton-image" />

              <div className="sth-shop-grid__skeleton-body">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          )
        )}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="sth-shop-grid__state">
        <strong>
          Unable to load products
        </strong>

        <span>
          Please try again in a moment.
        </span>
      </div>
    );
  }

  if (
    filteredProducts.length ===
    0
  ) {
    return (
      <div className="sth-shop-grid__state">
        <strong>
          No products found
        </strong>

        <span>
          Try changing your search
          or filters.
        </span>
      </div>
    );
  }

  return (
    <>
      <div
        className={`sth-shop-grid ${
          viewMode === "list"
            ? "sth-shop-grid--list"
            : ""
        }`}
      >
        {paginatedProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              slug={product.slug}
              name={product.name}
              href={`/products/${product.slug}`}
              image={product.image}
              category={product.category}
              brand={product.brand}
              description={
                product.description
              }
              price={product.price}
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
              sku={product.sku}
            />
          )
        )}
      </div>

      <div className="sth-shop-grid__footer">
        <p className="sth-shop-grid__results">
          Showing{" "}
          <strong>
            {startIndex + 1}–
            {Math.min(
              startIndex +
                PRODUCTS_PER_PAGE,
              filteredProducts.length
            )}
          </strong>{" "}
          of{" "}
          <strong>
            {
              filteredProducts.length
            }
          </strong>{" "}
          products
        </p>

        {totalPages > 1 && (
          <div className="sth-shop-grid__pagination">
            <button
              type="button"
              disabled={
                safeCurrentPage === 1
              }
              onClick={() =>
                handlePageChange(
                  safeCurrentPage -
                    1
                )
              }
              aria-label="Previous page"
            >
              ‹
            </button>

            {Array.from({
              length:
                totalPages,
            }).map(
              (_, index) => {
                const page =
                  index + 1;

                return (
                  <button
                    key={page}
                    type="button"
                    className={
                      page ===
                      safeCurrentPage
                        ? "sth-shop-grid__page--active"
                        : ""
                    }
                    onClick={() =>
                      handlePageChange(
                        page
                      )
                    }
                    aria-label={`Go to page ${page}`}
                    aria-current={
                      page ===
                      safeCurrentPage
                        ? "page"
                        : undefined
                    }
                  >
                    {page}
                  </button>
                );
              }
            )}

            <button
              type="button"
              disabled={
                safeCurrentPage ===
                totalPages
              }
              onClick={() =>
                handlePageChange(
                  safeCurrentPage +
                    1
                )
              }
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </>
  );
}