import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  ShieldCheck,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#07143D] text-white">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(237,36,54,0.18),transparent_36%)]" />

      {/* red diagonal shape */}
      <div
        className="
          absolute
          bottom-0 right-0
          hidden
          h-full w-[34%]
          bg-[#ED2436]
          lg:block
          [clip-path:polygon(42%_24%,100%_10%,100%_100%,0_100%)]
        "
      />

      {/* subtle lower gradient */}
      <div className="absolute bottom-0 left-0 h-[130px] w-full bg-gradient-to-t from-[#041033] to-transparent" />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1480px]
          items-center
          gap-8
          px-4
          py-12
          sm:px-6
          lg:min-h-[520px]
          lg:grid-cols-[0.92fr_1.08fr]
          lg:px-8
          lg:py-10
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-[650px]">
          <span
            className="
              inline-flex
              rounded-md
              bg-[#ED2436]
              px-3 py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.08em]
            "
          >
            Pakistan&apos;s Solar Marketplace
          </span>

          <h1
            className="
              mt-5
              font-sans
              text-[38px]
              font-extrabold
              leading-[1.08]
              tracking-[-0.02em]
              sm:text-[46px]
              lg:text-[52px]
              xl:text-[58px]
            "
          >
            Buy Solar Products
            <br />
            With Trusted
            <br />

            <span className="text-[#ED2436]">
              Engineering Support
            </span>
          </h1>

          <p className="mt-5 max-w-[600px] text-sm leading-7 text-white/70 sm:text-[15px]">
            Explore solar panels, hybrid inverters, lithium batteries,
            cables, protection boxes and complete solar accessories for
            residential, commercial and industrial projects.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-[13px] text-white/85">
              <ShieldCheck className="h-4 w-4 text-[#ED2436]" />
              <span>Verified Products</span>
            </div>

            <div className="flex items-center gap-2 text-[13px] text-white/85">
              <BadgeCheck className="h-4 w-4 text-[#ED2436]" />
              <span>Zorays Support</span>
            </div>

            <div className="flex items-center gap-2 text-[13px] text-white/85">
              <Headphones className="h-4 w-4 text-[#ED2436]" />
              <span>Fast Inquiry</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="
                inline-flex h-12
                items-center gap-2
                rounded-md
                bg-[#ED2436]
                px-5
                text-sm font-semibold
                text-white
                transition-colors
                hover:bg-[#C91828]
              "
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/get-quote"
              className="
                inline-flex h-12
                items-center justify-center
                rounded-md
                bg-white
                px-5
                text-sm font-semibold
                text-[#07143D]
                transition-colors
                hover:bg-slate-100
              "
            >
              Get Solar Quote
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="
            relative
            z-10
            flex
            min-h-[340px]
            items-center
            justify-center
            lg:min-h-[460px]
            lg:justify-end
          "
        >
          <div
            className="
              absolute
              right-[4%]
              top-[12%]
              h-[70%]
              w-[70%]
              rounded-full
              bg-[#ED2436]/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              h-[340px]
              w-full
              max-w-[650px]
              items-center
              justify-center
              overflow-hidden
              rounded-[28px]
              bg-white
              p-5
              shadow-[0_30px_70px_rgba(0,0,0,0.28)]
              sm:h-[390px]
              lg:h-[430px]
              lg:max-w-[680px]
            "
          >
            <Image
              src="https://solarstepza.co.za/cdn/shop/collections/COMBO_COLLECTION_PIC.png?v=1734085240&width=1500"
              alt="Solar inverter, battery and solar panel system"
              width={900}
              height={900}
              priority
              className="
                h-full
                w-full
                object-contain
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}