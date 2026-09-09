"use client";

import { useMemo } from "react";
import Link from "next/link";

import type { CategoryItem } from "@/data/categoryData";

import { useProducts } from "@/hooks/useProducts";

import { ProductCard } from "@/components/common/ProductCard/ProductCard";

import { CategoryHero } from "./components/CategoryHero";
import { CategoryFilters } from "./components/CategoryFilters";
import { CategoryToolbar } from "./components/CategoryToolbar";
import { CategoryProductGrid } from "./components/CategoryProductGrid";
import { CategoryEmptyState } from "./components/CategoryEmptyState";

import "@/components/animations/css/category/category-page.css";

interface CategoryPageProps {
  category: CategoryItem;
}

export function CategoryPage({
  category,
}: CategoryPageProps) {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useProducts();

  const categoryProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.category ===
        category.productCategory
    );
  }, [
    products,
    category.productCategory,
  ]);

  return (
    <section className="sth-category-page">
      <div className="sth-category-page__container">
        <div className="sth-category-page__breadcrumb">
          <Link href="/">
            Home
          </Link>

          <span>›</span>

          <Link href="/shop">
            Shop
          </Link>

          <span>›</span>

          <strong>
            {category.title}
          </strong>
        </div>

        <CategoryHero
          category={category}
          productCount={
            categoryProducts.length
          }
        />

        <div className="sth-category-page__layout">
          <aside className="sth-category-page__sidebar">
            <CategoryFilters
              products={
                categoryProducts
              }
            />
          </aside>

          <main className="sth-category-page__content">
            <CategoryToolbar
              categoryTitle={
                category.title
              }
              totalProducts={
                categoryProducts.length
              }
            />

            {isLoading && (
              <CategoryProductGrid
                isLoading
              />
            )}

            {isError && (
              <CategoryEmptyState
                type="error"
              />
            )}

            {!isLoading &&
              !isError &&
              categoryProducts.length >
                0 && (
                <CategoryProductGrid>
                  {categoryProducts.map(
                    (product) => (
                      <ProductCard
                        key={
                          product.id
                        }
                        id={
                          product.id
                        }
                        slug={
                          product.slug
                        }
                        name={
                          product.name
                        }
                        href={`/products/${product.slug}`}
                        image={
                          product.image
                        }
                        category={
                          product.category
                        }
                        brand={
                          product.brand
                        }
                        description={
                          product.description
                        }
                        price={
                          product.price
                        }
                        oldPrice={
                          product.oldPrice
                        }
                        rating={
                          product.rating
                        }
                        reviewCount={
                          product.reviewCount
                        }
                        badge={
                          product.badge
                        }
                        sku={
                          product.sku
                        }
                      />
                    )
                  )}
                </CategoryProductGrid>
              )}

            {!isLoading &&
              !isError &&
              categoryProducts.length ===
                0 && (
                <CategoryEmptyState
                  type="empty"
                  categoryTitle={
                    category.title
                  }
                />
              )}
          </main>
        </div>
      </div>
    </section>
  );
}