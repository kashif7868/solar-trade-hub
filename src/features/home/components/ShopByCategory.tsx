import Link from "next/link";

import { CategoryCard } from "@/components/common/CategoryCard/CategoryCard";
import { homeCategories } from "@/data/categoryData";

export function ShopByCategory() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ED2436]">
              Browse Products
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#07143D] sm:text-3xl">
              Shop By Category
            </h2>

            <p className="mt-2 max-w-[620px] text-sm leading-6 text-slate-500">
              Explore solar products across major categories for residential,
              commercial, and industrial requirements.
            </p>
          </div>

          <Link
            href="/shop"
            className="hidden text-sm font-semibold text-[#07143D] transition-colors hover:text-[#ED2436] sm:inline-flex"
          >
            View All Categories
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {homeCategories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              href={category.href}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}