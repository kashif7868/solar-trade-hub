import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import "@/components/animations/css/home/news-section.css";

const newsItems = [
  {
    id: 1,
    title: "Solar Market Trends in Pakistan",
    excerpt:
      "A quick look at changing solar product demand, pricing and technology adoption across the market.",
    href: "/news/solar-market-trends-pakistan",
    image: "/images/home/news/solar-market.webp",
    date: "August 2026",
    category: "Market",
  },
  {
    id: 2,
    title: "How to Choose the Right Hybrid Inverter",
    excerpt:
      "Key points to consider before selecting a hybrid inverter for residential or commercial solar systems.",
    href: "/news/how-to-choose-hybrid-inverter",
    image: "/images/home/news/hybrid-inverter.webp",
    date: "August 2026",
    category: "Guide",
  },
  {
    id: 3,
    title: "Understanding Lithium Battery Storage",
    excerpt:
      "Learn how lithium battery systems are changing backup power and energy storage for solar users.",
    href: "/news/lithium-battery-storage-guide",
    image: "/images/home/news/lithium-battery.webp",
    date: "August 2026",
    category: "Technology",
  },
];

export function NewsSection() {
  return (
    <section className="sth-news">
      <div className="sth-news__container">
        <div className="sth-news__header">
          <div className="sth-news__heading">
            <span className="sth-news__eyebrow">
              Solar Insights
            </span>

            <h2 className="sth-news__title">
              News & Guides
            </h2>

            <p className="sth-news__description">
              Practical solar guides, product insights and market
              updates from the Solar Trade Hub ecosystem.
            </p>
          </div>

          <Link
            href="/news"
            className="sth-news__view-all"
          >
            <span>View All</span>

            <ArrowRight
              size={14}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        <div className="sth-news__grid">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="sth-news-card"
            >
              <Link
                href={item.href}
                className="sth-news-card__media"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="sth-news-card__image"
                />

                <span className="sth-news-card__category">
                  {item.category}
                </span>
              </Link>

              <div className="sth-news-card__body">
                <div className="sth-news-card__date">
                  <CalendarDays
                    size={13}
                    strokeWidth={1.7}
                  />

                  <span>{item.date}</span>
                </div>

                <Link href={item.href}>
                  <h3 className="sth-news-card__title">
                    {item.title}
                  </h3>
                </Link>

                <p className="sth-news-card__excerpt">
                  {item.excerpt}
                </p>

                <Link
                  href={item.href}
                  className="sth-news-card__read-more"
                >
                  <span>Read More</span>

                  <ArrowRight
                    size={13}
                    strokeWidth={1.8}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}