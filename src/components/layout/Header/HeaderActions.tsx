"use client";

import Link from "next/link";
import {
  FileText,
  Heart,
  ShoppingCart,
  UserRound,
} from "lucide-react";

import "@/components/animations/css/header/header-actions.css";

export function HeaderActions() {
  const wishlistCount = 0;
  const cartCount = 0;

  return (
    <div className="sth-header-actions">
      <Link
        href="/get-quote"
        className="sth-header-action"
      >
        <span className="sth-header-action__icon">
          <FileText size={17} />
        </span>

        <span className="sth-header-action__label">
          Get Quote
        </span>
      </Link>

      <span className="sth-header-actions__divider" />

      <Link
        href="/login"
        className="sth-header-action"
      >
        <span className="sth-header-action__icon">
          <UserRound size={17} />
        </span>

        <span className="sth-header-action__label">
          Login / Signup
        </span>
      </Link>

      <span className="sth-header-actions__divider" />

      <Link
        href="/wishlist"
        className="sth-header-action"
        aria-label="Wishlist"
      >
        <span className="sth-header-action__icon">
          <Heart size={17} />

          <span className="sth-header-action__badge">
            {wishlistCount}
          </span>
        </span>

        <span className="sth-header-action__label">
          Wishlist
        </span>
      </Link>

      <Link
        href="/cart"
        className="sth-header-action"
        aria-label="Cart"
      >
        <span className="sth-header-action__icon">
          <ShoppingCart size={17} />

          <span className="sth-header-action__badge">
            {cartCount}
          </span>
        </span>

        <span className="sth-header-action__label">
          Cart
        </span>
      </Link>
    </div>
  );
}