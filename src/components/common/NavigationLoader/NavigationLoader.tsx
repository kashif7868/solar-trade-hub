"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  usePathname,
  useSearchParams,
} from "next/navigation";

import "@/components/animations/css/common/navigation-loader.css";

const MINIMUM_LOADER_TIME = 650;

export function NavigationLoader() {
  const pathname = usePathname();
  const searchParams =
    useSearchParams();

  const [isLoading, setIsLoading] =
    useState(false);

  const startedAtRef =
    useRef<number | null>(null);

  const hideTimerRef =
    useRef<number | null>(null);

  const showLoader = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(
        hideTimerRef.current
      );

      hideTimerRef.current = null;
    }

    startedAtRef.current =
      Date.now();

    setIsLoading(true);
  };

  const hideLoader = () => {
    const startedAt =
      startedAtRef.current;

    /*
     * Loader wasn't started by
     * a navigation click.
     */
    if (!startedAt) {
      setIsLoading(false);
      return;
    }

    const elapsed =
      Date.now() - startedAt;

    const remaining =
      Math.max(
        MINIMUM_LOADER_TIME -
          elapsed,
        0
      );

    hideTimerRef.current =
      window.setTimeout(
        () => {
          setIsLoading(false);

          startedAtRef.current =
            null;

          hideTimerRef.current =
            null;
        },
        remaining
      );
  };

  /*
   * Route navigation complete.
   *
   * Don't immediately hide.
   * Respect minimum visible time.
   */
  useEffect(() => {
    hideLoader();
  }, [
    pathname,
    searchParams,
  ]);

  useEffect(() => {
    const handleClick = (
      event: MouseEvent
    ) => {
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

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

      if (
        anchor.target === "_blank"
      ) {
        return;
      }

      if (
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

      /*
       * Don't show loader for
       * external websites.
       */
      if (
        destination.origin !==
        window.location.origin
      ) {
        return;
      }

      const current =
        new URL(
          window.location.href
        );

      /*
       * Same exact page.
       */
      if (
        destination.href ===
        current.href
      ) {
        return;
      }

      /*
       * Don't show fullscreen
       * loader for same-page anchors.
       *
       * Example:
       * /#solar-prices
       */
      const samePage =
        destination.pathname ===
          current.pathname &&
        destination.search ===
          current.search;

      if (
        samePage &&
        destination.hash
      ) {
        return;
      }

      showLoader();
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
    };
  }, []);

  /*
   * Absolute failsafe.
   *
   * If something goes wrong,
   * loader cannot remain stuck.
   */
  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const failsafe =
      window.setTimeout(
        () => {
          setIsLoading(false);

          startedAtRef.current =
            null;
        },
        6000
      );

    return () => {
      window.clearTimeout(
        failsafe
      );
    };
  }, [isLoading]);

  /*
   * Clean pending timer
   * when component unmounts.
   */
  useEffect(() => {
    return () => {
      if (
        hideTimerRef.current
      ) {
        window.clearTimeout(
          hideTimerRef.current
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