"use client";

import {
  ArrowDownAZ,
  Grid2X2,
  List,
  SlidersHorizontal,
  X,
} from "lucide-react";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { useShopStore } from "@/store/shopStore";

import { ShopFilters } from "./ShopFilters";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import "@/components/animations/css/shop/shop-toolbar.css";

interface ShopToolbarProps {
  totalProducts: number;
}

export function ShopToolbar({
  totalProducts,
}: ShopToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    sortBy,
    viewMode,
    setSortBy,
    setViewMode,
  } = useShopStore();

  const activeSearch =
    searchParams
      .get("search")
      ?.trim() ?? "";

  const handleClearSearch = () => {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    params.delete("search");

    const queryString =
      params.toString();

    router.replace(
      queryString
        ? `${pathname}?${queryString}`
        : pathname,
      {
        scroll: false,
      }
    );
  };

  return (
    <div className="sth-shop-toolbar">

      {/* RESULT SUMMARY */}
      <div className="sth-shop-toolbar__summary">
        <div className="sth-shop-toolbar__summary-copy">
          <strong>
            {totalProducts}{" "}
            {totalProducts === 1
              ? "Product"
              : "Products"}

            {activeSearch && (
              <>
                {" "}
                found for{" "}
                <span className="sth-shop-toolbar__query">
                  &ldquo;{activeSearch}&rdquo;
                </span>
              </>
            )}
          </strong>
        </div>

        {activeSearch && (
          <button
            type="button"
            className="sth-shop-toolbar__clear-search"
            aria-label="Clear product search"
            onClick={handleClearSearch}
          >
            <X
              size={13}
              strokeWidth={1.8}
            />

            <span>
              Clear
            </span>
          </button>
        )}

        {/* MOBILE FILTER */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="sth-shop-toolbar__mobile-filter"
              aria-label="Open shop filters"
            >
              <SlidersHorizontal
                size={14}
                strokeWidth={1.8}
              />

              <span>
                Filters
              </span>
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="sth-shop-filter-sheet"
          >
            <SheetHeader className="sth-shop-filter-sheet__header">
              <SheetTitle>
                Shop Filters
              </SheetTitle>
            </SheetHeader>

            <div className="sth-shop-filter-sheet__body">
              <ShopFilters />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* RIGHT CONTROLS */}
      <div className="sth-shop-toolbar__controls">

        {/* GRID / LIST */}
        <div className="sth-shop-toolbar__view-switcher">
          <button
            type="button"
            aria-label="Grid view"
            aria-pressed={viewMode === "grid"}
            className={`sth-shop-toolbar__view-button ${
              viewMode === "grid"
                ? "sth-shop-toolbar__view-button--active"
                : ""
            }`}
            onClick={() =>
              setViewMode("grid")
            }
          >
            <Grid2X2
              size={14}
              strokeWidth={1.8}
            />

            <span>
              Grid
            </span>
          </button>

          <button
            type="button"
            aria-label="List view"
            aria-pressed={viewMode === "list"}
            className={`sth-shop-toolbar__view-button ${
              viewMode === "list"
                ? "sth-shop-toolbar__view-button--active"
                : ""
            }`}
            onClick={() =>
              setViewMode("list")
            }
          >
            <List
              size={15}
              strokeWidth={1.8}
            />

            <span>
              List
            </span>
          </button>
        </div>

        {/* SORT */}
        <div className="sth-shop-toolbar__sort">
          <span className="sth-shop-toolbar__sort-label">
            <ArrowDownAZ
              size={14}
              strokeWidth={1.7}
            />

            <span>
              Sort by
            </span>
          </span>

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value
              )
            }
            className="sth-shop-toolbar__select"
            aria-label="Sort products"
          >
            <option value="featured">
              Featured
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="rating">
              Highest Rated
            </option>

            <option value="newest">
              Newest
            </option>
          </select>
        </div>

      </div>

    </div>
  );
}