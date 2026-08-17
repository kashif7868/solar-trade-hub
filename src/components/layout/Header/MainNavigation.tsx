"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavigation } from "@/data/headerData";

export function MainNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <nav
      aria-label="Main navigation"
      className="hidden border-t border-white/10 bg-[#07143D] lg:block"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[48px] items-center gap-1 overflow-x-auto">
          {mainNavigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group
                  relative
                  flex h-full shrink-0
                  items-center
                  px-4
                  text-[13px]
                  font-medium
                  transition-colors
                  ${
                    active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }
                `}
              >
                {item.label}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-4
                    right-4
                    h-[3px]
                    rounded-t-full
                    bg-[#ED2436]
                    transition-all
                    duration-200
                    ${
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}