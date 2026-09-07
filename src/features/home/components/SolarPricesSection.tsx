import Link from "next/link";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Minus,
} from "lucide-react";

import "@/components/animations/css/home/solar-prices-section.css";

const solarPrices = [
  {
    id: 1,
    category: "Solar Panel",
    product: "Jinko N-Type",
    specification: "High Efficiency Module",
    price: "Rs. 29,900",
    change: "-1.8%",
    trend: "down",
  },
  {
    id: 2,
    category: "Solar Panel",
    product: "JA Solar",
    specification: "Mono N-Type",
    price: "Rs. 28,750",
    change: "-0.9%",
    trend: "down",
  },
  {
    id: 3,
    category: "Hybrid Inverter",
    product: "Solis",
    specification: "12kW Hybrid",
    price: "Rs. 545,000",
    change: "+1.2%",
    trend: "up",
  },
  {
    id: 4,
    category: "Lithium Battery",
    product: "KNOX",
    specification: "16kWh LiFePO4",
    price: "Rs. 598,000",
    change: "0.0%",
    trend: "same",
  },
];

export function SolarPricesSection() {
  return (
    <section className="sth-prices">
      <div className="sth-prices__container">
        <div className="sth-prices__header">
          <div className="sth-prices__heading">
            <span className="sth-prices__eyebrow">
              Market Watch
            </span>

            <h2 className="sth-prices__title">
              Latest Solar Prices
            </h2>

            <p className="sth-prices__description">
              Track indicative market prices for popular solar panels,
              inverters, batteries and related equipment.
            </p>
          </div>

          <Link
            href="/solar-prices"
            className="sth-prices__view-all"
          >
            <span>View All Prices</span>
            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="sth-prices__table">
          <div className="sth-prices__table-head">
            <span>Category</span>
            <span>Product</span>
            <span>Specification</span>
            <span>Price</span>
            <span>Change</span>
          </div>

          <div className="sth-prices__rows">
            {solarPrices.map((item) => (
              <div
                key={item.id}
                className="sth-prices__row"
              >
                <div className="sth-prices__cell">
                  <span className="sth-prices__mobile-label">
                    Category
                  </span>

                  <span className="sth-prices__category">
                    {item.category}
                  </span>
                </div>

                <div className="sth-prices__cell">
                  <span className="sth-prices__mobile-label">
                    Product
                  </span>

                  <span className="sth-prices__product">
                    {item.product}
                  </span>
                </div>

                <div className="sth-prices__cell">
                  <span className="sth-prices__mobile-label">
                    Specification
                  </span>

                  <span className="sth-prices__spec">
                    {item.specification}
                  </span>
                </div>

                <div className="sth-prices__cell">
                  <span className="sth-prices__mobile-label">
                    Price
                  </span>

                  <span className="sth-prices__price">
                    {item.price}
                  </span>
                </div>

                <div className="sth-prices__cell">
                  <span className="sth-prices__mobile-label">
                    Change
                  </span>

                  <span
                    className={[
                      "sth-prices__change",
                      `sth-prices__change--${item.trend}`,
                    ].join(" ")}
                  >
                    {item.trend === "up" && (
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.8}
                      />
                    )}

                    {item.trend === "down" && (
                      <ArrowDownRight
                        size={14}
                        strokeWidth={1.8}
                      />
                    )}

                    {item.trend === "same" && (
                      <Minus
                        size={14}
                        strokeWidth={1.8}
                      />
                    )}

                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sth-prices__footer">
          <p>
            Indicative marketplace prices. Final supplier quotations
            may vary.
          </p>

          <Link
            href="/solar-prices"
            className="sth-prices__mobile-link"
          >
            All Prices
            <ArrowRight size={13} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}