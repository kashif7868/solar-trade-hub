import Link from "next/link";

import {
  ArrowRight,
  Leaf,
  Mail,
  ShieldCheck,
  Zap,
  ChevronDown,
} from "lucide-react";

import {
  footerCategoryLinks,
  footerCompanyLinks,
  footerMarketplaceLinks,
  footerSupportLinks,
} from "@/data/footerData";

import "@/components/animations/css/footer/footer-links.css";

interface FooterLinkItem {
  label: string;
  href: string;
}

interface FooterLinkGroupProps {
  title: string;
  links: FooterLinkItem[];
}

function FooterLinkGroup({
  title,
  links,
}: FooterLinkGroupProps) {
  return (
    <div className="sth-footer-links__group">
      <h3 className="sth-footer-links__title">
        {title}
      </h3>

      <ul className="sth-footer-links__list">
        {links.map((item) => (
          <li
            key={item.href}
            className="sth-footer-links__item"
          >
            <Link
              href={item.href}
              className="sth-footer-links__link"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterMobileGroup({
  title,
  links,
}: FooterLinkGroupProps) {
  return (
    <details className="sth-footer-mobile-group">
      <summary className="sth-footer-mobile-group__summary">
        <span>{title}</span>

        <ChevronDown
          size={15}
          strokeWidth={1.8}
        />
      </summary>

      <div className="sth-footer-mobile-group__content">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="sth-footer-mobile-group__link"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function FooterLinks() {
  return (
    <div className="sth-footer-links">
      {/* DESKTOP */}
      <div className="sth-footer-links__desktop">
        <div className="sth-footer-links__columns">
          <FooterLinkGroup
            title="Company"
            links={footerCompanyLinks}
          />

          <FooterLinkGroup
            title="Marketplace"
            links={footerMarketplaceLinks}
          />

          <FooterLinkGroup
            title="Categories"
            links={footerCategoryLinks}
          />

          <FooterLinkGroup
            title="Support"
            links={footerSupportLinks}
          />
        </div>

        {/* Stay Connected */}
        <div className="sth-footer-connect">
          <div className="sth-footer-connect__heading">
            Stay <span>Connected</span>
          </div>

          <p className="sth-footer-connect__description">
            Subscribe to get the latest updates,
            solar insights and exclusive deals.
          </p>

          <div className="sth-footer-connect__form">
            <Mail
              size={17}
              strokeWidth={1.8}
              className="sth-footer-connect__mail"
            />

            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
            />

            <button
              type="button"
              aria-label="Subscribe"
            >
              <ArrowRight
                size={17}
                strokeWidth={1.8}
              />
            </button>
          </div>

          <div className="sth-footer-connect__features">
            <div className="sth-footer-connect__feature">
              <span className="sth-footer-connect__feature-icon sth-footer-connect__feature-icon--orange">
                <Zap
                  size={16}
                  strokeWidth={1.8}
                />
              </span>

              <span>
                <strong>Better</strong>
                Energy
              </span>
            </div>

            <div className="sth-footer-connect__feature">
              <span className="sth-footer-connect__feature-icon sth-footer-connect__feature-icon--green">
                <Leaf
                  size={16}
                  strokeWidth={1.8}
                />
              </span>

              <span>
                <strong>Greener</strong>
                Pakistan
              </span>
            </div>

            <div className="sth-footer-connect__feature">
              <span className="sth-footer-connect__feature-icon sth-footer-connect__feature-icon--purple">
                <ShieldCheck
                  size={16}
                  strokeWidth={1.8}
                />
              </span>

              <span>
                <strong>Brighter</strong>
                Future
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="sth-footer-links__mobile">
        <FooterMobileGroup
          title="Company"
          links={footerCompanyLinks}
        />

        <FooterMobileGroup
          title="Marketplace"
          links={footerMarketplaceLinks}
        />

        <FooterMobileGroup
          title="Categories"
          links={footerCategoryLinks}
        />

        <FooterMobileGroup
          title="Support"
          links={footerSupportLinks}
        />
      </div>
    </div>
  );
}