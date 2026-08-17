"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { useState } from "react";

interface CategoryCardProps {
  title: string;
  href: string;
  image: string;
}

export function CategoryCard({
  title,
  href,
  image,
}: CategoryCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={href}
      className="
        group
        flex min-h-[230px]
        flex-col
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#ED2436]/30
        hover:shadow-lg
      "
    >
      <div
        className="
          relative
          flex h-[145px]
          items-center
          justify-center
          overflow-hidden
          rounded-lg
          bg-slate-50
        "
      >
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            width={150}
            height={130}
            onError={() => setImageError(true)}
            className="
              h-[120px]
              w-auto
              object-contain
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-slate-400">
            <ImageIcon className="h-8 w-8" />

            <span className="text-[11px] font-medium">
              Image Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-[14px] font-semibold text-slate-900">
          {title}
        </h3>

        <span
          className="
            mt-2
            inline-flex
            items-center
            gap-1.5
            text-xs
            font-semibold
            text-[#07143D]
            transition-colors
            group-hover:text-[#ED2436]
          "
        >
          View Products

          <ArrowRight
            className="
              h-3.5 w-3.5
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </span>
      </div>
    </Link>
  );
}