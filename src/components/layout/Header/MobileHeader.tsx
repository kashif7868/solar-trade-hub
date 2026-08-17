"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Menu,
  ShoppingCart,
  UserRound,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { mainNavigation } from "@/data/headerData";

import { SearchBar } from "./SearchBar";

export function MobileHeader() {
  const cartCount = 0;

  return (
    <div className="bg-[#07143D] text-white lg:hidden">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-md
                  border border-white/10
                  bg-white/[0.02]
                  transition-colors
                  hover:bg-white/10
                "
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="
                flex h-dvh
                w-[320px]
                flex-col
                overflow-hidden
                p-0
                sm:w-[360px]
              "
            >
              <SheetHeader className="shrink-0 border-b border-slate-200 bg-white px-5 py-4">
                <SheetTitle className="flex items-center">
                  <Image
                    src="/logos/solar-trade-hub-logo-dark.svg"
                    alt="Solar Trade Hub"
                    width={150}
                    height={46}
                    className="h-auto w-[145px]"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Navigation
                </p>

                <nav className="space-y-1">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                        flex min-h-11
                        items-center
                        rounded-lg
                        px-3
                        text-[15px]
                        font-medium
                        text-slate-800
                        transition-colors
                        hover:bg-slate-100
                        hover:text-[#07143D]
                      "
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="shrink-0 border-t border-slate-200 bg-white p-4">
                <div className="grid gap-2">
                  <Link
                    href="/get-quote"
                    className="
                      flex h-11
                      items-center justify-center
                      rounded-md
                      bg-[#ED2436]
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      transition-colors
                      hover:bg-[#C91828]
                    "
                  >
                    Get Solar Quote
                  </Link>

                  <Link
                    href="/login"
                    className="
                      flex h-11
                      items-center justify-center
                      rounded-md
                      border border-slate-200
                      bg-white
                      px-4
                      text-sm
                      font-semibold
                      text-[#07143D]
                      transition-colors
                      hover:bg-slate-50
                    "
                  >
                    Login / Signup
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link
            href="/"
            aria-label="Solar Trade Hub Home"
            className="flex items-center"
          >
            <Image
              src="/logos/solar-trade-hub-logo-white.svg"
              alt="Solar Trade Hub"
              width={150}
              height={46}
              priority
              className="h-auto w-[132px] sm:w-[145px]"
            />
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Link
            href="/login"
            aria-label="Login or signup"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-md
              transition-colors
              hover:bg-white/10
            "
          >
            <UserRound className="h-5 w-5" />
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="
              relative
              flex h-10 w-10
              items-center justify-center
              rounded-md
              transition-colors
              hover:bg-white/10
            "
          >
            <ShoppingCart className="h-5 w-5" />

            <span
              className="
                absolute -right-1 -top-1
                flex h-5 min-w-5
                items-center justify-center
                rounded-full
                bg-[#ED2436]
                px-1
                text-[10px]
                font-bold
                text-white
              "
            >
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      <div className="px-4 pb-3 sm:px-6">
        <SearchBar />
      </div>
    </div>
  );
}