import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import {
  footerContact,
  footerSocialLinks,
} from "@/data/footerData";

import "@/components/animations/css/footer/footer-contact.css";

const socialIcons = {
  Facebook: FaFacebookF,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
};

export function FooterContact() {
  return (
    <div className="sth-footer-contact">
      {/* LOGO */}

      <Link
        href="/"
        aria-label="Solar Trade Hub Home"
        className="sth-footer-contact__logo"
      >
        <Image
          src="/logos/solar-trade-hub-logo-dark.png"
          alt="Solar Trade Hub"
          width={170}
          height={56}
          className="sth-footer-contact__logo-image"
        />
      </Link>

      {/* DESCRIPTION */}

      <p className="sth-footer-contact__description">
        Pakistan&apos;s solar marketplace for products, suppliers,
        installers, pricing insights and renewable energy solutions.
      </p>

      {/* CONTACT INFORMATION */}

      <div className="sth-footer-contact__list">
        {/* TELEPHONE */}

        <div className="sth-footer-contact__item">
          <span className="sth-footer-contact__icon">
            <Phone
              size={15}
              strokeWidth={1.8}
            />
          </span>

          <div className="sth-footer-contact__text">
            {footerContact.telephone.map(
              (telephone, index) => (
                <span key={telephone.href}>
                  {index > 0 && (
                    <span aria-hidden="true">
                      {" | "}
                    </span>
                  )}

                  <a
                    href={telephone.href}
                    aria-label={`Call ${telephone.label}`}
                  >
                    {telephone.label}
                  </a>
                </span>
              )
            )}
          </div>
        </div>

        {/* EMAIL */}

        <a
          href={`mailto:${footerContact.email}`}
          className="sth-footer-contact__item"
          aria-label={`Email ${footerContact.email}`}
        >
          <span className="sth-footer-contact__icon">
            <Mail
              size={15}
              strokeWidth={1.8}
            />
          </span>

          <span className="sth-footer-contact__text">
            {footerContact.email}
          </span>
        </a>

        {/* ADDRESS */}

        <div className="sth-footer-contact__item">
          <span className="sth-footer-contact__icon">
            <MapPin
              size={15}
              strokeWidth={1.8}
            />
          </span>

          <span className="sth-footer-contact__text">
            {footerContact.address}
          </span>
        </div>
      </div>

      {/* SOCIAL MEDIA */}

      <div className="sth-footer-contact__socials">
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
              target="_blank"
              rel="noopener noreferrer"
              className="sth-footer-contact__social"
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
}