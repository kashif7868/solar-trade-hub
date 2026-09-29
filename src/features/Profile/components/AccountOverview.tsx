"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Heart,
  Package,
  TicketPercent,
} from "lucide-react";

import { useWishlistStore } from "@/store/wishlistStore";

import "@/components/animations/css/profile/account-overview.css";

export function AccountOverview() {
  const wishlistItems = useWishlistStore(
    (state) => state.items
  );

  const wishlistCount =
    wishlistItems?.length ?? 0;

  return (
    <section className="sth-account-overview">
      <div className="sth-account-overview__header">
        <div className="sth-account-overview__header-icon">
          <BarChart3
            size={19}
            strokeWidth={2}
          />
        </div>

        <div>
          <h2>Account Overview</h2>

          <p>
            Quick summary of your activity.
          </p>
        </div>
      </div>

      <div className="sth-account-overview__grid">
        <Link
          href="/orders"
          className="sth-account-overview__item sth-account-overview__item--orders"
        >
          <div className="sth-account-overview__icon">
            <Package
              size={20}
              strokeWidth={2}
            />
          </div>

          <div className="sth-account-overview__content">
            <strong className="sth-account-overview__value">
              —
            </strong>

            <span className="sth-account-overview__label">
              Total Orders
            </span>

            <span className="sth-account-overview__action">
              View Orders
              <ArrowRight
                size={11}
                strokeWidth={2.2}
              />
            </span>
          </div>
        </Link>

        <Link
          href="/wishlist"
          className="sth-account-overview__item sth-account-overview__item--wishlist"
        >
          <div className="sth-account-overview__icon sth-account-overview__icon--orange">
            <Heart
              size={20}
              strokeWidth={2}
            />
          </div>

          <div className="sth-account-overview__content">
            <strong className="sth-account-overview__value">
              {wishlistCount}
            </strong>

            <span className="sth-account-overview__label">
              Wishlist Items
            </span>

            <span className="sth-account-overview__action">
              View Wishlist
              <ArrowRight
                size={11}
                strokeWidth={2.2}
              />
            </span>
          </div>
        </Link>

        <Link
          href="/coupons"
          className="sth-account-overview__item sth-account-overview__item--coupons"
        >
          <div className="sth-account-overview__icon sth-account-overview__icon--green">
            <TicketPercent
              size={20}
              strokeWidth={2}
            />
          </div>

          <div className="sth-account-overview__content">
            <strong className="sth-account-overview__value">
              —
            </strong>

            <span className="sth-account-overview__label">
              Active Coupons
            </span>

            <span className="sth-account-overview__action">
              View Coupons
              <ArrowRight
                size={11}
                strokeWidth={2.2}
              />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}