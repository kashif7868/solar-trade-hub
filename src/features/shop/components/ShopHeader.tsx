import Link from "next/link";

import {
  BadgeCheck,
  Headphones,
  Truck,
} from "lucide-react";

import "@/components/animations/css/shop/shop-header.css";

export function ShopHeader() {
  return (
    <section className="sth-shop-header">
      <div className="sth-shop-header__top">
        <div className="sth-shop-header__content">
          <span className="sth-shop-header__eyebrow">
            Solar Marketplace
          </span>

          <h1 className="sth-shop-header__title">
            Shop Solar <span>Products</span>
          </h1>

          <p className="sth-shop-header__description">
            Explore verified solar panels, inverters,
            batteries, energy storage systems and solar
            accessories from trusted suppliers. Find the
            right products for a cleaner and brighter
            future.
          </p>
        </div>

        <div className="sth-shop-header__trust">
          <div className="sth-shop-header__trust-item">
            <span className="sth-shop-header__trust-icon sth-shop-header__trust-icon--purple">
              <BadgeCheck
                size={18}
                strokeWidth={1.8}
              />
            </span>

            <div>
              <strong>
                Verified Products
              </strong>

              <span>
                Trusted marketplace listings
              </span>
            </div>
          </div>

          <div className="sth-shop-header__trust-item">
            <span className="sth-shop-header__trust-icon sth-shop-header__trust-icon--orange">
              <Truck
                size={18}
                strokeWidth={1.8}
              />
            </span>

            <div>
              <strong>
                Fast Delivery
              </strong>

              <span>
                Across major cities
              </span>
            </div>
          </div>

          <div className="sth-shop-header__trust-item">
            <span className="sth-shop-header__trust-icon sth-shop-header__trust-icon--purple">
              <Headphones
                size={18}
                strokeWidth={1.8}
              />
            </span>

            <div>
              <strong>
                Dedicated Support
              </strong>

              <span>
                Expert help anytime
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sth-shop-header__bottom">
        <nav
          className="sth-shop-header__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link href="/">
            Home
          </Link>

          <span>/</span>

          <span>Shop</span>
        </nav>

        <div className="sth-shop-header__tagline">
          <span>Clean Energy</span>

          <span className="sth-shop-header__tagline-dot" />

          <span>
            Better Tomorrow
          </span>
        </div>
      </div>
    </section>
  );
}