"use client";

import Link from "next/link";
import {
  BatteryCharging,
  Boxes,
  Cable,
  ChevronDown,
  LayoutGrid,
  PanelsTopLeft,
  ShieldCheck,
  Zap,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { categoryNavigation } from "@/data/headerData";

const categoryIcons = [
  PanelsTopLeft,
  Zap,
  Zap,
  BatteryCharging,
  Boxes,
  LayoutGrid,
  Cable,
  ShieldCheck,
];

export function CategoryDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="
            flex h-[52px] min-w-[230px]
            items-center justify-between
            gap-4
            rounded-md
            border border-slate-200
            bg-white
            px-5
            text-[13px]
            font-semibold
            text-[#07143D]
            shadow-sm
            outline-none
            transition-all
            hover:bg-slate-50
            data-[state=open]:ring-2
            data-[state=open]:ring-[#ED2436]/20
          "
        >
          <span className="flex items-center gap-3">
            <LayoutGrid className="h-[17px] w-[17px]" />

            <span>All Categories</span>
          </span>

          <ChevronDown className="h-4 w-4 text-slate-500" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={8}
        className="
          w-[300px]
          rounded-xl
          border
          border-slate-200
          bg-white
          p-2
          shadow-2xl
        "
      >
        {categoryNavigation.map((category, index) => {
          const Icon = categoryIcons[index] ?? LayoutGrid;

          return (
            <DropdownMenuItem
              key={category.href}
              asChild
              className="
                cursor-pointer
                rounded-lg
                p-0
                focus:bg-slate-100
              "
            >
              <Link
                href={category.href}
                className="
                  flex w-full
                  items-center
                  gap-3
                  px-3 py-3
                "
              >
                <span
                  className="
                    flex h-9 w-9
                    shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-[#07143D]/5
                    text-[#07143D]
                  "
                >
                  <Icon className="h-4 w-4" />
                </span>

                <span className="flex-1 text-[13px] font-medium text-slate-800">
                  {category.label}
                </span>

                <ChevronDown className="h-3.5 w-3.5 -rotate-90 text-slate-400" />
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}