"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import "@/components/animations/css/common/scroll-reveal.css";

type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "fade"
  | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  duration = 700,
  once = true,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(
    null
  );

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            if (once) {
              observer.unobserve(
                entry.target
              );
            }
          } else if (!once) {
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin:
            "0px 0px -40px 0px",
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={[
        "sth-scroll-reveal",
        `sth-scroll-reveal--${variant}`,
        isVisible
          ? "sth-scroll-reveal--visible"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--sth-reveal-delay":
            `${delay}ms`,
          "--sth-reveal-duration":
            `${duration}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}