"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const cartCount = 0;

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sth-mobile-header">
      {/* Trust strip */}
      <div className="sth-mobile-header__trust">
        <span>
          Pakistan&apos;s Trusted Solar Energy Partner
        </span>
      </div>

      {/* Main mobile header */}
      <div className="sth-mobile-header__main">
        <Link
          href="/"
          className="sth-mobile-header__logo"
          aria-label="Solar Trade Hub Home"
        >
          <Image
            src="/logos/solar-trade-hub-logo-dark.svg"
            alt="Solar Trade Hub"
            width={140}
            height={50}
            priority
          />
        </Link>

        <div className="sth-mobile-header__actions">
          <Link
            href="/search"
            aria-label="Search"
            className="sth-mobile-header__action"
          >
            <Search size={18} strokeWidth={1.8} />
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="sth-mobile-header__action"
          >
            <ShoppingCart
              size={18}
              strokeWidth={1.8}
            />

            <span className="sth-mobile-header__badge">
              {cartCount}
            </span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="sth-mobile-header__action sth-mobile-header__menu-trigger"
                aria-label="Open navigation"
              >
                <Menu
                  size={19}
                  strokeWidth={1.8}
                />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="sth-mobile-menu"
            >
              {/* Drawer header */}
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
                      width={140}
                      height={50}
                    />
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <button
                    type="button"
                    className="sth-mobile-menu__close"
                    aria-label="Close navigation"
                  >
                    <X
                      size={18}
                      strokeWidth={1.8}
                    />
                  </button>
                </SheetClose>
              </div>

              {/* Drawer body */}
              <div className="sth-mobile-menu__body">
                <p className="sth-mobile-menu__title">
                  Navigation
                </p>

                <nav
                  className="sth-mobile-menu__nav"
                  aria-label="Mobile navigation"
                >
                  {mainNavigation.map((item) => {
                    const active =
                      isActive(item.href);

                    const className = [
                      "sth-mobile-menu__link",
                      active
                        ? "sth-mobile-menu__link--active"
                        : "",
                      item.accent
                        ? "sth-mobile-menu__link--accent"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return (
                      <SheetClose
                        key={item.href}
                        asChild
                      >
                        <Link
                          href={item.href}
                          className={className}
                        >
                          <span>
                            {item.label}
                          </span>

                          <ChevronRight
                            size={14}
                            strokeWidth={1.7}
                          />
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer footer */}
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
    </header>
  );
}