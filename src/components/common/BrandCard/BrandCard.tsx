"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2 } from "lucide-react";
import { useState } from "react";

interface BrandCardProps {
  name: string;
  href: string;
  logo: string;
}

export function BrandCard({
  name,
  href,
  logo,
}: BrandCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={href}
      className="
        group
        flex min-h-[120px]
        items-center
        justify-center
        rounded-xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#ED2436]/30
        hover:shadow-lg
      "
    >
      {!imageError ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={140}
          height={70}
          onError={() => setImageError(true)}
          className="
            h-[55px]
            w-auto
            max-w-[130px]
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-center text-slate-400">
          <Building2 className="h-7 w-7" />

          <span className="text-xs font-semibold text-slate-600">
            {name}
          </span>
        </div>
      )}
    </Link>
  );
}