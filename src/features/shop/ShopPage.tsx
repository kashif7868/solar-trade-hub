"use client";

import {
  useEffect,
  useMemo,
} from "react";

import { useSearchParams } from "next/navigation";

import { useProducts } from "@/hooks/useProducts";
import { useShopStore } from "@/store/shopStore";

import { ShopHeader } from "./components/ShopHeader";
import { ShopFilters } from "./components/ShopFilters";
import { ShopToolbar } from "./components/ShopToolbar";
import { ShopProductGrid } from "./components/ShopProductGrid";

import "@/components/animations/css/shop/shop-page.css";

export function ShopPage() {
  const searchParams =
    useSearchParams();

  const urlSearch =
    searchParams.get("search") ?? "";

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
    setSearch,
  } = useShopStore();

  /*
   * Sync header/mobile URL search
   * with Shop Zustand search state.
   */
  useEffect(() => {
    if (search !== urlSearch) {
      setSearch(urlSearch);
    }
  }, [
    urlSearch,
    search,
    setSearch,
  ]);

  const filteredProducts =
    useMemo(() => {
      const query = search
        .trim()
        .toLowerCase();

      return products.filter(
        (product) => {
          const productName =
            product.name?.toLowerCase() ??
            "";

          const productBrand =
            product.brand?.toLowerCase() ??
            "";

          const productCategory =
            product.category?.toLowerCase() ??
            "";

          const productSku =
            product.sku?.toLowerCase() ??
            "";

          const productCapacity =
            product.capacity?.toLowerCase() ??
            "";

          const matchesSearch =
            !query ||
            productName.includes(query) ||
            productBrand.includes(query) ||
            productCategory.includes(query) ||
            productSku.includes(query) ||
            productCapacity.includes(query);

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
                filteredProducts.length
              }
            />

            <ShopProductGrid
              products={
                filteredProducts
              }
              isLoading={isLoading}
              isError={isError}
            />
          </main>
        </div>
      </div>
    </section>
  );
}