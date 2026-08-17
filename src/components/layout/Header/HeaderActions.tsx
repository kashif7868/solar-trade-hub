"use client";

import Link from "next/link";
import {
  FileText,
  ShoppingCart,
  UserRound,
} from "lucide-react";

export function HeaderActions() {
  const cartCount = 0;

  return (
    <div className="flex items-center text-white">
      <Link
        href="/get-quote"
        className="
          flex items-center gap-3
          border-l border-r border-white/10
          px-5 py-1
          transition-colors
          hover:bg-white/5
        "
      >
        <span
          className="
            flex h-10 w-10
            shrink-0
            items-center justify-center
            rounded-full
            border border-white/15
            bg-white/[0.02]
          "
        >
          <FileText className="h-4 w-4 text-[#ED2436]" />
        </span>

        <span className="leading-tight">
          <span className="block text-[10px] text-white/55">
            Get
          </span>

          <span className="block whitespace-nowrap text-[13px] font-semibold">
            Solar Quote
          </span>
        </span>
      </Link>

      <Link
        href="/login"
        className="
          flex items-center gap-3
          border-r border-white/10
          px-5 py-1
          transition-colors
          hover:bg-white/5
        "
      >
        <span
          className="
            flex h-10 w-10
            shrink-0
            items-center justify-center
            rounded-full
            border border-white/15
            bg-white/[0.02]
          "
        >
          <UserRound className="h-4 w-4 text-[#ED2436]" />
        </span>

        <span className="whitespace-nowrap text-[13px] font-medium">
          Login / Signup
        </span>
      </Link>

      <Link
        href="/cart"
        aria-label="Shopping cart"
        className="
          relative ml-4
          flex h-11 w-11
          items-center justify-center
          rounded-md
          text-white
          transition-colors
          hover:bg-white/10
        "
      >
        <ShoppingCart className="h-6 w-6" />

        <span
          className="
            absolute -right-1 -top-1
            flex h-5 min-w-5
            items-center justify-center
            rounded-full
            bg-[#ED2436]
            px-1
            text-[10px]
            font-bold
            text-white
          "
        >
          {cartCount}
        </span>
      </Link>
    </div>
  );
}