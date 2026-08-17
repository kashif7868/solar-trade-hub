import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  MessageCircle,
} from "lucide-react";

export function QuoteCTA() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#07143D] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ED2436]/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                <ClipboardList className="h-4 w-4 text-[#ED2436]" />
                Need a Custom Solar Solution?
              </span>

              <h2 className="mt-5 max-w-[720px] text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px]">
                Get Multiple Solar Quotes
                <span className="text-[#ED2436]">
                  {" "}From Trusted Suppliers
                </span>
              </h2>

              <p className="mt-4 max-w-[680px] text-sm leading-7 text-white/65 sm:text-base">
                Share your project requirements and connect with relevant
                suppliers, installers and solar solution providers through one
                streamlined request.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <BadgeCheck className="h-4 w-4 text-[#ED2436]" />
                  Verified suppliers
                </div>

                <div className="flex items-center gap-2 text-sm text-white/80">
                  <BadgeCheck className="h-4 w-4 text-[#ED2436]" />
                  Faster comparison
                </div>

                <div className="flex items-center gap-2 text-sm text-white/80">
                  <BadgeCheck className="h-4 w-4 text-[#ED2436]" />
                  Technical assistance
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">
                Start Your Inquiry
              </p>

              <p className="mt-2 text-xs leading-5 text-white/55">
                Tell us what you need and we&apos;ll help you connect with the
                right solar marketplace partners.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/get-quote"
                  className="
                    flex h-12 w-full
                    items-center justify-center gap-2
                    rounded-md
                    bg-[#ED2436]
                    px-5
                    text-sm font-semibold
                    text-white
                    transition-colors
                    hover:bg-[#C91828]
                  "
                >
                  Get Solar Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="
                    flex h-12 w-full
                    items-center justify-center gap-2
                    rounded-md
                    border border-white/15
                    bg-white/5
                    px-5
                    text-sm font-semibold
                    text-white
                    transition-colors
                    hover:bg-white/10
                  "
                >
                  <MessageCircle className="h-4 w-4" />
                  Talk to Our Team
                </Link>
              </div>

              <p className="mt-4 text-center text-[11px] text-white/40">
                No obligation. Submit your requirement and compare options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}