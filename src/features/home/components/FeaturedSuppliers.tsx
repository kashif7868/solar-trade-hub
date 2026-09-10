"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  MapPin,
  Star,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import "@/components/animations/css/home/featured-suppliers.css";

const suppliers = [
  {
    id: 1,
    name: "Solar Trade Hub Partner",
    city: "Lahore",
    rating: 4.9,
    products: 120,
    verified: true,
    cover:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://placehold.co/160x90/ffffff/ff4b1f?text=SOLAR+TRADE+HUB",
  },
  {
    id: 2,
    name: "Energy Solutions Pakistan",
    city: "Islamabad",
    rating: 4.8,
    products: 85,
    verified: true,
    cover:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://placehold.co/160x90/ffffff/5b2eff?text=ENERGY+SOLUTIONS",
  },
  {
    id: 3,
    name: "Green Power Technologies",
    city: "Karachi",
    rating: 4.7,
    products: 96,
    verified: true,
    cover:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://placehold.co/160x90/ffffff/28a745?text=GREEN+POWER",
  },
  {
    id: 4,
    name: "Prime Solar Distribution",
    city: "Rawalpindi",
    rating: 4.8,
    products: 74,
    verified: true,
    cover:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://placehold.co/160x90/ffffff/ff4b1f?text=PRIME+SOLAR",
  },
  {
    id: 5,
    name: "SunVolt Energy",
    city: "Faisalabad",
    rating: 4.6,
    products: 68,
    verified: true,
    cover:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://placehold.co/160x90/ffffff/5b2eff?text=SUNVOLT+ENERGY",
  },
  {
    id: 6,
    name: "Pak Solar Systems",
    city: "Multan",
    rating: 4.7,
    products: 81,
    verified: true,
    cover:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://placehold.co/160x90/ffffff/ff4b1f?text=PAK+SOLAR",
  },
];

export function FeaturedSuppliers() {
  const scrollRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const [activePage, setActivePage] =
    useState(0);

  const [pageCount, setPageCount] =
    useState(1);

  const updatePagination = () => {
    const element =
      scrollRef.current;

    if (!element) return;

    const maxScroll =
      element.scrollWidth -
      element.clientWidth;

    if (maxScroll <= 0) {
      setPageCount(1);
      setActivePage(0);
      return;
    }

    const visibleWidth =
      element.clientWidth;

    const calculatedPages =
      Math.ceil(
        element.scrollWidth /
          visibleWidth
      );

    setPageCount(
      Math.max(
        calculatedPages,
        1
      )
    );

    const page =
      Math.round(
        element.scrollLeft /
          visibleWidth
      );

    setActivePage(
      Math.min(
        page,
        calculatedPages - 1
      )
    );
  };

  const scrollToPage = (
    page: number
  ) => {
    const element =
      scrollRef.current;

    if (!element) return;

    element.scrollTo({
      left:
        element.clientWidth *
        page,
      behavior: "smooth",
    });

    setActivePage(page);
  };

  useEffect(() => {
    const element =
      scrollRef.current;

    if (!element) return;

    updatePagination();

    element.addEventListener(
      "scroll",
      updatePagination,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updatePagination
    );

    return () => {
      element.removeEventListener(
        "scroll",
        updatePagination
      );

      window.removeEventListener(
        "resize",
        updatePagination
      );
    };
  }, []);

  return (
    <section
      id="featured-suppliers"
      className="sth-suppliers"
    >
      <div className="sth-suppliers__container">
        <div className="sth-suppliers__header">
          <div className="sth-suppliers__heading">
            <span className="sth-suppliers__eyebrow">
              <span className="sth-suppliers__eyebrow-line" />
              Marketplace Partners
            </span>

            <h2 className="sth-suppliers__title">
              Featured{" "}
              <span>
                Suppliers
              </span>
            </h2>

            <p className="sth-suppliers__description">
              Discover verified
              suppliers offering solar
              products and solutions
              across major cities in
              Pakistan.
            </p>
          </div>

          <Link
            href="/suppliers"
            className="sth-suppliers__view-all"
          >
            <span>
              View All Suppliers
            </span>

            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        <div
          ref={scrollRef}
          className="sth-suppliers__scroll"
        >
          <div className="sth-suppliers__grid">
            {suppliers.map(
              (supplier) => (
                <article
                  key={
                    supplier.id
                  }
                  className="sth-supplier-card"
                >
                  <div className="sth-supplier-card__media">
                    <Image
                      src={
                        supplier.cover
                      }
                      alt={`${supplier.city} supplier`}
                      fill
                      unoptimized
                      sizes="(max-width: 767px) 85vw, (max-width: 1100px) 45vw, 24vw"
                      className="sth-supplier-card__cover"
                    />

                    {supplier.verified && (
                      <span className="sth-supplier-card__verified">
                        <BadgeCheck
                          size={13}
                          strokeWidth={
                            1.8
                          }
                        />

                        Verified
                      </span>
                    )}

                    <div className="sth-supplier-card__logo">
                      <Image
                        src={
                          supplier.logo
                        }
                        alt={`${supplier.name} logo`}
                        fill
                        unoptimized
                        sizes="120px"
                        className="sth-supplier-card__logo-image"
                      />
                    </div>
                  </div>

                  <div className="sth-supplier-card__body">
                    <div className="sth-supplier-card__content">
                      <h3>
                        {
                          supplier.name
                        }
                      </h3>

                      <div className="sth-supplier-card__location">
                        <MapPin
                          size={14}
                          strokeWidth={
                            1.8
                          }
                        />

                        <span>
                          {
                            supplier.city
                          }
                        </span>
                      </div>
                    </div>

                    <div className="sth-supplier-card__divider" />

                    <div className="sth-supplier-card__meta">
                      <div className="sth-supplier-card__metric">
                        <span className="sth-supplier-card__metric-icon sth-supplier-card__metric-icon--rating">
                          <Star
                            size={
                              17
                            }
                            fill="currentColor"
                            strokeWidth={
                              1.5
                            }
                          />
                        </span>

                        <div>
                          <strong>
                            {
                              supplier.rating
                            }
                          </strong>

                          <span>
                            Supplier
                            Rating
                          </span>
                        </div>
                      </div>

                      <div className="sth-supplier-card__meta-divider" />

                      <div className="sth-supplier-card__metric">
                        <span className="sth-supplier-card__metric-icon sth-supplier-card__metric-icon--products">
                          <Box
                            size={
                              17
                            }
                            strokeWidth={
                              1.8
                            }
                          />
                        </span>

                        <div>
                          <strong>
                            {
                              supplier.products
                            }
                          </strong>

                          <span>
                            Products
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/suppliers/${supplier.id}`}
                      className="sth-supplier-card__button"
                    >
                      <span>
                        View Supplier
                      </span>

                      <ArrowRight
                        size={14}
                        strokeWidth={
                          1.8
                        }
                      />
                    </Link>
                  </div>
                </article>
              )
            )}
          </div>
        </div>

        {pageCount > 1 && (
          <div className="sth-suppliers__pagination">
            {Array.from({
              length: pageCount,
            }).map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to supplier page ${
                    index + 1
                  }`}
                  onClick={() =>
                    scrollToPage(
                      index
                    )
                  }
                  className={[
                    "sth-suppliers__pagination-dot",
                    activePage ===
                    index
                      ? "sth-suppliers__pagination-dot--active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}