import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CategoryCard } from "@/components/common/CategoryCard/CategoryCard";
import { homeCategories } from "@/data/categoryData";

import "@/components/animations/css/home/shop-by-category.css";

export function ShopByCategory() {
  return (
    <section className="sth-shop-category">
      <div className="sth-shop-category__container">
        <div className="sth-shop-category__header">
          <div className="sth-shop-category__heading">
            <span className="sth-shop-category__eyebrow">
              Browse Products
            </span>

            <h2 className="sth-shop-category__title">
              Shop By Category
            </h2>

            <p className="sth-shop-category__description">
              Browse essential solar products for residential,
              commercial and industrial energy projects.
            </p>
          </div>

          <Link
            href="/shop"
            className="sth-shop-category__view-all"
          >
            <span>View All Categories</span>

            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="sth-shop-category__grid">
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