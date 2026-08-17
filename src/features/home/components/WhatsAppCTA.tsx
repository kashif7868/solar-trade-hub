import Link from "next/link";
import {
  MessageCircle,
  PhoneCall,
} from "lucide-react";

export function WhatsAppCTA() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#07143D] px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#ED2436]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[760px]">
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                <MessageCircle className="h-4 w-4 text-[#ED2436]" />
                Quick Support
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Need Help Choosing the Right Solar Product?
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Talk to our team for product guidance, supplier information,
                pricing support and solar marketplace assistance.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Link
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex h-12
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
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Link>

              <Link
                href="tel:+923000000000"
                className="
                  inline-flex h-12
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
                <PhoneCall className="h-4 w-4" />
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}