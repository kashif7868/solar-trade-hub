import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Newspaper,
} from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Solar Market Trends in Pakistan",
    excerpt:
      "A quick look at changing solar product demand, pricing and technology adoption across the market.",
    href: "/news/solar-market-trends-pakistan",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    date: "August 2026",
    category: "Market",
  },
  {
    id: 2,
    title: "How to Choose the Right Hybrid Inverter",
    excerpt:
      "Key points to consider before selecting a hybrid inverter for residential or commercial solar systems.",
    href: "/news/how-to-choose-hybrid-inverter",
    image:
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=900&q=80",
    date: "August 2026",
    category: "Guide",
  },
  {
    id: 3,
    title: "Understanding Lithium Battery Storage",
    excerpt:
      "Learn how lithium battery systems are changing backup power and energy storage for solar users.",
    href: "/news/lithium-battery-storage-guide",
    image:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=80",
    date: "August 2026",
    category: "Technology",
  },
];

export function NewsSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ED2436]">
              Solar Insights
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#07143D] sm:text-3xl">
              News & Guides
            </h2>

            <p className="mt-2 max-w-[650px] text-sm leading-6 text-slate-500">
              Read practical solar guides, product insights and market
              updates from the Solar Trade Hub ecosystem.
            </p>
          </div>

          <Link
            href="/news"
            className="hidden items-center gap-2 text-sm font-semibold text-[#07143D] transition-colors hover:text-[#ED2436] sm:inline-flex"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                border border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#ED2436]/30
                hover:shadow-lg
              "
            >
              <Link
                href={item.href}
                className="relative block h-[220px] overflow-hidden bg-slate-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#ED2436] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    <Newspaper className="h-3 w-3" />
                    {item.category}
                  </span>
                </div>
              </Link>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {item.date}
                </div>

                <Link href={item.href}>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 transition-colors group-hover:text-[#07143D]">
                    {item.title}
                  </h3>
                </Link>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.excerpt}
                </p>

                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#07143D] transition-colors hover:text-[#ED2436]"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 sm:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#07143D]"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}