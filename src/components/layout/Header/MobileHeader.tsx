"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FormEvent,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Search,
  X,
} from "lucide-react";

import {
  usePathname,
  useRouter,
} from "next/navigation";

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
  const router = useRouter();

  const [isSearchOpen, setIsSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  const isActive = (
    href: string
  ) => {
    if (href === "/") {
      return pathname === "/";
    }

    const cleanHref =
      href.split("#")[0];

    if (!cleanHref) {
      return false;
    }

    return pathname.startsWith(
      cleanHref
    );
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearch = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const query =
      searchQuery.trim();

    if (!query) {
      return;
    }

    router.push(
      `/shop?search=${encodeURIComponent(
        query
      )}`
    );
  };

  return (
    <header className="sth-mobile-header">
      <div
        className={[
          "sth-mobile-header__main",
          isSearchOpen
            ? "sth-mobile-header__main--search-open"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {!isSearchOpen ? (
          <>
            <Link
              href="/"
              className="sth-mobile-header__logo"
              aria-label="Solar Trade Hub Home"
            >
              <Image
                src="/logos/solar-trade-hub-logo-dark.png"
                alt="Solar Trade Hub"
                width={125}
                height={44}
                priority
              />
            </Link>

            <div className="sth-mobile-header__actions">
              <button
                type="button"
                className="sth-mobile-header__action"
                aria-label="Search products"
                onClick={openSearch}
              >
                <Search
                  size={19}
                  strokeWidth={1.8}
                />
              </button>

              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="sth-mobile-header__action"
                    aria-label="Open navigation"
                  >
                    <Menu
                      size={21}
                      strokeWidth={1.8}
                    />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="sth-mobile-menu"
                >
                  <div className="sth-mobile-menu__header">
                    <span className="sth-mobile-menu__heading">
                      Menu
                    </span>

                    <SheetClose asChild>
                      <button
                        type="button"
                        className="sth-mobile-menu__close"
                        aria-label="Close navigation"
                      >
                        <X
                          size={19}
                          strokeWidth={1.8}
                        />
                      </button>
                    </SheetClose>
                  </div>

                  <div className="sth-mobile-menu__body">
                    <nav
                      className="sth-mobile-menu__nav"
                      aria-label="Mobile navigation"
                    >
                      {mainNavigation.map(
                        (item) => {
                          const active =
                            isActive(
                              item.href
                            );

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
                              key={`${item.label}-${item.href}`}
                              asChild
                            >
                              <Link
                                href={
                                  item.href
                                }
                                className={
                                  className
                                }
                              >
                                <span>
                                  {
                                    item.label
                                  }
                                </span>

                                <ChevronRight
                                  size={14}
                                  strokeWidth={
                                    1.7
                                  }
                                />
                              </Link>
                            </SheetClose>
                          );
                        }
                      )}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </>
        ) : (
          <form
            className="sth-mobile-header__search-mode"
            onSubmit={handleSearch}
          >
            <button
              type="button"
              className="sth-mobile-header__search-back"
              aria-label="Close search"
              onClick={closeSearch}
            >
              <ChevronLeft
                size={20}
                strokeWidth={1.8}
              />
            </button>

            <div className="sth-mobile-header__search-box">
              <Search
                size={17}
                strokeWidth={1.8}
              />

              <input
                type="search"
                autoFocus
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(
                    event.target.value
                  )
                }
                placeholder="Search products, brands..."
                aria-label="Search products"
              />

              {searchQuery && (
                <button
                  type="button"
                  className="sth-mobile-header__search-clear"
                  aria-label="Clear search"
                  onClick={() =>
                    setSearchQuery("")
                  }
                >
                  <X
                    size={17}
                    strokeWidth={1.8}
                  />
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </header>
  );
}