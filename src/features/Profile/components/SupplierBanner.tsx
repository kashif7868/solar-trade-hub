"use client";

import Link from "next/link";
import {
  ArrowRight,
  Store,
} from "lucide-react";

import "@/components/animations/css/profile/supplier-banner.css";

export function SupplierBanner() {
  return (
    <section className="sth-supplier-banner">
      <div className="sth-supplier-banner__image" />

      <div className="sth-supplier-banner__overlay" />

      <div className="sth-supplier-banner__content">
        <div className="sth-supplier-banner__icon">
          <Store
            size={23}
            strokeWidth={1.9}
          />
        </div>

        <div className="sth-supplier-banner__copy">
          <span className="sth-supplier-banner__eyebrow">
            Join Our Growing Marketplace
          </span>

          <h2>
            Become a Supplier
          </h2>

          <p>
            List your solar products, reach more
            customers and grow your business with
            Solar Trade Hub.
          </p>
        </div>
      </div>

      <Link
        href="/seller"
        className="sth-supplier-banner__action"
      >
        <span>Apply Now</span>

        <ArrowRight
          size={15}
          strokeWidth={2.2}
        />
      </Link>
    </section>
  );
}