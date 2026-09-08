import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BatteryCharging,
  Bolt,
  PlugZap,
  Settings,
  Sun,
  Wrench,
} from "lucide-react";

import "@/components/animations/css/home/category-card.css";

export interface CategoryCardProps {
  title: string;
  href: string;
  image: string;
  index?: number;
}

const categoryMeta = [
  {
    icon: Sun,
    count: "120+ Products",
    theme: "orange",
  },
  {
    icon: Bolt,
    count: "80+ Products",
    theme: "purple",
  },
  {
    icon: BatteryCharging,
    count: "70+ Products",
    theme: "orange",
  },
  {
    icon: Settings,
    count: "150+ Products",
    theme: "purple",
  },
  {
    icon: Wrench,
    count: "90+ Products",
    theme: "orange",
  },
  {
    icon: PlugZap,
    count: "40+ Products",
    theme: "green",
  },
];

export function CategoryCard({
  title,
  href,
  image,
  index = 0,
}: CategoryCardProps) {
  const meta =
    categoryMeta[index % categoryMeta.length];

  const Icon = meta.icon;

  return (
    <Link
      href={href}
      className={`sth-category-card sth-category-card--${meta.theme}`}
      aria-label={`Shop ${title}`}
    >
      <div className="sth-category-card__media">
        <div className="sth-category-card__shape" />

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 767px) 82vw, (max-width: 1023px) 33vw, 16vw"
          className="sth-category-card__image"
        />

        <span className="sth-category-card__icon">
          <Icon
            size={18}
            strokeWidth={1.8}
          />
        </span>
      </div>

      <div className="sth-category-card__content">
        <div className="sth-category-card__text">
          <h3 className="sth-category-card__title">
            {title}
          </h3>

          <span className="sth-category-card__count">
            {meta.count}
          </span>
        </div>

        <span className="sth-category-card__action">
          <ArrowRight
            size={16}
            strokeWidth={1.9}
          />
        </span>
      </div>
    </Link>
  );
}