import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { footerContact } from "@/data/footerData";

import "@/components/animations/css/footer/footer-contact.css";

export function FooterContact() {
  return (
    <div className="sth-footer-contact">
      <Link
        href="/"
        aria-label="Solar Trade Hub Home"
        className="sth-footer-contact__logo"
      >
        <Image
          src="/logos/solar-trade-hub-logo-dark.svg"
          alt="Solar Trade Hub"
          width={170}
          height={56}
          className="sth-footer-contact__logo-image"
        />
      </Link>

      <p className="sth-footer-contact__description">
        Pakistan&apos;s solar marketplace for products, suppliers,
        installers, pricing insights and renewable energy solutions.
      </p>

      <div className="sth-footer-contact__list">
        <a
          href={`tel:${footerContact.phone.replace(/\s+/g, "")}`}
          className="sth-footer-contact__item"
        >
          <span className="sth-footer-contact__icon">
            <Phone size={15} strokeWidth={1.8} />
          </span>

          <span className="sth-footer-contact__text">
            {footerContact.phone}
          </span>
        </a>

        <a
          href={`mailto:${footerContact.email}`}
          className="sth-footer-contact__item"
        >
          <span className="sth-footer-contact__icon">
            <Mail size={15} strokeWidth={1.8} />
          </span>

          <span className="sth-footer-contact__text">
            {footerContact.email}
          </span>
        </a>

        <div className="sth-footer-contact__item">
          <span className="sth-footer-contact__icon">
            <MapPin size={15} strokeWidth={1.8} />
          </span>

          <span className="sth-footer-contact__text">
            {footerContact.address}
          </span>
        </div>
      </div>
    </div>
  );
}