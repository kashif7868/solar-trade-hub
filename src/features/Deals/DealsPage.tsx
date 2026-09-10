import {
  ArrowRight,
  BadgePercent,
  BatteryCharging,
  Clock3,
  Flame,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Tag,
  Zap,
} from "lucide-react";

import "@/components/animations/css/deals/deals-page.css";

const deals = [
  {
    id: 1,
    title: "Jinko Tiger Neo 585W Solar Panel Deal",
    category: "Solar Panels",
    oldPrice: 32000,
    price: 28900,
    discount: "10% OFF",
    badge: "Hot Deal",
    icon: Zap,
  },
  {
    id: 2,
    title: "Solis 12kW Hybrid Inverter Special Offer",
    category: "Hybrid Inverters",
    oldPrice: 565000,
    price: 529000,
    discount: "Save Rs 36,000",
    badge: "Featured",
    icon: Flame,
  },
  {
    id: 3,
    title: "KNOX 16kWh LiFePO4 Battery Offer",
    category: "Batteries",
    oldPrice: 625000,
    price: 589000,
    discount: "Save Rs 36,000",
    badge: "Best Seller",
    icon: BatteryCharging,
  },
  {
    id: 4,
    title: "JA Solar 585W N-Type Panel Bundle",
    category: "Solar Panels",
    oldPrice: 30500,
    price: 27900,
    discount: "8% OFF",
    badge: "Popular",
    icon: Zap,
  },
  {
    id: 5,
    title: "GoodWe 10kW Hybrid Inverter Deal",
    category: "Hybrid Inverters",
    oldPrice: 420000,
    price: 389000,
    discount: "Save Rs 31,000",
    badge: "Limited",
    icon: Flame,
  },
  {
    id: 6,
    title: "Solar Protection & DC Cable Bundle",
    category: "Accessories",
    oldPrice: 68000,
    price: 59900,
    discount: "12% OFF",
    badge: "Bundle",
    icon: PackageCheck,
  },
];

const dealCategories = [
  "All Deals",
  "Solar Panels",
  "Inverters",
  "Batteries",
  "Accessories",
];

export function DealsPage() {
  return (
    <main className="sth-deals">
      <section className="sth-deals__hero">
        <div className="sth-deals__container">
          <div className="sth-deals__hero-content">
            <span className="sth-deals__eyebrow">
              <Sparkles size={14} strokeWidth={1.8} />
              Exclusive Solar Offers
            </span>

            <h1>
              Better Solar Deals.
              <span> Smarter Energy Savings.</span>
            </h1>

            <p>
              Discover selected solar product offers, promotional prices and
              bundle deals from suppliers on Solar Trade Hub.
            </p>

            <div className="sth-deals__hero-actions">
              <a
                href="#featured-deals"
                className="sth-deals__hero-btn sth-deals__hero-btn--primary"
              >
                <ShoppingBag size={16} strokeWidth={1.8} />
                Explore Deals
                <ArrowRight size={15} strokeWidth={1.8} />
              </a>

              <a
                href="/shop"
                className="sth-deals__hero-btn sth-deals__hero-btn--secondary"
              >
                Browse All Products
              </a>
            </div>

            <div className="sth-deals__hero-features">
              <div>
                <BadgePercent size={17} />
                <span>
                  <strong>Special Prices</strong>
                  Selected solar products
                </span>
              </div>

              <div>
                <ShieldCheck size={17} />
                <span>
                  <strong>Trusted Listings</strong>
                  Supplier offers
                </span>
              </div>

              <div>
                <Clock3 size={17} />
                <span>
                  <strong>Limited Offers</strong>
                  While available
                </span>
              </div>
            </div>
          </div>

          <div className="sth-deals__hero-visual">
            <div className="sth-deals__deal-visual-card">
              <div className="sth-deals__visual-top">
                <span>
                  <Tag size={15} />
                  DEAL OF THE DAY
                </span>

                <span className="sth-deals__visual-live">
                  Live
                </span>
              </div>

              <div className="sth-deals__visual-icon">
                <BatteryCharging
                  size={58}
                  strokeWidth={1.3}
                />
              </div>

              <span className="sth-deals__visual-category">
                Energy Storage
              </span>

              <strong>
                Save more on selected solar energy solutions
              </strong>

              <div className="sth-deals__visual-price">
                <span>Up to</span>
                <strong>15% OFF</strong>
              </div>

              <div className="sth-deals__visual-progress">
                <span />
              </div>

              <small>
                Limited promotional availability
              </small>
            </div>

            <span className="sth-deals__float sth-deals__float--one">
              <BadgePercent size={17} />
              Special Offers
            </span>

            <span className="sth-deals__float sth-deals__float--two">
              <Flame size={17} />
              Hot Deals
            </span>
          </div>
        </div>
      </section>

      <section
        id="featured-deals"
        className="sth-deals__directory"
      >
        <div className="sth-deals__container">
          <div className="sth-deals__section-head">
            <div>
              <span>Current Offers</span>

              <h2>
                Featured
                <strong> Solar Deals</strong>
              </h2>
            </div>

            <p>
              Browse selected promotional listings across Solar Trade Hub.
            </p>
          </div>

          <div className="sth-deals__categories">
            {dealCategories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={[
                  "sth-deals__category",
                  index === 0
                    ? "sth-deals__category--active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="sth-deals__grid">
            {deals.map((deal) => {
              const Icon = deal.icon;

              return (
                <article
                  key={deal.id}
                  className="sth-deals__card"
                >
                  <div className="sth-deals__card-head">
                    <span className="sth-deals__badge">
                      {deal.badge}
                    </span>

                    <span className="sth-deals__discount">
                      {deal.discount}
                    </span>
                  </div>

                  <div className="sth-deals__product-visual">
                    <span>
                      <Icon size={36} strokeWidth={1.45} />
                    </span>
                  </div>

                  <span className="sth-deals__product-category">
                    {deal.category}
                  </span>

                  <h3>{deal.title}</h3>

                  <div className="sth-deals__pricing">
                    <strong>
                      Rs {deal.price.toLocaleString()}
                    </strong>

                    <span>
                      Rs {deal.oldPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="sth-deals__availability">
                    <Clock3 size={13} strokeWidth={1.7} />
                    Limited-time promotional offer
                  </div>

                  <a
                    href="/shop"
                    className="sth-deals__shop-btn"
                  >
                    <span>View Deal</span>
                    <ArrowRight size={15} strokeWidth={1.8} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sth-deals__notice">
        <div className="sth-deals__container">
          <div className="sth-deals__notice-card">
            <div>
              <span>Solar Trade Hub Deals</span>

              <h2>
                Discover New Offers as
                <strong> Suppliers Update Listings</strong>
              </h2>

              <p>
                Product prices and availability can change. Check the latest
                listing details before placing an order.
              </p>
            </div>

            <a href="/shop">
              Visit Shop
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}