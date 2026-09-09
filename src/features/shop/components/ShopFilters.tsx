"use client";

import { useMemo } from "react";

import {
  RotateCcw,
  Search,
  Star,
} from "lucide-react";

import { useProducts } from "@/hooks/useProducts";
import { useShopStore } from "@/store/shopStore";

import "@/components/animations/css/shop/shop-filters.css";

export function ShopFilters() {
  const {
    data: products = [],
  } = useProducts();

  const {
    search,
    category,
    brand,
    minPrice,
    maxPrice,
    minRating,

    setSearch,
    setCategory,
    setBrand,
    setMinPrice,
    setMaxPrice,
    setMinRating,
    resetFilters,
  } = useShopStore();

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          products
            .map(
              (product) =>
                product.category
            )
            .filter(Boolean)
        )
      ),
    [products]
  );

  const brands = useMemo(
    () =>
      Array.from(
        new Set(
          products
            .map(
              (product) =>
                product.brand
            )
            .filter(Boolean)
        )
      ),
    [products]
  );

  const categoryCounts = useMemo(() => {
    return products.reduce<
      Record<string, number>
    >((counts, product) => {
      counts[product.category] =
        (counts[product.category] ?? 0) + 1;

      return counts;
    }, {});
  }, [products]);

  const brandCounts = useMemo(() => {
    return products.reduce<
      Record<string, number>
    >((counts, product) => {
      counts[product.brand] =
        (counts[product.brand] ?? 0) + 1;

      return counts;
    }, {});
  }, [products]);

  const formatPrice = (
    value: number
  ) =>
    new Intl.NumberFormat(
      "en-PK"
    ).format(value);

  const handleMinPriceChange = (
    value: number
  ) => {
    const safeValue =
      Math.max(
        0,
        Math.min(
          value,
          maxPrice
        )
      );

    setMinPrice(safeValue);
  };

  const handleMaxPriceChange = (
    value: number
  ) => {
    const safeValue =
      Math.max(
        minPrice,
        Math.min(
          value,
          1000000
        )
      );

    setMaxPrice(safeValue);
  };

  return (
    <div className="sth-shop-filters">
      <div className="sth-shop-filters__header">
        <div>
          <span className="sth-shop-filters__eyebrow">
            Refine Results
          </span>

          <h2 className="sth-shop-filters__title">
            Filters
          </h2>
        </div>

        <button
          type="button"
          className="sth-shop-filters__reset"
          onClick={resetFilters}
        >
          <RotateCcw
            size={13}
            strokeWidth={1.8}
          />

          <span>
            Reset
          </span>
        </button>
      </div>

      <div className="sth-shop-filters__section">
        <span className="sth-shop-filters__label">
          Search Products
        </span>

        <label className="sth-shop-filters__search">
          <Search
            size={15}
            strokeWidth={1.8}
          />

          <input
            type="search"
            placeholder="Search by name, brand, SKU..."
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
          />
        </label>
      </div>

      <div className="sth-shop-filters__divider" />

      <div className="sth-shop-filters__section">
        <span className="sth-shop-filters__label">
          Categories
        </span>

        <div className="sth-shop-filters__option-list">
          <button
            type="button"
            className={`sth-shop-filters__row ${
              category === "all"
                ? "sth-shop-filters__row--active"
                : ""
            }`}
            onClick={() =>
              setCategory("all")
            }
          >
            <span className="sth-shop-filters__radio" />

            <span className="sth-shop-filters__row-name">
              All Categories
            </span>

            <span className="sth-shop-filters__count">
              {products.length}
            </span>
          </button>

          {categories.map(
            (item) => (
              <button
                key={item}
                type="button"
                className={`sth-shop-filters__row ${
                  category === item
                    ? "sth-shop-filters__row--active"
                    : ""
                }`}
                onClick={() =>
                  setCategory(item)
                }
              >
                <span className="sth-shop-filters__radio" />

                <span className="sth-shop-filters__row-name">
                  {item}
                </span>

                <span className="sth-shop-filters__count">
                  {categoryCounts[item] ?? 0}
                </span>
              </button>
            )
          )}
        </div>
      </div>

      <div className="sth-shop-filters__divider" />

      <div className="sth-shop-filters__section">
        <span className="sth-shop-filters__label">
          Brands
        </span>

        <div className="sth-shop-filters__option-list">
          <button
            type="button"
            className={`sth-shop-filters__row ${
              brand === "all"
                ? "sth-shop-filters__row--active"
                : ""
            }`}
            onClick={() =>
              setBrand("all")
            }
          >
            <span className="sth-shop-filters__checkbox" />

            <span className="sth-shop-filters__row-name">
              All Brands
            </span>

            <span className="sth-shop-filters__count">
              {products.length}
            </span>
          </button>

          {brands.map(
            (item) => (
              <button
                key={item}
                type="button"
                className={`sth-shop-filters__row ${
                  brand === item
                    ? "sth-shop-filters__row--active"
                    : ""
                }`}
                onClick={() =>
                  setBrand(item)
                }
              >
                <span className="sth-shop-filters__checkbox" />

                <span className="sth-shop-filters__row-name">
                  {item}
                </span>

                <span className="sth-shop-filters__count">
                  {brandCounts[item] ?? 0}
                </span>
              </button>
            )
          )}
        </div>
      </div>

      <div className="sth-shop-filters__divider" />

      <div className="sth-shop-filters__section">
        <span className="sth-shop-filters__label">
          Price Range
        </span>

        <div className="sth-shop-filters__price-grid">
          <label>
            <span>
              Min
            </span>

            <input
              type="number"
              min={0}
              max={maxPrice}
              value={minPrice}
              onChange={(event) =>
                handleMinPriceChange(
                  Number(
                    event.target.value
                  )
                )
              }
            />
          </label>

          <label>
            <span>
              Max
            </span>

            <input
              type="number"
              min={minPrice}
              max={1000000}
              value={maxPrice}
              onChange={(event) =>
                handleMaxPriceChange(
                  Number(
                    event.target.value
                  )
                )
              }
            />
          </label>
        </div>

        <input
          className="sth-shop-filters__range"
          type="range"
          min={0}
          max={1000000}
          step={10000}
          value={maxPrice}
          onChange={(event) =>
            handleMaxPriceChange(
              Number(
                event.target.value
              )
            )
          }
        />

        <div className="sth-shop-filters__price-values">
          <span>
            Rs. {formatPrice(minPrice)}
          </span>

          <span>
            Rs. {formatPrice(maxPrice)}
          </span>
        </div>
      </div>

      <div className="sth-shop-filters__divider" />

      <div className="sth-shop-filters__section">
        <span className="sth-shop-filters__label">
          Minimum Rating
        </span>

        <div className="sth-shop-filters__ratings">
          {[4, 3, 2, 1].map(
            (rating) => (
              <button
                key={rating}
                type="button"
                className={`sth-shop-filters__rating ${
                  minRating === rating
                    ? "sth-shop-filters__rating--active"
                    : ""
                }`}
                onClick={() =>
                  setMinRating(
                    minRating === rating
                      ? 0
                      : rating
                  )
                }
              >
                <span className="sth-shop-filters__rating-check" />

                <span className="sth-shop-filters__rating-stars">
                  {Array.from({
                    length: 5,
                  }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={12}
                        strokeWidth={1.4}
                        fill={
                          index < rating
                            ? "currentColor"
                            : "none"
                        }
                      />
                    )
                  )}
                </span>

                <span className="sth-shop-filters__rating-text">
                  {rating}.0 & up
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}