import Link from "next/link";

import {
  ArrowRight,
  BatteryCharging,
  PanelsTopLeft,
  Zap,
} from "lucide-react";

import "@/components/animations/css/home/promo-banners.css";

const promos = [
  {
    icon: PanelsTopLeft,
    eyebrow: "Solar Panels",
    title: "High-Efficiency Panels for Every Project",
    description:
      "Compare trusted solar panel brands for residential, commercial and industrial installations.",
    href: "/shop/solar-panels",
    cta: "Shop Panels",
    variant: "dark",
  },
  {
    icon: Zap,
    eyebrow: "Hybrid Inverters",
    title: "Smarter Energy Control With Hybrid Power",
    description:
      "Explore hybrid inverters designed for backup, self-consumption and modern solar systems.",
    href: "/shop/hybrid-inverters",
    cta: "View Inverters",
    variant: "orange",
  },
  {
    icon: BatteryCharging,
    eyebrow: "Batteries & ESS",
    title: "Reliable Lithium Storage for Daily Backup",
    description:
      "Find lithium batteries and energy storage systems for homes, offices and larger sites.",
    href: "/shop/batteries-ess",
    cta: "View Batteries",
    variant: "light",
  },
];

export function PromoBanners() {
  return (
    <section className="sth-promos">
      <div className="sth-promos__container">
        <div className="sth-promos__grid">
          {promos.map((promo) => {
            const Icon = promo.icon;

            return (
              <article
                key={promo.title}
                className={`sth-promo-card sth-promo-card--${promo.variant}`}
              >
                <div className="sth-promo-card__glow" />

                <div className="sth-promo-card__content">
                  <span className="sth-promo-card__icon">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>

                  <span className="sth-promo-card__eyebrow">
                    {promo.eyebrow}
                  </span>

                  <h3 className="sth-promo-card__title">
                    {promo.title}
                  </h3>

                  <p className="sth-promo-card__description">
                    {promo.description}
                  </p>

                  <Link
                    href={promo.href}
                    className="sth-promo-card__cta"
                  >
                    <span>{promo.cta}</span>
                    <ArrowRight size={14} strokeWidth={1.8} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}