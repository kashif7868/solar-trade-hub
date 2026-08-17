import Link from "next/link";

import { BrandCard } from "@/components/common/BrandCard/BrandCard";
import { featuredBrands } from "@/data/brandData";

export function FeaturedBrands() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ED2436]">
              Trusted Manufacturers
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#07143D] sm:text-3xl">
              Featured Brands
            </h2>

            <p className="mt-2 max-w-[620px] text-sm leading-6 text-slate-500">
              Explore leading solar technology brands available through
              Solar Trade Hub.
            </p>
          </div>

          <Link
            href="/brands"
            className="hidden text-sm font-semibold text-[#07143D] transition-colors hover:text-[#ED2436] sm:inline-flex"
          >
            View All Brands
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {featuredBrands.map((brand) => (
            <BrandCard
              key={brand.id}
              name={brand.name}
              href={brand.href}
              logo={brand.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}