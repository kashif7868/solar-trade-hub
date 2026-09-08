"use client";

import {
  ArrowDownAZ,
  Grid2X2,
  List,
  SlidersHorizontal,
} from "lucide-react";

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
  const {
    sortBy,
    viewMode,
    setSortBy,
    setViewMode,
  } = useShopStore();

  return (
    <div className="sth-shop-toolbar">
      <div className="sth-shop-toolbar__summary">
        <span className="sth-shop-toolbar__summary-icon">
          <SlidersHorizontal
            size={16}
            strokeWidth={1.8}
          />
        </span>

        <div className="sth-shop-toolbar__summary-copy">
          <strong>
            {totalProducts} Products
          </strong>

          <span>
            Showing the best solar products for you
          </span>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="sth-shop-toolbar__mobile-filter"
            >
              <SlidersHorizontal
                size={14}
                strokeWidth={1.8}
              />

              Filters
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

      <div className="sth-shop-toolbar__controls">
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

            <span>Grid</span>
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

            <span>List</span>
          </button>
        </div>

        <div className="sth-shop-toolbar__sort">
          <span className="sth-shop-toolbar__sort-label">
            <ArrowDownAZ
              size={14}
              strokeWidth={1.8}
            />

            Sort by
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

            <option value="price-low-high">
              Price: Low to High
            </option>

            <option value="price-high-low">
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