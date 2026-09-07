import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import "@/components/animations/css/home/category-card.css";

export interface CategoryCardProps {
  title: string;
  href: string;
  image: string;
}

export function CategoryCard({
  title,
  href,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="sth-category-card"
      aria-label={`Shop ${title}`}
    >
      <div className="sth-category-card__media">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1180px) 33vw, 16vw"
          className="sth-category-card__image"
        />

        <div className="sth-category-card__overlay" />

        <span className="sth-category-card__pill">
          {title}
        </span>
      </div>

      <div className="sth-category-card__content">
        <div className="sth-category-card__text">
          <span className="sth-category-card__label">
            Shop Category
          </span>

          <h3 className="sth-category-card__title">
            {title}
          </h3>
        </div>

        <span className="sth-category-card__action">
          <ArrowRight
            size={14}
            strokeWidth={1.8}
          />
        </span>
      </div>
    </Link>
  );
}