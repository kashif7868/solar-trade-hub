"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import "@/components/animations/css/common/navigation-loader.css";

const MINIMUM_LOADER_TIME = 700;

export function NavigationLoader() {
  const [
    isLoading,
    setIsLoading,
  ] = useState(false);

  const timerRef =
    useRef<number | null>(null);

  useEffect(() => {
    const handleClick = (
      event: MouseEvent
    ) => {
      /*
       * Ignore modified clicks.
       */
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      /*
       * Only left mouse click.
       */
      if (event.button !== 0) {
        return;
      }

      const target =
        event.target as HTMLElement;

      const anchor =
        target.closest(
          "a"
        ) as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      /*
       * New tab / downloads.
       */
      if (
        anchor.target ===
          "_blank" ||
        anchor.hasAttribute(
          "download"
        )
      ) {
        return;
      }

      const href =
        anchor.getAttribute(
          "href"
        );

      if (!href) {
        return;
      }

      /*
       * Ignore special links.
       */
      if (
        href.startsWith(
          "mailto:"
        ) ||
        href.startsWith(
          "tel:"
        ) ||
        href.startsWith(
          "javascript:"
        )
      ) {
        return;
      }

      let destination: URL;

      try {
        destination =
          new URL(
            anchor.href,
            window.location.href
          );
      } catch {
        return;
      }

      const current =
        new URL(
          window.location.href
        );

      /*
       * External links.
       */
      if (
        destination.origin !==
        current.origin
      ) {
        return;
      }

      /*
       * Exact same URL.
       */
      if (
        destination.href ===
        current.href
      ) {
        return;
      }

      /*
       * Same-page anchor links:
       *
       * /#solar-prices
       * /#featured-suppliers
       *
       * No fullscreen loader.
       */
      const sameDocument =
        destination.pathname ===
          current.pathname &&
        destination.search ===
          current.search;

      if (
        sameDocument &&
        destination.hash
      ) {
        return;
      }

      /*
       * Clear previous timer.
       */
      if (timerRef.current) {
        window.clearTimeout(
          timerRef.current
        );
      }

      /*
       * Show loader immediately.
       */
      setIsLoading(true);

      /*
       * Cosmetic minimum duration.
       *
       * We intentionally do not depend
       * on usePathname/useSearchParams.
       * This keeps RootLayout and
       * /_not-found prerender safe.
       */
      timerRef.current =
        window.setTimeout(
          () => {
            setIsLoading(false);

            timerRef.current =
              null;
          },
          MINIMUM_LOADER_TIME
        );
    };

    document.addEventListener(
      "click",
      handleClick,
      true
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClick,
        true
      );

      if (timerRef.current) {
        window.clearTimeout(
          timerRef.current
        );
      }
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className="sth-navigation-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="sth-navigation-loader__content">

        <div className="sth-navigation-loader__mark">

          <span className="sth-navigation-loader__orbit sth-navigation-loader__orbit--orange" />

          <span className="sth-navigation-loader__orbit sth-navigation-loader__orbit--purple" />

          <div className="sth-navigation-loader__core">
            <span className="sth-navigation-loader__sun" />
          </div>

        </div>

        <div className="sth-navigation-loader__brand">

          <span className="sth-navigation-loader__brand-orange">
            SOLAR
          </span>

          <span className="sth-navigation-loader__brand-purple">
            TRADE HUB
          </span>

        </div>

        <div className="sth-navigation-loader__progress">
          <span />
        </div>

        <span className="sth-navigation-loader__status">
          Loading marketplace...
        </span>

      </div>
    </div>
  );
}