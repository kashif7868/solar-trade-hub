"use client";

import {
  BadgeCheck,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

import "@/components/animations/css/product/product-trust.css";

const trustItems = [
  {
    icon: Truck,
    title: "Free Delivery",
    description:
      "Available on selected products and locations.",
  },
  {
    icon: ShieldCheck,
    title: "Official Warranty",
    description:
      "Covered by official supplier or manufacturer warranty.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Product",
    description:
      "Listed through trusted marketplace suppliers.",
  },
  {
    icon: ShoppingBag,
    title: "Secure Purchase",
    description:
      "Safe and transparent solar marketplace experience.",
  },
];

export function ProductTrust() {
  return (
    <section className="sth-product-trust">
      {trustItems.map(
        ({
          icon: Icon,
          title,
          description,
        }) => (
          <article
            key={title}
            className="sth-product-trust__item"
          >
            <span className="sth-product-trust__icon">
              <Icon
                size={20}
                strokeWidth={1.8}
              />
            </span>

            <div className="sth-product-trust__content">
              <strong>
                {title}
              </strong>

              <p>
                {description}
              </p>
            </div>
          </article>
        )
      )}
    </section>
  );
}