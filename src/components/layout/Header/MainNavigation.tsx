"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BatteryCharging,
  BriefcaseBusiness,
  Boxes,
  Home,
  PanelsTopLeft,
  Store,
  Tag,
  Wrench,
  Zap,
} from "lucide-react";

import { mainNavigation } from "@/data/headerData";

import "@/components/animations/css/header/main-navigation.css";

const navigationIcons = [
  Home,
  PanelsTopLeft,
  Zap,
  BatteryCharging,
  Boxes,
  Wrench,
  Store,
  Tag,
  BriefcaseBusiness,
  Tag,
];

export function MainNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <nav
      className="sth-main-nav"
      aria-label="Main navigation"
    >
      <div className="sth-main-nav__container">
        <div className="sth-main-nav__bar">
          {mainNavigation.map((item, index) => {
            const Icon =
              navigationIcons[index] ?? Boxes;

            const active = isActive(item.href);

            const className = [
              "sth-main-nav__link",
              active
                ? "sth-main-nav__link--active"
                : "",
              item.accent
                ? "sth-main-nav__link--accent"
                : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={className}
              >
                <Icon size={14} />

                <span>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}