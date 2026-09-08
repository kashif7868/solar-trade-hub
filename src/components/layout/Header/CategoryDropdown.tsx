"use client";

import Link from "next/link";

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
              All Categories
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
          {categoryNavigation.map((category, index) => {
            const Icon =
              categoryIcons[index] ?? LayoutGrid;

            return (
              <DropdownMenuItem
                key={category.href}
                asChild
                className="sth-category-menu__item"
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
          })}
        </div>

        <Link
          href="/shop"
          className="sth-category-menu__view-all"
        >
          <span>View All Products</span>
          <ChevronRight size={12} />
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}