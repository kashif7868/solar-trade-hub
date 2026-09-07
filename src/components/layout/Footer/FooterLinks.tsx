import Link from "next/link";

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

export function FooterLinks() {
  return (
    <div className="sth-footer-links">
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
  );
}