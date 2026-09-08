"use client";

import { useMemo } from "react";

import { useProducts } from "@/hooks/useProducts";
import { useShopStore } from "@/store/shopStore";

import { ShopHeader } from "./components/ShopHeader";
import { ShopFilters } from "./components/ShopFilters";
import { ShopToolbar } from "./components/ShopToolbar";
import { ShopProductGrid } from "./components/ShopProductGrid";

import "@/components/animations/css/shop/shop-page.css";

export function ShopPage() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useProducts();

  const {
    search,
    category,
    brand,
    minPrice,
    maxPrice,
    minRating,
  } = useShopStore();

  const filteredCount = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    return products.filter(
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
    ).length;
  }, [
    products,
    search,
    category,
    brand,
    minPrice,
    maxPrice,
    minRating,
  ]);

  return (
    <section className="sth-shop">
      <div className="sth-shop__container">
        <ShopHeader />

        <div className="sth-shop__layout">
          <aside className="sth-shop__sidebar">
            <ShopFilters />
          </aside>

          <main className="sth-shop__content">
            <ShopToolbar
              totalProducts={
                filteredCount
              }
            />

            <ShopProductGrid
              products={products}
              isLoading={isLoading}
              isError={isError}
            />
          </main>
        </div>
      </div>
    </section>
  );
}