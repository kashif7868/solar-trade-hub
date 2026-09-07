"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Heart,
  Home,
  LayoutGrid,
  Search,
  UserRound,
} from "lucide-react";

import "@/components/animations/css/header/mobile-bottom-nav.css";

const items = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Categories",
    href: "/shop",
    icon: LayoutGrid,
  },
  {
    label: "Search",
    href: "/search",
    icon: Search,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    label: "Account",
    href: "/login",
    icon: UserRound,
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sth-mobile-bottom-nav"
      aria-label="Mobile bottom navigation"
    >
      {items.map((item) => {
        const Icon = item.icon;

        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

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
          >
            <span className="sth-mobile-bottom-nav__icon">
              <Icon size={19} strokeWidth={1.8} />
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