import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  PanelsTopLeft,
} from "lucide-react";

export function PromoBanners() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl bg-[#07143D] px-6 py-8 text-white sm:px-8 lg:min-h-[260px] lg:px-10 lg:py-10">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#ED2436]/20 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                  <PanelsTopLeft className="h-4 w-4 text-[#ED2436]" />
                  Solar Panels
                </span>

                <h3 className="mt-5 max-w-[420px] text-2xl font-bold leading-tight sm:text-3xl">
                  High-Efficiency Solar Panels for Every Project
                </h3>

                <p className="mt-3 max-w-[470px] text-sm leading-6 text-white/65">
                  Explore trusted panel brands for residential,
                  commercial and industrial solar installations.
                </p>
              </div>

              <div className="mt-7">
                <Link
                  href="/shop/solar-panels"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-[#ED2436] px-4 text-sm font-semibold transition-colors hover:bg-[#C91828]"
                >
                  Shop Solar Panels
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ED2436] to-[#B91325] px-6 py-8 text-white sm:px-8 lg:min-h-[260px] lg:px-10 lg:py-10">
            <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-[#07143D]/25 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/15 px-3 py-1.5 text-xs font-semibold text-white">
                  <BatteryCharging className="h-4 w-4" />
                  Hybrid & ESS
                </span>

                <h3 className="mt-5 max-w-[420px] text-2xl font-bold leading-tight sm:text-3xl">
                  Power Your Home With Smart Energy Storage
                </h3>

                <p className="mt-3 max-w-[470px] text-sm leading-6 text-white/80">
                  Compare hybrid inverters, lithium batteries and complete
                  energy storage solutions.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/shop/hybrid-inverters"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-[#07143D] transition-colors hover:bg-slate-100"
                >
                  Shop Inverters
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/shop/batteries-ess"
                  className="inline-flex h-11 items-center rounded-md border border-white/25 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Batteries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}