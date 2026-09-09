"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BatteryCharging,
  Boxes,
  Cable,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  PanelsTopLeft,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { categoryNavigation } from "@/data/headerData";

import "@/components/animations/css/header/category-dropdown.css";

const categoryIcons = [
  PanelsTopLeft,
  Zap,
  BatteryCharging,
  Boxes,
  LayoutGrid,
  Cable,
  ShieldCheck,
  Wrench,
];

export function CategoryDropdown() {
  const pathname = usePathname();

  const activeCategory =
    categoryNavigation.find(
      (category) =>
        pathname === category.href ||
        pathname.startsWith(
          `${category.href}/`
        )
    );

  const triggerLabel =
    activeCategory?.label ??
    "All Categories";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="sth-category-trigger"
          aria-label="Browse categories"
        >
          <span className="sth-category-trigger__left">
            <span className="sth-category-trigger__icon">
              <LayoutGrid size={15} />
            </span>

            <span className="sth-category-trigger__label">
              {triggerLabel}
            </span>
          </span>

          <ChevronDown
            size={13}
            className="sth-category-trigger__chevron"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={4}
        className="sth-category-menu"
      >
        <div className="sth-category-menu__list">
          {categoryNavigation.map(
            (category, index) => {
              const Icon =
                categoryIcons[index] ??
                LayoutGrid;

              const isActive =
                pathname ===
                  category.href ||
                pathname.startsWith(
                  `${category.href}/`
                );

              return (
                <DropdownMenuItem
                  key={`${category.label}-${category.href}`}
                  asChild
                  className={[
                    "sth-category-menu__item",
                    isActive
                      ? "sth-category-menu__item--active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Link
                    href={category.href}
                    className="sth-category-menu__link"
                  >
                    <span className="sth-category-menu__icon">
                      <Icon size={14} />
                    </span>

                    <span className="sth-category-menu__label">
                      {category.label}
                    </span>

                    <ChevronRight
                      size={12}
                      className="sth-category-menu__arrow"
                    />
                  </Link>
                </DropdownMenuItem>
              );
            }
          )}
        </div>

        <Link
          href="/shop"
          className="sth-category-menu__view-all"
        >
          <span>
            View All Products
          </span>

          <ChevronRight size={12} />
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}