"use client";

import Link from "next/link";

import {
  Heart,
  LayoutGrid,
  ShoppingCart,
  UserRound,
} from "lucide-react";

import { AccountDropdown } from "./AccountDropdown";

import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

import "@/components/animations/css/header/header-actions.css";

export function HeaderActions() {
  const user = useAuthStore(
    (state) => state.user
  );

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const wishlistCount = useWishlistStore(
    (state) => state.items.length
  );

  const cartCount = useCartStore(
    (state) =>
      state.items.reduce(
        (total, item) =>
          total + item.quantity,
        0
      )
  );

  return (
    <div className="sth-header-actions">
      {/* ACCOUNT */}

      {isAuthenticated && user ? (
        <AccountDropdown />
      ) : (
        <Link
          href="/login"
          className="sth-header-action sth-header-action--account-login"
          aria-label="Login or create an account"
        >
          <span className="sth-header-action__icon">
            <UserRound
              size={17}
              strokeWidth={1.7}
            />
          </span>

          <span className="sth-header-action__label">
            Login / Signup
          </span>
        </Link>
      )}

      <span className="sth-header-actions__divider" />

      {/* SHOP */}

      <Link
        href="/shop"
        className="sth-header-action"
        aria-label="Shop products"
      >
        <span className="sth-header-action__icon">
          <LayoutGrid
            size={17}
            strokeWidth={1.7}
          />
        </span>

        <span className="sth-header-action__label">
          Shop
        </span>
      </Link>

      <span className="sth-header-actions__divider" />

      {/* WISHLIST */}

      <Link
        href="/wishlist"
        className="sth-header-action"
        aria-label={`Wishlist with ${wishlistCount} items`}
      >
        <span className="sth-header-action__icon">
          <Heart
            size={17}
            strokeWidth={1.7}
          />

          {wishlistCount > 0 && (
            <span className="sth-header-action__badge">
              {wishlistCount > 99
                ? "99+"
                : wishlistCount}
            </span>
          )}
        </span>

        <span className="sth-header-action__label">
          Wishlist
        </span>
      </Link>

      <span className="sth-header-actions__divider" />

      {/* CART */}

      <Link
        href="/cart"
        className="sth-header-action"
        aria-label={`Cart with ${cartCount} items`}
      >
        <span className="sth-header-action__icon">
          <ShoppingCart
            size={17}
            strokeWidth={1.7}
          />

          {cartCount > 0 && (
            <span className="sth-header-action__badge">
              {cartCount > 99
                ? "99+"
                : cartCount}
            </span>
          )}
        </span>

        <span className="sth-header-action__label">
          Cart
        </span>
      </Link>
    </div>
  );
}