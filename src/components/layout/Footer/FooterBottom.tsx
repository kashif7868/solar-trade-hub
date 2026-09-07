import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { footerSocialLinks } from "@/data/footerData";

import "@/components/animations/css/footer/footer-bottom.css";

const socialIcons = {
  Facebook: FaFacebookF,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
};

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="sth-footer-bottom">
      <div className="sth-footer-bottom__container">
        <div className="sth-footer-bottom__legal">
          <p>
            © {currentYear} Solar Trade Hub. All rights reserved.
          </p>

          <div className="sth-footer-bottom__legal-links">
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="sth-footer-bottom__socials">
          {footerSocialLinks.map((item) => {
            const Icon =
              socialIcons[
                item.label as keyof typeof socialIcons
              ];

            if (!Icon) {
              return null;
            }

            const external =
              item.href.startsWith("http");

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={
                  external ? "_blank" : undefined
                }
                rel={
                  external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="sth-footer-bottom__social"
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}