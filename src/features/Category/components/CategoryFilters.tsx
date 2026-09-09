"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import type { Product } from "@/types/product";

import "@/components/animations/css/category/category-filters.css";

interface CategoryFiltersProps {
  products: Product[];
}

export function CategoryFilters({
  products,
}: CategoryFiltersProps) {
  const brands = Array.from(
    new Set(
      products
        .map((product) => product.brand)
        .filter(Boolean)
    )
  );

  return (
    <div className="sth-category-filters">
      <div className="sth-category-filters__header">
        <div className="sth-category-filters__header-icon">
          <SlidersHorizontal
            size={16}
            strokeWidth={1.9}
          />
        </div>

        <div>
          <strong>
            Refine Results
          </strong>

          <span>
            Find the right product
          </span>
        </div>
      </div>

      <div className="sth-category-filters__section">
        <span className="sth-category-filters__label">
          Search
        </span>

        <div className="sth-category-filters__search">
          <Search
            size={15}
            strokeWidth={1.8}
          />

          <input
            type="text"
            placeholder="Search products..."
          />
        </div>
      </div>

      <div className="sth-category-filters__divider" />

      <div className="sth-category-filters__section">
        <span className="sth-category-filters__label">
          Brands
        </span>

        <div className="sth-category-filters__options">
          {brands.length > 0 ? (
            brands.map((brand) => (
              <label
                key={brand}
                className="sth-category-filters__option"
              >
                <input
                  type="checkbox"
                  value={brand}
                />

                <span className="sth-category-filters__checkbox" />

                <span className="sth-category-filters__option-text">
                  {brand}
                </span>

                <span className="sth-category-filters__option-count">
                  {
                    products.filter(
                      (product) =>
                        product.brand ===
                        brand
                    ).length
                  }
                </span>
              </label>
            ))
          ) : (
            <span className="sth-category-filters__muted">
              No brands available
            </span>
          )}
        </div>
      </div>

      <div className="sth-category-filters__divider" />

      <div className="sth-category-filters__section">
        <span className="sth-category-filters__label">
          Price Range
        </span>

        <div className="sth-category-filters__price-row">
          <div className="sth-category-filters__price-field">
            <span>Rs</span>

            <input
              type="number"
              placeholder="Min"
            />
          </div>

          <span className="sth-category-filters__price-separator">
            —
          </span>

          <div className="sth-category-filters__price-field">
            <span>Rs</span>

            <input
              type="number"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      <div className="sth-category-filters__divider" />

      <div className="sth-category-filters__section">
        <span className="sth-category-filters__label">
          Rating
        </span>

        <div className="sth-category-filters__options">
          {[4, 3, 2].map((rating) => (
            <label
              key={rating}
              className="sth-category-filters__option"
            >
              <input
                type="radio"
                name="category-rating"
                value={rating}
              />

              <span className="sth-category-filters__radio" />

              <span className="sth-category-filters__rating">
                <strong>
                  {rating}.0+
                </strong>

                <span>
                  ★
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="sth-category-filters__divider" />

      <div className="sth-category-filters__section">
        <span className="sth-category-filters__label">
          Availability
        </span>

        <div className="sth-category-filters__options">
          <label className="sth-category-filters__option">
            <input
              type="checkbox"
              value="in-stock"
            />

            <span className="sth-category-filters__checkbox" />

            <span className="sth-category-filters__option-text">
              In Stock
            </span>
          </label>

          <label className="sth-category-filters__option">
            <input
              type="checkbox"
              value="out-of-stock"
            />

            <span className="sth-category-filters__checkbox" />

            <span className="sth-category-filters__option-text">
              Out of Stock
            </span>
          </label>
        </div>
      </div>

      <button
        type="button"
        className="sth-category-filters__reset"
      >
        Reset Filters
      </button>
    </div>
  );
}