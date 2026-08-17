import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { footerSocialLinks } from "@/data/footerData";

const socialIcons = {
  Facebook: FaFacebookF,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
};

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-5 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:gap-4">
          <p>
            © {currentYear} Solar Trade Hub. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {footerSocialLinks.map((item) => {
            const Icon =
              socialIcons[
                item.label as keyof typeof socialIcons
              ];

            if (!Icon) {
              return null;
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-md
                  border border-white/10
                  bg-white/5
                  text-white/70
                  transition-all
                  hover:border-[#ED2436]/50
                  hover:bg-[#ED2436]
                  hover:text-white
                "
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}