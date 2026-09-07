"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ChevronRight,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { mainNavigation } from "@/data/headerData";

import "@/components/animations/css/header/mobile-header.css";

export function MobileHeader() {
  const cartCount = 0;

  return (
    <div className="sth-mobile-header">
      <div className="sth-mobile-header__trust">
        <span>Pakistan&apos;s Trusted Solar Energy Partner</span>
      </div>

      <div className="sth-mobile-header__main">
        <Link
          href="/"
          className="sth-mobile-header__logo"
          aria-label="Solar Trade Hub Home"
        >
          <Image
            src="/logos/solar-trade-hub-logo-dark.svg"
            alt="Solar Trade Hub"
            width={122}
            height={42}
            priority
          />
        </Link>

        <div className="sth-mobile-header__actions">
          <Link
            href="/search"
            aria-label="Search"
            className="sth-mobile-header__action"
          >
            <Search size={18} strokeWidth={1.7} />
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="sth-mobile-header__action"
          >
            <ShoppingCart size={19} strokeWidth={1.7} />

            {cartCount > 0 && (
              <span className="sth-mobile-header__badge">
                {cartCount}
              </span>
            )}
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="sth-mobile-header__menu-trigger"
                aria-label="Open navigation"
              >
                <Menu size={20} strokeWidth={1.7} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="sth-mobile-menu"
            >
              <div className="sth-mobile-menu__header">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="sth-mobile-menu__logo"
                    aria-label="Solar Trade Hub Home"
                  >
                    <Image
                      src="/logos/solar-trade-hub-logo-dark.svg"
                      alt="Solar Trade Hub"
                      width={132}
                      height={46}
                    />
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <button
                    type="button"
                    className="sth-mobile-menu__close"
                    aria-label="Close navigation"
                  >
                    <X size={18} strokeWidth={1.8} />
                  </button>
                </SheetClose>
              </div>

              <div className="sth-mobile-menu__body">
                <p className="sth-mobile-menu__title">
                  Navigation
                </p>

                <nav
                  className="sth-mobile-menu__nav"
                  aria-label="Mobile navigation"
                >
                  {mainNavigation.map((item) => (
                    <SheetClose
                      key={item.href}
                      asChild
                    >
                      <Link
                        href={item.href}
                        className={[
                          "sth-mobile-menu__link",
                          item.accent
                            ? "sth-mobile-menu__link--accent"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <span>{item.label}</span>

                        <ChevronRight
                          size={14}
                          strokeWidth={1.7}
                        />
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>

              <div className="sth-mobile-menu__footer">
                <SheetClose asChild>
                  <Link
                    href="/get-quote"
                    className="sth-mobile-menu__quote"
                  >
                    Get Solar Quote
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}