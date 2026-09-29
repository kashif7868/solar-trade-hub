"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Info,
  LockKeyhole,
  Search,
  Send,
  ShieldCheck,
  ShoppingCart,
  Tag,
  TicketPercent,
  UserRound,
  X,
} from "lucide-react";

import "@/components/animations/css/home/solar-prices-section.css";

type PriceTrend = "up" | "down" | "same";
type PricingPanel = "supplier" | "customer";

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

const SUPPLIER_MAX_DISCOUNT_PERCENT = 3;
const CUSTOMER_COUPON_DISCOUNT_PERCENT = 0.2;

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
  new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));

const getSupplierMinimumRate = (rate: number) =>
  rate * (1 - SUPPLIER_MAX_DISCOUNT_PERCENT / 100);

const getCustomerCouponRate = (rate: number) =>
  rate * (1 - CUSTOMER_COUPON_DISCOUNT_PERCENT / 100);

export function SolarPricesSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [type, setType] = useState("All Types");
  const [brand, setBrand] = useState("All Brands");

  const [activeProductId, setActiveProductId] =
    useState<number | null>(null);

  const [activePanel, setActivePanel] =
    useState<PricingPanel | null>(null);

  const [supplierBidValues, setSupplierBidValues] =
    useState<Record<number, string>>({});

  const [customerTargetValues, setCustomerTargetValues] =
    useState<Record<number, string>>({});

  const [couponValues, setCouponValues] =
    useState<Record<number, string>>({});

  const [couponApplied, setCouponApplied] =
    useState<Record<number, boolean>>({});

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

  const openPanel = (
    productId: number,
    panel: PricingPanel
  ) => {
    const samePanel =
      activeProductId === productId &&
      activePanel === panel;

    if (samePanel) {
      setActiveProductId(null);
      setActivePanel(null);
      return;
    }

    setActiveProductId(productId);
    setActivePanel(panel);

    const product = solarRates.find(
      (item) => item.id === productId
    );

    if (!product) {
      return;
    }

    if (
      panel === "supplier" &&
      !supplierBidValues[productId]
    ) {
      setSupplierBidValues((current) => ({
        ...current,
        [productId]: String(
          Math.round(getSupplierMinimumRate(product.rate))
        ),
      }));
    }

    if (
      panel === "customer" &&
      !customerTargetValues[productId]
    ) {
      setCustomerTargetValues((current) => ({
        ...current,
        [productId]: String(product.rate),
      }));
    }
  };

  const closePanel = () => {
    setActiveProductId(null);
    setActivePanel(null);
  };

  const applyCoupon = (productId: number) => {
    if (!couponValues[productId]?.trim()) {
      return;
    }

    setCouponApplied((current) => ({
      ...current,
      [productId]: true,
    }));
  };

  return (
    <section
      id="solar-prices"
      className="sth-prices"
    >
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

        <div className="sth-prices__pricing-rules">
          <div className="sth-prices__pricing-rule sth-prices__pricing-rule--intro">
            <span className="sth-prices__pricing-rule-icon sth-prices__pricing-rule-icon--purple">
              <Info size={15} strokeWidth={1.9} />
            </span>

            <div>
              <strong>Pricing Options</strong>
              <span>Choose Supplier Bid or Customer Range.</span>
            </div>
          </div>

          <div className="sth-prices__pricing-rule">
            <span className="sth-prices__pricing-rule-icon sth-prices__pricing-rule-icon--orange">
              <Tag size={15} strokeWidth={1.9} />
            </span>

            <div>
              <strong>Supplier Bid</strong>
              <span>Up to {SUPPLIER_MAX_DISCOUNT_PERCENT}% below base price.</span>
            </div>
          </div>

          <div className="sth-prices__pricing-rule">
            <span className="sth-prices__pricing-rule-icon sth-prices__pricing-rule-icon--purple">
              <UserRound size={15} strokeWidth={1.9} />
            </span>

            <div>
              <strong>Customer Range</strong>
              <span>Coupon gives {CUSTOMER_COUPON_DISCOUNT_PERCENT}% discount.</span>
            </div>
          </div>
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
                <span>Actions</span>
              </div>

              <div className="sth-prices__rows">
                {filteredRates.map((item) => {
                  const supplierMinimum =
                    getSupplierMinimumRate(item.rate);

                  const couponPrice =
                    getCustomerCouponRate(item.rate);

                  const isSupplierOpen =
                    activeProductId === item.id &&
                    activePanel === "supplier";

                  const isCustomerOpen =
                    activeProductId === item.id &&
                    activePanel === "customer";

                  const bidValue = Number(
                    supplierBidValues[item.id] || item.rate
                  );

                  const validSupplierBid =
                    Number.isFinite(bidValue) &&
                    bidValue >= supplierMinimum &&
                    bidValue <= item.rate;

                  const customerTargetValue = Number(
                    customerTargetValues[item.id] || item.rate
                  );

                  const hasCoupon =
                    couponApplied[item.id] === true;

                  return (
                    <div key={item.id}>
                      <div className="sth-prices__row">
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
                        <div className="sth-prices__actions">
                          <button
                            type="button"
                            onClick={() =>
                              openPanel(item.id, "supplier")
                            }
                            className={`sth-prices__action-btn sth-prices__action-btn--supplier ${
                              isSupplierOpen
                                ? "sth-prices__action-btn--active"
                                : ""
                            }`}
                          >
                            <Tag size={12.5} strokeWidth={1.9} />
                            Supplier Bid
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              openPanel(item.id, "customer")
                            }
                            className={`sth-prices__action-btn sth-prices__action-btn--customer ${
                              isCustomerOpen
                                ? "sth-prices__action-btn--active"
                                : ""
                            }`}
                          >
                            <UserRound size={12.5} strokeWidth={1.9} />
                            Customer Range
                          </button>
                        </div>
                      </div>

                      {isSupplierOpen && (
                        <div className="sth-prices__expand sth-prices__expand--supplier">
                          <div className="sth-prices__expand-card">
                            <button
                              type="button"
                              onClick={closePanel}
                              aria-label="Close supplier bid"
                              className="sth-prices__expand-close"
                            >
                              <X size={14} />
                            </button>

                            <div className="sth-prices__expand-heading">
                              <span className="sth-prices__expand-icon sth-prices__expand-icon--orange">
                                <Tag size={16} strokeWidth={1.9} />
                              </span>

                              <div>
                                <strong>Supplier Bid</strong>
                                <span>Submit your best rate.</span>
                              </div>

                              <span className="sth-prices__expand-badge sth-prices__expand-badge--orange">
                                Max {SUPPLIER_MAX_DISCOUNT_PERCENT}% Lower
                              </span>
                            </div>

                            <div className="sth-prices__expand-grid">
                              <div className="sth-prices__price-compare">
                                <div>
                                  <span>Base Price</span>
                                  <strong>
                                    Rs. {formatPrice(item.rate)}
                                  </strong>
                                </div>

                                <ArrowRight
                                  size={15}
                                  className="sth-prices__price-arrow"
                                />

                                <div>
                                  <span>Minimum Allowed</span>
                                  <strong>
                                    Rs. {formatPrice(supplierMinimum)}
                                  </strong>
                                  <small>
                                    {SUPPLIER_MAX_DISCOUNT_PERCENT}% below base
                                  </small>
                                </div>
                              </div>

                              <div className="sth-prices__compact-form">
                                <label>Your Bid Price</label>

                                <div
                                  className={`sth-prices__money-input ${
                                    !validSupplierBid
                                      ? "sth-prices__money-input--error"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="number"
                                    min={Math.round(supplierMinimum)}
                                    max={item.rate}
                                    value={
                                      supplierBidValues[item.id] ??
                                      String(
                                        Math.round(supplierMinimum)
                                      )
                                    }
                                    onChange={(event) =>
                                      setSupplierBidValues(
                                        (current) => ({
                                          ...current,
                                          [item.id]:
                                            event.target.value,
                                        })
                                      )
                                    }
                                  />

                                  <span>PKR</span>
                                </div>

                                <button
                                  type="button"
                                  disabled={!validSupplierBid}
                                  className="sth-prices__submit-btn sth-prices__submit-btn--orange"
                                >
                                  <Send size={13.5} strokeWidth={1.9} />
                                  Submit Bid
                                </button>

                                <small
                                  className={
                                    validSupplierBid
                                      ? ""
                                      : "sth-prices__form-error"
                                  }
                                >
                                  {validSupplierBid
                                    ? `Allowed: Rs. ${formatPrice(
                                        supplierMinimum
                                      )} – Rs. ${formatPrice(
                                        item.rate
                                      )}`
                                    : `Allowed range starts at Rs. ${formatPrice(
                                        supplierMinimum
                                      )}.`}
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {isCustomerOpen && (
                        <div className="sth-prices__expand sth-prices__expand--customer">
                          <div className="sth-prices__expand-card">
                            <button
                              type="button"
                              onClick={closePanel}
                              aria-label="Close customer range"
                              className="sth-prices__expand-close"
                            >
                              <X size={14} />
                            </button>

                            <div className="sth-prices__expand-heading">
                              <span className="sth-prices__expand-icon sth-prices__expand-icon--purple">
                                <UserRound size={16} strokeWidth={1.9} />
                              </span>

                              <div>
                                <strong>Customer Range</strong>
                                <span>Tell suppliers your target price.</span>
                              </div>

                              <span className="sth-prices__expand-badge sth-prices__expand-badge--purple">
                                Coupon {CUSTOMER_COUPON_DISCOUNT_PERCENT}% Off
                              </span>
                            </div>

                            <div className="sth-prices__customer-grid">
                              <div className="sth-prices__compact-form">
                                <label>Your Target Price</label>

                                <div className="sth-prices__money-input">
                                  <input
                                    type="number"
                                    min={0}
                                    value={
                                      customerTargetValues[item.id] ??
                                      String(item.rate)
                                    }
                                    onChange={(event) =>
                                      setCustomerTargetValues(
                                        (current) => ({
                                          ...current,
                                          [item.id]:
                                            event.target.value,
                                        })
                                      )
                                    }
                                  />

                                  <span>PKR</span>
                                </div>

                                <button
                                  type="button"
                                  disabled={
                                    !Number.isFinite(
                                      customerTargetValue
                                    ) ||
                                    customerTargetValue <= 0
                                  }
                                  className="sth-prices__submit-btn sth-prices__submit-btn--outline"
                                >
                                  <Send size={13.5} strokeWidth={1.9} />
                                  Save Range
                                </button>

                                <small>
                                  Target price is a request; final supplier price may vary.
                                </small>
                              </div>

                              <div className="sth-prices__coupon-box">
                                <div className="sth-prices__coupon-heading">
                                  <span className="sth-prices__expand-icon sth-prices__expand-icon--purple">
                                    <TicketPercent
                                      size={16}
                                      strokeWidth={1.9}
                                    />
                                  </span>

                                  <div>
                                    <strong>Have a coupon?</strong>
                                    <span>
                                      Get {CUSTOMER_COUPON_DISCOUNT_PERCENT}% off.
                                    </span>
                                  </div>
                                </div>

                                <div className="sth-prices__coupon-input">
                                  <input
                                    type="text"
                                    value={
                                      couponValues[item.id] ?? ""
                                    }
                                    onChange={(event) => {
                                      setCouponValues(
                                        (current) => ({
                                          ...current,
                                          [item.id]:
                                            event.target.value,
                                        })
                                      );

                                      setCouponApplied(
                                        (current) => ({
                                          ...current,
                                          [item.id]: false,
                                        })
                                      );
                                    }}
                                    placeholder="Enter coupon code"
                                  />

                                  <button
                                    type="button"
                                    disabled={
                                      !couponValues[item.id]?.trim()
                                    }
                                    onClick={() =>
                                      applyCoupon(item.id)
                                    }
                                  >
                                    Apply
                                  </button>
                                </div>

                                <div className="sth-prices__coupon-result">
                                  <div className="sth-prices__lock-state">
                                    <LockKeyhole
                                      size={16}
                                      strokeWidth={1.9}
                                    />

                                    <div>
                                      <strong>
                                        {hasCoupon
                                          ? "Coupon applied"
                                          : "Product locked"}
                                      </strong>

                                      <span>
                                        {hasCoupon
                                          ? "Product can now be added to cart."
                                          : "Apply a coupon to unlock cart."}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="sth-prices__coupon-price">
                                    <span>Coupon Price</span>

                                    <strong>
                                      Rs. {formatPrice(couponPrice)}
                                    </strong>

                                    <small>
                                      Save Rs.{" "}
                                      {formatPrice(
                                        item.rate - couponPrice
                                      )}
                                    </small>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  disabled={!hasCoupon}
                                  className="sth-prices__cart-btn"
                                >
                                  {hasCoupon ? (
                                    <ShoppingCart
                                      size={14}
                                      strokeWidth={1.9}
                                    />
                                  ) : (
                                    <LockKeyhole
                                      size={14}
                                      strokeWidth={1.9}
                                    />
                                  )}

                                  {hasCoupon
                                    ? "Add to Cart"
                                    : "Coupon Required"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

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
