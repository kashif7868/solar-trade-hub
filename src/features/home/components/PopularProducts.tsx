"use client";

import Link from "next/link";

import { ProductCard } from "@/components/common/ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";

export function PopularProducts() {
  const {
    data: products,
    isLoading,
    isError,
  } = useProducts();

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ED2436]">
              Trending Now
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#07143D] sm:text-3xl">
              Popular Products
            </h2>

            <p className="mt-2 max-w-[620px] text-sm leading-6 text-slate-500">
              Explore popular solar products selected from major categories
              including panels, inverters, batteries and accessories.
            </p>
          </div>

          <Link
            href="/shop"
            className="hidden text-sm font-semibold text-[#07143D] transition-colors hover:text-[#ED2436] sm:inline-flex"
          >
            View All Products
          </Link>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-[390px] animate-pulse rounded-xl border border-slate-200 bg-slate-100"
              />
            ))}
          </div>
        )}

        {isError && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-6 text-sm text-red-700">
            Unable to load products right now.
          </div>
        )}

        {!isLoading && !isError && products && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                href={product.href}
                image={product.image}
                brand={product.brand}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
                badge={product.badge}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}