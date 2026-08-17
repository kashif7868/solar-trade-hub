import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { footerContact } from "@/data/footerData";

export function FooterContact() {
  return (
    <div>
      <Link
        href="/"
        aria-label="Solar Trade Hub Home"
        className="inline-flex items-center"
      >
        <Image
          src="/logos/solar-trade-hub-logo-white.svg"
          alt="Solar Trade Hub"
          width={180}
          height={54}
          className="h-auto w-[165px]"
        />
      </Link>

      <p className="mt-5 max-w-[340px] text-sm leading-6 text-white/60">
        Pakistan&apos;s solar marketplace for products, suppliers,
        installers, pricing insights and renewable energy solutions.
      </p>

      <div className="mt-6 space-y-4">
        <a
          href={`tel:${footerContact.phone.replace(/\s+/g, "")}`}
          className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5">
            <Phone className="h-4 w-4 text-[#ED2436]" />
          </span>

          <span>{footerContact.phone}</span>
        </a>

        <a
          href={`mailto:${footerContact.email}`}
          className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5">
            <Mail className="h-4 w-4 text-[#ED2436]" />
          </span>

          <span>{footerContact.email}</span>
        </a>

        <div className="flex items-start gap-3 text-sm text-white/70">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5">
            <MapPin className="h-4 w-4 text-[#ED2436]" />
          </span>

          <span>{footerContact.address}</span>
        </div>
      </div>
    </div>
  );
}