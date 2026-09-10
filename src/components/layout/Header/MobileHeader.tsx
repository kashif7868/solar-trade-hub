"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  ImageOff,
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
import { useProducts } from "@/hooks/useProducts";

import "@/components/animations/css/header/mobile-header.css";

type SearchProductImageProps = {
  src?: string;
  alt: string;
};

function SearchProductImage({
  src,
  alt,
}: SearchProductImageProps) {
  const [hasError, setHasError] =
    useState(false);

  if (!src || hasError) {
    return (
      <div className="sth-mobile-search-results__image-fallback">
        <ImageOff
          size={20}
          strokeWidth={1.5}
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

export function MobileHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const [isSearchOpen, setIsSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  const { data: products = [] } =
    useProducts();

  const isActive = (href: string) => {
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

  const filteredProducts =
    useMemo(() => {
      const query =
        searchQuery
          .trim()
          .toLowerCase();

      if (!query) {
        return [];
      }

      return products
        .filter((product) => {
          const searchableText = [
            product.name,
            product.brand,
            product.category,
            product.capacity,
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          return searchableText.includes(
            query
          );
        })
        .slice(0, 8);
    }, [products, searchQuery]);

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

    setIsSearchOpen(false);

    router.push(
      `/shop?search=${encodeURIComponent(
        query
      )}`
    );
  };

  const handleProductSelect = (
    slug: string
  ) => {
    if (!slug) {
      return;
    }

    setIsSearchOpen(false);
    setSearchQuery("");

    router.push(
      `/products/${slug}`
    );
  };

  const handleViewAll = () => {
    const query =
      searchQuery.trim();

    if (!query) {
      return;
    }

    setIsSearchOpen(false);

    router.push(
      `/shop?search=${encodeURIComponent(
        query
      )}`
    );
  };

  return (
    <>
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
                    size={18}
                    strokeWidth={1.6}
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
                        size={20}
                        strokeWidth={1.6}
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
                            size={18}
                            strokeWidth={1.6}
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
                                      1.6
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
                  size={19}
                  strokeWidth={1.6}
                />
              </button>

              <div className="sth-mobile-header__search-box">
                <Search
                  size={17}
                  strokeWidth={1.6}
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
                      size={16}
                      strokeWidth={1.6}
                    />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {isSearchOpen &&
          searchQuery.trim() && (
            <div className="sth-mobile-search-results">
              <div className="sth-mobile-search-results__inner">
                {filteredProducts.length >
                0 ? (
                  <>
                    <div className="sth-mobile-search-results__heading">
                      Products
                    </div>

                    <div className="sth-mobile-search-results__list">
                      {filteredProducts.map(
                        (product) => (
                          <button
                            key={
                              product.id
                            }
                            type="button"
                            className="sth-mobile-search-results__item"
                            onClick={() =>
                              handleProductSelect(
                                product.slug
                              )
                            }
                          >
                            <div className="sth-mobile-search-results__image">
                              <SearchProductImage
                                src={
                                  product.image
                                }
                                alt={
                                  product.name
                                }
                              />
                            </div>

                            <div className="sth-mobile-search-results__content">
                              <span className="sth-mobile-search-results__name">
                                {
                                  product.name
                                }
                              </span>

                              <span className="sth-mobile-search-results__meta">
                                {[
                                  product.brand,
                                  product.category,
                                  product.capacity,
                                ]
                                  .filter(
                                    Boolean
                                  )
                                  .join(
                                    " • "
                                  )}
                              </span>

                              {product.price !=
                                null && (
                                <span className="sth-mobile-search-results__price">
                                  Rs.{" "}
                                  {Number(
                                    product.price
                                  ).toLocaleString(
                                    "en-PK"
                                  )}
                                </span>
                              )}
                            </div>

                            <ChevronRight
                              className="sth-mobile-search-results__arrow"
                              size={16}
                              strokeWidth={
                                1.6
                              }
                            />
                          </button>
                        )
                      )}
                    </div>

                    <button
                      type="button"
                      className="sth-mobile-search-results__view-all"
                      onClick={
                        handleViewAll
                      }
                    >
                      View all results for
                      &ldquo;
                      {searchQuery}
                      &rdquo;
                    </button>
                  </>
                ) : (
                  <div className="sth-mobile-search-results__empty">
                    <Search
                      size={20}
                      strokeWidth={1.6}
                    />

                    <strong>
                      No products found
                    </strong>

                    <span>
                      Try another product,
                      brand or category.
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
      </header>

      {isSearchOpen &&
        searchQuery.trim() && (
          <button
            type="button"
            aria-label="Close search results"
            className="sth-mobile-search-overlay"
            onClick={closeSearch}
          />
        )}
    </>
  );
}