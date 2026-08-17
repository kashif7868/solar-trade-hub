import Image from "next/image";
import Link from "next/link";

import {
  CircleUserRound,
  PackageSearch,
  Phone,
  Store,
} from "lucide-react";

import {
  headerContact,
  topBarLinks,
} from "@/data/headerData";

const topBarIcons = [
  Store,
  CircleUserRound,
  PackageSearch,
];

export function TopBar() {
  return (
    <div className="bg-[#07143D] text-white">
      <div className="mx-auto flex min-h-[78px] max-w-[1480px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Solar Trade Hub Home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logos/solar-trade-hub-logo-white.svg"
            alt="Solar Trade Hub"
            width={200}
            height={64}
            priority
            className="h-auto w-[185px] object-contain"
          />
        </Link>

        <div className="flex items-center gap-5 xl:gap-7">
          {topBarLinks.map((item, index) => {
            const Icon = topBarIcons[index];

            return (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  flex items-center gap-2
                  text-[12px] font-medium
                  text-white/80
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    flex h-7 w-7
                    shrink-0
                    items-center justify-center
                    rounded-full
                    border border-white/15
                    bg-white/[0.03]
                    transition-colors
                    group-hover:border-[#ED2436]/50
                  "
                >
                  {Icon && (
                    <Icon className="h-3.5 w-3.5 text-[#ED2436]" />
                  )}
                </span>

                <span className="whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            );
          })}

          <div className="h-7 w-px bg-white/10" />

          <a
            href={`tel:${headerContact.phone.replace(/\s+/g, "")}`}
            className="
              flex items-center gap-2
              whitespace-nowrap
              text-sm font-semibold
              text-white
              transition-colors
              hover:text-[#ED2436]
            "
          >
            <Phone className="h-4 w-4" />
            <span>{headerContact.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}