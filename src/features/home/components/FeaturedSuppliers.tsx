import Link from "next/link";
import {
  BadgeCheck,
  MapPin,
  Star,
  Store,
} from "lucide-react";

const suppliers = [
  {
    id: 1,
    name: "Solar Trade Hub Partner",
    city: "Lahore",
    rating: 4.9,
    products: 120,
    verified: true,
  },
  {
    id: 2,
    name: "Energy Solutions Pakistan",
    city: "Islamabad",
    rating: 4.8,
    products: 85,
    verified: true,
  },
  {
    id: 3,
    name: "Green Power Technologies",
    city: "Karachi",
    rating: 4.7,
    products: 96,
    verified: true,
  },
  {
    id: 4,
    name: "Prime Solar Distribution",
    city: "Rawalpindi",
    rating: 4.8,
    products: 74,
    verified: true,
  },
];

export function FeaturedSuppliers() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ED2436]">
              Marketplace Partners
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#07143D] sm:text-3xl">
              Featured Suppliers
            </h2>

            <p className="mt-2 max-w-[640px] text-sm leading-6 text-slate-500">
              Discover verified suppliers offering solar products and
              solutions across major cities in Pakistan.
            </p>
          </div>

          <Link
            href="/suppliers"
            className="hidden text-sm font-semibold text-[#07143D] transition-colors hover:text-[#ED2436] sm:inline-flex"
          >
            View All Suppliers
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {suppliers.map((supplier) => (
            <article
              key={supplier.id}
              className="
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#ED2436]/30
                hover:shadow-lg
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-xl
                    bg-[#07143D]
                    text-white
                  "
                >
                  <Store className="h-5 w-5" />
                </div>

                {supplier.verified && (
                  <span
                    className="
                      inline-flex items-center gap-1
                      rounded-full
                      bg-emerald-50
                      px-2.5 py-1
                      text-[11px]
                      font-semibold
                      text-emerald-700
                    "
                  >
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {supplier.name}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-[#ED2436]" />
                {supplier.city}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

                  <span className="text-sm font-semibold text-slate-800">
                    {supplier.rating}
                  </span>
                </div>

                <span className="text-xs text-slate-500">
                  {supplier.products} Products
                </span>
              </div>

              <Link
                href={`/suppliers/${supplier.id}`}
                className="
                  mt-5
                  inline-flex h-10 w-full
                  items-center justify-center
                  rounded-md
                  border border-[#07143D]
                  text-sm font-semibold
                  text-[#07143D]
                  transition-colors
                  hover:bg-[#07143D]
                  hover:text-white
                "
              >
                View Supplier
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}