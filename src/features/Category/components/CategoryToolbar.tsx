"use client";

import { ArrowDownAZ } from "lucide-react";

import "@/components/animations/css/category/category-toolbar.css";

interface CategoryToolbarProps {
  categoryTitle: string;
  totalProducts: number;
}

export function CategoryToolbar({
  categoryTitle,
  totalProducts,
}: CategoryToolbarProps) {
  return (
    <div className="sth-category-toolbar">
      <div className="sth-category-toolbar__summary">
        <strong>
          {categoryTitle}
        </strong>

        <span>
          {totalProducts}{" "}
          {totalProducts === 1
            ? "product found"
            : "products found"}
        </span>
      </div>

      <div className="sth-category-toolbar__sort">
        <ArrowDownAZ
          size={15}
          strokeWidth={1.8}
        />

        <span>
          Sort by
        </span>

        <select
          defaultValue="featured"
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

          <option value="name">
            Name: A to Z
          </option>
        </select>
      </div>
    </div>
  );
}