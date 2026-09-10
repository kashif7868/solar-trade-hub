"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Heart,
  Home,
  LayoutGrid,
  ShoppingCart,
  UserRound,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";

import "@/components/animations/css/header/mobile-bottom-nav.css";

const items = [
  {
    label: "Shop",
    href: "/shop",
    icon: LayoutGrid,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: ShoppingCart,
  },
  {
    label: "Account",
    href: "/login",
    icon: UserRound,
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  const cartCount = useCartStore((state) =>
    state.items.reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/shop") {
      return (
        pathname.startsWith("/shop") ||
        pathname.startsWith("/category")
      );
    }

    return pathname.startsWith(href);
  };

  return (
    <nav
      className="sth-mobile-bottom-nav"
      aria-label="Mobile bottom navigation"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "sth-mobile-bottom-nav__item",
              active
                ? "sth-mobile-bottom-nav__item--active"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label={
              item.label === "Cart"
                ? `Cart with ${cartCount} items`
                : item.label
            }
          >
            <span className="sth-mobile-bottom-nav__icon">
              <Icon
                size={20}
                strokeWidth={1.8}
              />

              {item.label === "Cart" &&
                cartCount > 0 && (
                  <span className="sth-mobile-bottom-nav__badge">
                    {cartCount > 99
                      ? "99+"
                      : cartCount}
                  </span>
                )}
            </span>

            <span className="sth-mobile-bottom-nav__label">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}