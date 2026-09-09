import type { ReactNode } from "react";

import "@/components/animations/css/category/category-product-grid.css";

interface CategoryProductGridProps {
  children?: ReactNode;
  isLoading?: boolean;
}

export function CategoryProductGrid({
  children,
  isLoading = false,
}: CategoryProductGridProps) {
  if (isLoading) {
    return (
      <div className="sth-category-product-grid">
        {Array.from({
          length: 6,
        }).map((_, index) => (
          <div
            key={index}
            className="sth-category-product-grid__skeleton"
          >
            <div className="sth-category-product-grid__skeleton-image" />

            <div className="sth-category-product-grid__skeleton-body">
              <span className="sth-category-product-grid__skeleton-line sth-category-product-grid__skeleton-line--short" />

              <span className="sth-category-product-grid__skeleton-line sth-category-product-grid__skeleton-line--title" />

              <span className="sth-category-product-grid__skeleton-line sth-category-product-grid__skeleton-line--medium" />

              <span className="sth-category-product-grid__skeleton-line sth-category-product-grid__skeleton-line--price" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="sth-category-product-grid">
      {children}
    </div>
  );
}