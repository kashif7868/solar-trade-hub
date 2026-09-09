import Link from "next/link";
import {
  CircleAlert,
  PackageSearch,
  RotateCcw,
} from "lucide-react";

import "@/components/animations/css/category/category-empty-state.css";

interface CategoryEmptyStateProps {
  type: "empty" | "error";
  categoryTitle?: string;
}

export function CategoryEmptyState({
  type,
  categoryTitle,
}: CategoryEmptyStateProps) {
  if (type === "error") {
    return (
      <div className="sth-category-empty-state">
        <div className="sth-category-empty-state__icon sth-category-empty-state__icon--error">
          <CircleAlert
            size={28}
            strokeWidth={1.6}
          />
        </div>

        <div className="sth-category-empty-state__content">
          <strong>
            Unable to load products
          </strong>

          <p>
            We could not load the marketplace products at the moment.
          </p>
        </div>

        <button
          type="button"
          className="sth-category-empty-state__button"
          onClick={() =>
            window.location.reload()
          }
        >
          <RotateCcw
            size={14}
            strokeWidth={1.8}
          />

          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="sth-category-empty-state">
      <div className="sth-category-empty-state__icon">
        <PackageSearch
          size={30}
          strokeWidth={1.6}
        />
      </div>

      <div className="sth-category-empty-state__content">
        <strong>
          No products available yet
        </strong>

        <p>
          {categoryTitle
            ? `There are currently no products listed under ${categoryTitle}.`
            : "There are currently no products available in this category."}
        </p>
      </div>

      <Link
        href="/shop"
        className="sth-category-empty-state__button"
      >
        Explore Marketplace
      </Link>
    </div>
  );
}