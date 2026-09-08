"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  } = useShopStore();

  const [currentPage, setCurrentPage] =
    useState(1);

  /*
   * Filter + sort products
   */
  const filteredProducts = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    const filtered = products.filter(
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
          product.category === category;

        const matchesBrand =
          brand === "all" ||
          product.brand === brand;

        const matchesPrice =
          product.price >= minPrice &&
          product.price <= maxPrice;

        const matchesRating =
          minRating === 0 ||
          product.rating >= minRating;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesBrand &&
          matchesPrice &&
          matchesRating
        );
      }
    );

    return [...filtered].sort(
      (a, b) => {
        switch (sortBy) {
          case "price-low-high":
            return a.price - b.price;

          case "price-high-low":
            return b.price - a.price;

          case "rating":
            return b.rating - a.rating;

          case "newest":
            return b.id - a.id;

          case "featured":
          default:
            return 0;
        }
      }
    );
  }, [
    products,
    search,
    category,
    brand,
    minPrice,
    maxPrice,
    minRating,
    sortBy,
  ]);

  /*
   * Reset pagination whenever
   * filters or sorting change
   */
  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    category,
    brand,
    minPrice,
    maxPrice,
    minRating,
    sortBy,
  ]);

  /*
   * Pagination calculations
   */
  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredProducts.length /
        PRODUCTS_PER_PAGE
    )
  );

  const safeCurrentPage = Math.min(
    currentPage,
    totalPages
  );

  const startIndex =
    (safeCurrentPage - 1) *
    PRODUCTS_PER_PAGE;

  const endIndex = Math.min(
    startIndex + PRODUCTS_PER_PAGE,
    filteredProducts.length
  );

  const paginatedProducts =
    filteredProducts.slice(
      startIndex,
      endIndex
    );

  const handlePageChange = (
    page: number
  ) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === safeCurrentPage
    ) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  /*
   * Loading
   */
  if (isLoading) {
    return (
      <div className="sth-shop-grid">
        {Array.from({
          length: PRODUCTS_PER_PAGE,
        }).map((_, index) => (
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
        ))}
      </div>
    );
  }

  /*
   * API error
   */
  if (isError) {
    return (
      <div className="sth-shop-grid__state">
        <strong>
          Unable to load products
        </strong>

        <span>
          Please make sure the product
          API is running.
        </span>
      </div>
    );
  }

  /*
   * Empty filters result
   */
  if (
    filteredProducts.length === 0
  ) {
    return (
      <div className="sth-shop-grid__state">
        <strong>
          No products found
        </strong>

        <span>
          Try changing your search,
          category, brand, price or
          rating filters.
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="sth-shop-grid">
        {paginatedProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
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
              rating={product.rating}
              reviewCount={
                product.reviewCount
              }
              badge={product.badge}
              sku={product.sku}
            />
          )
        )}
      </div>

      <div className="sth-shop-grid__footer">
        <p className="sth-shop-grid__results">
          Showing{" "}
          <strong>
            {startIndex + 1}
          </strong>
          {" – "}
          <strong>
            {endIndex}
          </strong>{" "}
          of{" "}
          <strong>
            {filteredProducts.length}
          </strong>{" "}
          products
        </p>

        {totalPages > 1 && (
          <nav
            className="sth-shop-grid__pagination"
            aria-label="Shop pagination"
          >
            <button
              type="button"
              aria-label="Previous page"
              disabled={
                safeCurrentPage === 1
              }
              onClick={() =>
                handlePageChange(
                  safeCurrentPage - 1
                )
              }
            >
              <ChevronLeft
                size={16}
                strokeWidth={1.8}
              />
            </button>

            {Array.from({
              length: totalPages,
            }).map((_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  type="button"
                  aria-label={`Go to page ${page}`}
                  aria-current={
                    page ===
                    safeCurrentPage
                      ? "page"
                      : undefined
                  }
                  className={
                    page ===
                    safeCurrentPage
                      ? "sth-shop-grid__page sth-shop-grid__page--active"
                      : "sth-shop-grid__page"
                  }
                  onClick={() =>
                    handlePageChange(
                      page
                    )
                  }
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              aria-label="Next page"
              disabled={
                safeCurrentPage ===
                totalPages
              }
              onClick={() =>
                handlePageChange(
                  safeCurrentPage + 1
                )
              }
            >
              <ChevronRight
                size={16}
                strokeWidth={1.8}
              />
            </button>
          </nav>
        )}
      </div>
    </>
  );
}