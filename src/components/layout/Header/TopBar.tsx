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

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/923001234567",
    icon: FaWhatsapp,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
];

export function TopBar() {
  return (
    <div className="sth-topbar">
      <div className="sth-topbar__container">
        <div className="sth-topbar__socials">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="sth-topbar__social-link"
              >
                <Icon />
              </Link>
            );
          })}
        </div>

        <div className="sth-topbar__trust">
          <div className="sth-topbar__trust-item">
            <ShieldCheck size={15} />

            <span>
              Pakistan&apos;s Trusted Solar Energy Partner
            </span>
          </div>

          <span className="sth-topbar__divider" />

          <div className="sth-topbar__trust-item">
            <Star size={15} />

            <span>10+ Years of Excellence</span>
          </div>
        </div>

        <div className="sth-topbar__contact">
          <a
            href="tel:+923001234567"
            className="sth-topbar__contact-link"
          >
            <Phone size={15} />

            <span>+92 300 1234567</span>
          </a>

          <span className="sth-topbar__divider" />

          <a
            href="mailto:info@solartradehub.pk"
            className="sth-topbar__contact-link"
          >
            <Mail size={15} />

            <span>info@solartradehub.pk</span>
          </a>
        </div>
      </div>
    </div>
  );
}