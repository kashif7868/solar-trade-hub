import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BatteryCharging,
  BarChart3,
  CheckCircle2,
  Clock3,
  Gauge,
  Leaf,
  PanelsTopLeft,
  ShieldCheck,
  Wifi,
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
    variant: "purple",

    image:
      "https://pngimg.com/uploads/solar_panel/solar_panel_PNG42.png",

    imageAlt: "High efficiency solar panels",

    benefits: [
      {
        icon: Zap,
        label: "Higher Output",
      },
      {
        icon: ShieldCheck,
        label: "Longer Lifespan",
      },
      {
        icon: CheckCircle2,
        label: "Trusted Brands",
      },
    ],
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

    image:
      "https://www.skysolarpowerbahamas.com/wp-content/uploads/2024/04/2bb3bf69f3f2028c1723cb18b991bd6e.png",

    imageAlt: "Hybrid solar inverter",

    benefits: [
      {
        icon: Gauge,
        label: "High Efficiency",
      },
      {
        icon: Wifi,
        label: "Smart Monitoring",
      },
      {
        icon: ShieldCheck,
        label: "Reliable Power",
      },
    ],
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

    image:
      "https://www.pngkey.com/png/detail/964-9647912_zeroth-hybrid-solar-off-grid-hybrid-solar-inverter.png",

    imageAlt: "Lithium solar energy storage battery",

    benefits: [
      {
        icon: Clock3,
        label: "Longer Backup",
      },
      {
        icon: Leaf,
        label: "LiFePO4",
      },
      {
        icon: BarChart3,
        label: "Smart Energy",
      },
    ],
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
                <div
                  className="sth-promo-card__glow"
                  aria-hidden="true"
                />

                <div className="sth-promo-card__content">
                  <div className="sth-promo-card__eyebrow-row">
                    <span className="sth-promo-card__icon">
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span className="sth-promo-card__eyebrow">
                      {promo.eyebrow}
                    </span>
                  </div>

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

                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                    />
                  </Link>
                </div>

                <div
                  className="sth-promo-card__product"
                  aria-hidden="true"
                >
                  <Image
                    src={promo.image}
                    alt={promo.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 767px) 55vw, (max-width: 1100px) 35vw, 18vw"
                    className="sth-promo-card__product-image"
                  />
                </div>

                <div className="sth-promo-card__benefits">
                  {promo.benefits.map((benefit) => {
                    const BenefitIcon = benefit.icon;

                    return (
                      <div
                        key={benefit.label}
                        className="sth-promo-card__benefit"
                      >
                        <span className="sth-promo-card__benefit-icon">
                          <BenefitIcon
                            size={16}
                            strokeWidth={1.8}
                          />
                        </span>

                        <span className="sth-promo-card__benefit-label">
                          {benefit.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}