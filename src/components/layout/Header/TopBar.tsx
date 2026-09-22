import Link from "next/link";

import {
  Mail,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import "@/components/animations/css/header/topbar.css";

/* ========================================
   SOCIAL LINKS
======================================== */

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/923111163264",
    icon: FaWhatsapp,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/zoraysinc",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/zoraysinc",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/showcase/zorays'%E2%80%8B-careers/",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/zorays",
    icon: FaYoutube,
  },
];

/* ========================================
   TOP BAR
======================================== */

export function TopBar() {
  return (
    <div className="sth-topbar">
      <div className="sth-topbar__container">
        {/* SOCIAL LINKS */}
        <div className="sth-topbar__socials">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="sth-topbar__social-link"
              >
                <Icon />
              </Link>
            );
          })}
        </div>

        {/* TRUST MESSAGE */}
        <div className="sth-topbar__trust">
          <div className="sth-topbar__trust-item">
            <ShieldCheck
              size={14}
              strokeWidth={1.9}
            />

            <span>
              Pakistan&apos;s Trusted Solar Energy Partner
            </span>
          </div>

          <span className="sth-topbar__divider" />

          <div className="sth-topbar__trust-item">
            <Star
              size={14}
              strokeWidth={1.9}
            />

            <span>
              10+ Years of Excellence
            </span>
          </div>
        </div>

        {/* CONTACT */}
        <div className="sth-topbar__contact">
          <a
            href="tel:+923111163264"
            className="sth-topbar__contact-link"
          >
            <Phone
              size={14}
              strokeWidth={1.9}
            />

            <span>
              +92 311 1163264
            </span>
          </a>

          <span className="sth-topbar__divider" />

          <a
            href="mailto:sales@solartradehub.co"
            className="sth-topbar__contact-link"
          >
            <Mail
              size={14}
              strokeWidth={1.9}
            />

            <span>
              sales@solartradehub.co
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}