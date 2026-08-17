import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Minus,
} from "lucide-react";

const solarPrices = [
  {
    id: 1,
    category: "Solar Panel",
    product: "Jinko N-Type",
    specification: "High Efficiency Module",
    price: "Rs. 29,900",
    change: "-1.8%",
    trend: "down",
  },
  {
    id: 2,
    category: "Solar Panel",
    product: "JA Solar",
    specification: "Mono N-Type",
    price: "Rs. 28,750",
    change: "-0.9%",
    trend: "down",
  },
  {
    id: 3,
    category: "Hybrid Inverter",
    product: "Solis",
    specification: "12kW Hybrid",
    price: "Rs. 545,000",
    change: "+1.2%",
    trend: "up",
  },
  {
    id: 4,
    category: "Lithium Battery",
    product: "KNOX",
    specification: "16kWh LiFePO4",
    price: "Rs. 598,000",
    change: "0.0%",
    trend: "same",
  },
];

export function SolarPricesSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ED2436]">
              Market Watch
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#07143D] sm:text-3xl">
              Latest Solar Prices
            </h2>

            <p className="mt-2 max-w-[650px] text-sm leading-6 text-slate-500">
              Track indicative market prices for popular solar panels,
              inverters, batteries and related equipment.
            </p>
          </div>

          <Link
            href="/solar-prices"
            className="hidden items-center gap-2 text-sm font-semibold text-[#07143D] transition-colors hover:text-[#ED2436] sm:inline-flex"
          >
            View All Prices
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-[1.1fr_1.5fr_1.4fr_1fr_0.7fr] gap-4 bg-[#07143D] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-white md:grid">
            <span>Category</span>
            <span>Product</span>
            <span>Specification</span>
            <span>Price</span>
            <span>Change</span>
          </div>

          {solarPrices.map((item, index) => (
            <div
              key={item.id}
              className={`
                grid gap-3 px-5 py-5
                md:grid-cols-[1.1fr_1.5fr_1.4fr_1fr_0.7fr]
                md:items-center md:gap-4 md:px-6
                ${
                  index !== solarPrices.length - 1
                    ? "border-b border-slate-100"
                    : ""
                }
              `}
            >
              <div>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400 md:hidden">
                  Category
                </span>

                <span className="text-sm font-medium text-slate-600">
                  {item.category}
                </span>
              </div>

              <div>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400 md:hidden">
                  Product
                </span>

                <span className="text-sm font-semibold text-slate-900">
                  {item.product}
                </span>
              </div>

              <div>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400 md:hidden">
                  Specification
                </span>

                <span className="text-sm text-slate-500">
                  {item.specification}
                </span>
              </div>

              <div>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400 md:hidden">
                  Price
                </span>

                <span className="text-sm font-bold text-[#07143D]">
                  {item.price}
                </span>
              </div>

              <div>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400 md:hidden">
                  Change
                </span>

                <span
                  className={`
                    inline-flex items-center gap-1
                    text-sm font-semibold
                    ${
                      item.trend === "up"
                        ? "text-emerald-600"
                        : item.trend === "down"
                        ? "text-[#ED2436]"
                        : "text-slate-500"
                    }
                  `}
                >
                  {item.trend === "up" && (
                    <ArrowUpRight className="h-4 w-4" />
                  )}

                  {item.trend === "down" && (
                    <ArrowDownRight className="h-4 w-4" />
                  )}

                  {item.trend === "same" && (
                    <Minus className="h-4 w-4" />
                  )}

                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Indicative marketplace prices. Final supplier quotations may vary.
          </p>

          <Link
            href="/solar-prices"
            className="inline-flex shrink-0 items-center gap-1 font-semibold text-[#07143D] sm:hidden"
          >
            All Prices
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}