import type { CategoryItem } from "@/data/categoryData";

import "@/components/animations/css/category/category-hero.css";

interface CategoryHeroProps {
  category: CategoryItem;
  productCount: number;
}

export function CategoryHero({
  category,
  productCount,
}: CategoryHeroProps) {
  const [firstWord, ...restWords] =
    category.title.split(" ");

  const remainingTitle =
    restWords.join(" ");

  return (
    <section className="sth-category-hero">
      <div className="sth-category-hero__content">
        <span className="sth-category-hero__eyebrow">
          {category.eyebrow}
        </span>

        <h1 className="sth-category-hero__title">
          <span className="sth-category-hero__title-orange">
            {firstWord}
          </span>

          {remainingTitle && (
            <>
              {" "}

              <span className="sth-category-hero__title-purple">
                {remainingTitle}
              </span>
            </>
          )}
        </h1>

        <p className="sth-category-hero__description">
          {category.description}
        </p>

        <div className="sth-category-hero__meta">
          <span>
            Verified Marketplace
          </span>

          <span className="sth-category-hero__meta-dot">
            •
          </span>

          <span>
            Trusted Suppliers
          </span>

          <span className="sth-category-hero__meta-dot">
            •
          </span>

          <span>
            Pakistan Solar Market
          </span>
        </div>
      </div>

      <div className="sth-category-hero__visual">
        <div className="sth-category-hero__count-card">
          <span className="sth-category-hero__count-label">
            Available Products
          </span>

          <strong>
            {productCount}
          </strong>

          <span className="sth-category-hero__count-note">
            Listed in this category
          </span>
        </div>

        <div className="sth-category-hero__accent sth-category-hero__accent--orange" />

        <div className="sth-category-hero__accent sth-category-hero__accent--purple" />
      </div>
    </section>
  );
}