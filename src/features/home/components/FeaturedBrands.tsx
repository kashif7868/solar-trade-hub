import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { featuredBrands } from "@/data/brandData";

import "@/components/animations/css/home/featured-brands.css";

export function FeaturedBrands() {
  return (
    <section className="sth-featured-brands">
      <div className="sth-featured-brands__container">
        <div className="sth-featured-brands__header">
          <div>
            <span className="sth-featured-brands__eyebrow">
              Trusted Manufacturers
            </span>

            <h2 className="sth-featured-brands__title">
              Featured Brands
            </h2>
          </div>

          <Link
            href="/brands"
            className="sth-featured-brands__view-all"
          >
            <span>View All Brands</span>
            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="sth-featured-brands__strip">
          {featuredBrands.map((brand) => (
            <Link
              key={brand.id}
              href={brand.href}
              className="sth-featured-brands__item"
              aria-label={`View ${brand.name}`}
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={150}
                height={70}
                className="sth-featured-brands__logo"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}