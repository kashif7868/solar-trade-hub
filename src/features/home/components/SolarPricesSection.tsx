"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Info,
  Minus,
  Search,
  ShieldCheck,
} from "lucide-react";

import "@/components/animations/css/home/solar-prices-section.css";

type PriceTrend = "up" | "down" | "same";

interface SolarRateItem {
  id: number;
  name: string;
  model: string;
  type: "Material" | "Equipment";
  category: string;
  brand: string;
  size: string;
  unit: string;
  rate: number;
  change: string;
  trend: PriceTrend;
  status: "In Stock" | "Out of Stock";
  image: string;
}

const solarRates: SolarRateItem[] = [
  {
    id: 1,
    name: "Jinko Tiger Neo",
    model: "N-Type 585W",
    type: "Material",
    category: "Solar Panel",
    brand: "Jinko Solar",
    size: "585W",
    unit: "Per Panel",
    rate: 29900,
    change: "-1.8%",
    trend: "down",
    status: "In Stock",
    image:
      "https://pngimg.com/uploads/solar_panel/solar_panel_PNG42.png",
  },
  {
    id: 2,
    name: "JA Solar DeepBlue",
    model: "N-Type 585W",
    type: "Material",
    category: "Solar Panel",
    brand: "JA Solar",
    size: "585W",
    unit: "Per Panel",
    rate: 28750,
    change: "-0.9%",
    trend: "down",
    status: "In Stock",
    image:
      "https://pngimg.com/uploads/solar_panel/solar_panel_PNG42.png",
  },
  {
    id: 3,
    name: "Solis Hybrid Inverter",
    model: "S6-EH3P12K-H",
    type: "Equipment",
    category: "Hybrid Inverter",
    brand: "Solis",
    size: "12kW",
    unit: "Per Unit",
    rate: 545000,
    change: "+1.2%",
    trend: "up",
    status: "In Stock",
    image:
      "https://www.solisinverters.com/uploads/20230323/641c14cb1bfa5.png",
  },
  {
    id: 4,
    name: "GoodWe Hybrid Inverter",
    model: "ET Series",
    type: "Equipment",
    category: "Hybrid Inverter",
    brand: "GoodWe",
    size: "10kW",
    unit: "Per Unit",
    rate: 399000,
    change: "0.0%",
    trend: "same",
    status: "In Stock",
    image:
      "https://www.goodwe.com/Ftp/EN/Downloads/User%20Manual/GW_ET_PLUS+_Series.png",
  },
  {
    id: 5,
    name: "KNOX LiFePO4 Battery",
    model: "16kWh ESS",
    type: "Equipment",
    category: "Battery & ESS",
    brand: "KNOX",
    size: "16kWh",
    unit: "Per Unit",
    rate: 598000,
    change: "0.0%",
    trend: "same",
    status: "In Stock",
    image:
      "https://placehold.co/120x120/ffffff/5b2eff?text=KNOX",
  },
  {
    id: 6,
    name: "Huawei LUNA Battery",
    model: "Smart ESS",
    type: "Equipment",
    category: "Battery & ESS",
    brand: "Huawei",
    size: "10kWh",
    unit: "Per Unit",
    rate: 485000,
    change: "-0.6%",
    trend: "down",
    status: "In Stock",
    image:
      "https://placehold.co/120x120/ffffff/ff4b1f?text=HUAWEI",
  },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-PK").format(value);

export function SolarPricesSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [type, setType] = useState("All Types");
  const [brand, setBrand] = useState("All Brands");

  const categories = useMemo(
    () => [
      "All Categories",
      ...Array.from(new Set(solarRates.map((item) => item.category))),
    ],
    []
  );

  const types = useMemo(
    () => [
      "All Types",
      ...Array.from(new Set(solarRates.map((item) => item.type))),
    ],
    []
  );

  const brands = useMemo(
    () => [
      "All Brands",
      ...Array.from(new Set(solarRates.map((item) => item.brand))),
    ],
    []
  );

  const filteredRates = useMemo(() => {
    const query = search.trim().toLowerCase();

    return solarRates.filter((item) => {
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.model.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      const matchesCategory =
        category === "All Categories" || item.category === category;

      const matchesType =
        type === "All Types" || item.type === type;

      const matchesBrand =
        brand === "All Brands" || item.brand === brand;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesBrand
      );
    });
  }, [search, category, type, brand]);

  return (
    <section className="sth-prices">
      <div className="sth-prices__container">
        <div className="sth-prices__hero">
          <div className="sth-prices__heading">
            <span className="sth-prices__eyebrow">
              <span className="sth-prices__eyebrow-line" />
              Solar Market Watch
            </span>

            <h2 className="sth-prices__title">
              Latest <span>Solar Prices</span>
            </h2>

            <p className="sth-prices__description">
              Track indicative market prices for popular solar panels,
              inverters, batteries and other solar equipment.
            </p>
          </div>

          <div className="sth-prices__updated-card">
            <span className="sth-prices__updated-icon">
              <BarChart3 size={20} strokeWidth={1.9} />
            </span>

            <div>
              <strong>Updated Daily</strong>
              <span>Latest market rates</span>
            </div>
          </div>
        </div>

        <div className="sth-prices__toolbar">
          <label className="sth-prices__search">
            <Search size={17} strokeWidth={1.8} />

            <input
              type="search"
              placeholder="Search product, brand or model..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label className="sth-prices__select">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown size={15} strokeWidth={1.8} />
          </label>

          <label className="sth-prices__select">
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              {types.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown size={15} strokeWidth={1.8} />
          </label>

          <label className="sth-prices__select">
            <select
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            >
              {brands.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown size={15} strokeWidth={1.8} />
          </label>

          <Link
            href="/solar-prices"
            className="sth-prices__view-all"
          >
            <span>View Complete Rate List</span>
            <ArrowRight size={15} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="sth-prices__table-card">
          <div className="sth-prices__table-scroll">
            <div className="sth-prices__table">
              <div className="sth-prices__table-head">
                <span>Product</span>
                <span>Type</span>
                <span>Category</span>
                <span>Brand</span>
                <span>Size / Capacity</span>
                <span>Unit</span>
                <span>Price</span>
                <span>Change</span>
                <span>Status</span>
                <span />
              </div>

              <div className="sth-prices__rows">
                {filteredRates.map((item) => (
                  <div
                    key={item.id}
                    className="sth-prices__row"
                  >
                    <div className="sth-prices__product">
                      <div className="sth-prices__product-image">
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>

                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.model}</span>
                      </div>
                    </div>

                    <div>
                      <span
                        className={`sth-prices__type sth-prices__type--${item.type.toLowerCase()}`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <span>{item.category}</span>

                    <span>{item.brand}</span>

                    <span>{item.size}</span>

                    <span>{item.unit}</span>

                    <strong className="sth-prices__rate">
                      Rs. {formatPrice(item.rate)}
                    </strong>

                    <div>
                      <span
                        className={`sth-prices__change sth-prices__change--${item.trend}`}
                      >
                        {item.trend === "up" && (
                          <ArrowUp size={13} strokeWidth={2} />
                        )}

                        {item.trend === "down" && (
                          <ArrowDown size={13} strokeWidth={2} />
                        )}

                        {item.trend === "same" && (
                          <Minus size={13} strokeWidth={2} />
                        )}

                        {item.change}
                      </span>
                    </div>

                    <div>
                      <span
                        className={`sth-prices__status ${
                          item.status === "In Stock"
                            ? "sth-prices__status--active"
                            : ""
                        }`}
                      >
                        <span />
                        {item.status}
                      </span>
                    </div>

                    <Link
                      href={`/solar-prices/${item.id}`}
                      className="sth-prices__row-link"
                      aria-label={`View ${item.name}`}
                    >
                      <ArrowRight
                        size={14}
                        strokeWidth={1.8}
                      />
                    </Link>
                  </div>
                ))}

                {filteredRates.length === 0 && (
                  <div className="sth-prices__empty">
                    No solar rates match your current filters.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="sth-prices__pagination">
            <span>
              Showing {filteredRates.length} of {solarRates.length} items
            </span>

            <div className="sth-prices__pagination-controls">
              <button
                type="button"
                aria-label="Previous page"
                disabled
              >
                <ChevronLeft size={15} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                className="sth-prices__page sth-prices__page--active"
              >
                1
              </button>

              <button
                type="button"
                aria-label="Next page"
              >
                <ChevronRight size={15} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>

        <div className="sth-prices__info">
          <div className="sth-prices__info-item">
            <span className="sth-prices__info-icon sth-prices__info-icon--orange">
              <Info size={17} strokeWidth={1.8} />
            </span>

            <div>
              <strong>Indicative marketplace prices.</strong>
              <span>Final supplier quotations may vary.</span>
            </div>
          </div>

          <div className="sth-prices__info-divider" />

          <div className="sth-prices__info-item">
            <span className="sth-prices__info-icon sth-prices__info-icon--purple">
              <ShieldCheck size={17} strokeWidth={1.8} />
            </span>

            <div>
              <strong>Verified Suppliers</strong>
              <span>Trusted marketplace partners</span>
            </div>
          </div>

          <div className="sth-prices__info-divider" />

          <div className="sth-prices__info-item">
            <span className="sth-prices__info-icon sth-prices__info-icon--orange">
              <BarChart3 size={17} strokeWidth={1.8} />
            </span>

            <div>
              <strong>Updated Regularly</strong>
              <span>Latest market information</span>
            </div>
          </div>

          <div className="sth-prices__info-divider" />

          <Link
            href="/solar-prices"
            className="sth-prices__info-link"
          >
            <span>Learn More About Pricing</span>
            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}