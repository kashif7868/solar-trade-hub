"use client";

import { useMemo } from "react";

import {
  RotateCcw,
  Star,
} from "lucide-react";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { useProducts } from "@/hooks/useProducts";
import { useShopStore } from "@/store/shopStore";

import "@/components/animations/css/shop/shop-filters.css";

export function ShopFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    data: products = [],
  } = useProducts();

  const {
    category,
    brand,
    minPrice,
    maxPrice,
    minRating,

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

  const categoryCounts =
    useMemo(() => {
      return products.reduce<
        Record<string, number>
      >((counts, product) => {
        counts[product.category] =
          (counts[
            product.category
          ] ?? 0) + 1;

        return counts;
      }, {});
    }, [products]);

  const brandCounts =
    useMemo(() => {
      return products.reduce<
        Record<string, number>
      >((counts, product) => {
        counts[product.brand] =
          (counts[
            product.brand
          ] ?? 0) + 1;

        return counts;
      }, {});
    }, [products]);

  const formatPrice = (
    value: number
  ) =>
    new Intl.NumberFormat(
      "en-PK"
    ).format(value);

  const handleResetFilters = () => {
    resetFilters();

    /*
     * Important:
     * Product search belongs to the
     * main header, not sidebar filters.
     *
     * So Reset Filters should NOT remove
     * the active ?search= query.
     */
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

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

  const handleMinPriceChange = (
    value: number
  ) => {
    const safeValue = Math.max(
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
    const safeValue = Math.max(
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

      {/* HEADER */}
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
          onClick={
            handleResetFilters
          }
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

      {/* CATEGORIES */}
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
                  {categoryCounts[
                    item
                  ] ?? 0}
                </span>
              </button>
            )
          )}
        </div>
      </div>

      <div className="sth-shop-filters__divider" />

      {/* BRANDS */}
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
                  {brandCounts[
                    item
                  ] ?? 0}
                </span>
              </button>
            )
          )}
        </div>
      </div>

      <div className="sth-shop-filters__divider" />

      {/* PRICE */}
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
            Rs.{" "}
            {formatPrice(
              minPrice
            )}
          </span>

          <span>
            Rs.{" "}
            {formatPrice(
              maxPrice
            )}
          </span>
        </div>
      </div>

      <div className="sth-shop-filters__divider" />

      {/* RATING */}
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
                  minRating ===
                  rating
                    ? "sth-shop-filters__rating--active"
                    : ""
                }`}
                onClick={() =>
                  setMinRating(
                    minRating ===
                      rating
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
                    (
                      _,
                      index
                    ) => (
                      <Star
                        key={
                          index
                        }
                        size={
                          12
                        }
                        strokeWidth={
                          1.4
                        }
                        fill={
                          index <
                          rating
                            ? "currentColor"
                            : "none"
                        }
                      />
                    )
                  )}
                </span>

                <span className="sth-shop-filters__rating-text">
                  {rating}.0
                  & up
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}