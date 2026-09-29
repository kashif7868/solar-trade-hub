"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CircleHelp,
  Heart,
  LogOut,
  MapPin,
  Package,
  Store,
  TicketPercent,
  UserRound,
} from "lucide-react";

import type { AuthUser } from "@/services/auth/auth.service";

import "@/components/animations/css/profile/account-menu.css";

interface AccountMenuProps {
  user: AuthUser;
  isLoading: boolean;
  onLogout: () => Promise<void>;
}

export function AccountMenu({
  user,
  isLoading,
  onLogout,
}: AccountMenuProps) {
  const pathname = usePathname();

  const firstName =
    user.name?.trim().split(/\s+/)[0] ||
    "Customer";

  const isActive = (href: string) => {
    if (href === "/profile") {
      return pathname === "/profile";
    }

    return pathname.startsWith(href);
  };

  const menuItems = [
    {
      label: "Profile",
      href: "/profile",
      icon: UserRound,
    },
    {
      label: "My Orders",
      href: "/orders",
      icon: Package,
    },
    {
      label: "Wishlist",
      href: "/wishlist",
      icon: Heart,
    },
    {
      label: "My Coupons",
      href: "/coupons",
      icon: TicketPercent,
    },
    {
      label: "Addresses",
      href: "/addresses",
      icon: MapPin,
    },
  ];

  return (
    <aside className="sth-account-menu">

      <div className="sth-account-menu__header">
        <span className="sth-account-menu__eyebrow">
          My Account
        </span>

        <h2>
          Hi, {firstName}
        </h2>

        <p title={user.email}>
          {user.email}
        </p>
      </div>

      <nav
        className="sth-account-menu__nav"
        aria-label="Account navigation"
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "sth-account-menu__link sth-account-menu__link--active"
                  : "sth-account-menu__link"
              }
            >
              <Icon
                size={17}
                strokeWidth={1.8}
              />

              <span>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="sth-account-menu__divider" />

      <div className="sth-account-menu__secondary">

        <Link
          href="/seller"
          className="sth-account-menu__link sth-account-menu__link--supplier"
        >
          <Store
            size={17}
            strokeWidth={1.8}
          />

          <span>
            Become a Supplier
          </span>
        </Link>

        <Link
          href="/help"
          className="sth-account-menu__link"
        >
          <CircleHelp
            size={17}
            strokeWidth={1.8}
          />

          <span>
            Help & Support
          </span>
        </Link>

      </div>

      <div className="sth-account-menu__divider" />

      <button
        type="button"
        className="sth-account-menu__logout"
        onClick={() => void onLogout()}
        disabled={isLoading}
      >
        <LogOut
          size={17}
          strokeWidth={1.8}
        />

        <span>
          {isLoading
            ? "Signing Out..."
            : "Sign Out"}
        </span>
      </button>

    </aside>
  );
}