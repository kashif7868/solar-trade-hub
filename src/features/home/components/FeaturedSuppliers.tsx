import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  Star,
  Store,
} from "lucide-react";

import "@/components/animations/css/home/featured-suppliers.css";

const suppliers = [
  {
    id: 1,
    name: "Solar Trade Hub Partner",
    city: "Lahore",
    rating: 4.9,
    products: 120,
    verified: true,
  },
  {
    id: 2,
    name: "Energy Solutions Pakistan",
    city: "Islamabad",
    rating: 4.8,
    products: 85,
    verified: true,
  },
  {
    id: 3,
    name: "Green Power Technologies",
    city: "Karachi",
    rating: 4.7,
    products: 96,
    verified: true,
  },
  {
    id: 4,
    name: "Prime Solar Distribution",
    city: "Rawalpindi",
    rating: 4.8,
    products: 74,
    verified: true,
  },
];

export function FeaturedSuppliers() {
  return (
    <section className="sth-suppliers">
      <div className="sth-suppliers__container">
        <div className="sth-suppliers__header">
          <div className="sth-suppliers__heading">
            <span className="sth-suppliers__eyebrow">
              Marketplace Partners
            </span>

            <h2 className="sth-suppliers__title">
              Featured Suppliers
            </h2>

            <p className="sth-suppliers__description">
              Discover verified suppliers offering solar products and
              solutions across major cities in Pakistan.
            </p>
          </div>

          <Link
            href="/suppliers"
            className="sth-suppliers__view-all"
          >
            <span>View All Suppliers</span>
            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="sth-suppliers__grid">
          {suppliers.map((supplier) => (
            <article
              key={supplier.id}
              className="sth-supplier-card"
            >
              <div className="sth-supplier-card__top">
                <span className="sth-supplier-card__icon">
                  <Store size={18} strokeWidth={1.8} />
                </span>

                {supplier.verified && (
                  <span className="sth-supplier-card__verified">
                    <BadgeCheck size={13} strokeWidth={1.8} />
                    Verified
                  </span>
                )}
              </div>

              <div className="sth-supplier-card__content">
                <h3>{supplier.name}</h3>

                <div className="sth-supplier-card__location">
                  <MapPin size={14} strokeWidth={1.8} />
                  <span>{supplier.city}</span>
                </div>
              </div>

              <div className="sth-supplier-card__meta">
                <div className="sth-supplier-card__rating">
                  <Star
                    size={14}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                  <strong>{supplier.rating}</strong>
                </div>

                <span className="sth-supplier-card__products">
                  {supplier.products} Products
                </span>
              </div>

              <Link
                href={`/suppliers/${supplier.id}`}
                className="sth-supplier-card__button"
              >
                <span>View Supplier</span>
                <ArrowRight size={13} strokeWidth={1.8} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}