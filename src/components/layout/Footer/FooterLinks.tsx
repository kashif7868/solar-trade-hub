import Link from "next/link";

import {
  footerCategoryLinks,
  footerCompanyLinks,
  footerMarketplaceLinks,
  footerSupportLinks,
} from "@/data/footerData";

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
    <div>
      <h3 className="text-sm font-semibold text-white">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="
                text-sm
                text-white/60
                transition-colors
                hover:text-[#ED2436]
              "
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
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
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