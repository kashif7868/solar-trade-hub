export type HeaderNavItem = {
  label: string;
  href: string;
  accent?: boolean;
};

export type CategoryNavItem = {
  label: string;
  href: string;
};

/* ========================================
   TOP BAR
======================================== */

export const topBarLinks: HeaderNavItem[] = [
  {
    label: "Become a Seller",
    href: "/seller",
  },
  {
    label: "Join Community",
    href: "/community",
  },
  {
    label: "Track Order",
    href: "/track-order",
  },
];

/* ========================================
   MAIN NAVIGATION
======================================== */

export const mainNavigation: HeaderNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Solar Panels",
    href: "/category/solar-panels",
  },
  {
    label: "Inverters",
    href: "/category/hybrid-inverters",
  },
  {
    label: "Batteries & ESS",
    href: "/category/batteries-ess",
  },
  {
    label: "Accessories",
    href: "/category/accessories",
  },
  {
    label: "Installers",
    href: "/installers",
  },
  {
    label: "Suppliers",
    href: "/#featured-suppliers",
  },
  {
    label: "Solar Prices",
    href: "/#solar-prices",
  },
  {
    label: "Tenders",
    href: "/tenders",
  },
  {
    label: "Deals",
    href: "/deals",
    accent: true,
  },
];

/* ========================================
   CATEGORY DROPDOWN
======================================== */

export const categoryNavigation: CategoryNavItem[] = [
  {
    label: "Solar Panels",
    href: "/category/solar-panels",
  },
  {
    label: "Inverters",
    href: "/category/hybrid-inverters",
  },
  {
    label: "Batteries & ESS",
    href: "/category/batteries-ess",
  },
  {
    label: "Accessories",
    href: "/category/accessories",
  },
  {
    label: "Protection & DB",
    href: "/category/protection-db",
  },
  {
    label: "Mounting Structures",
    href: "/category/mounting-structures",
  },
];

/* ========================================
   CONTACT INFORMATION
======================================== */

export const headerContact = {
  mobile: "+92 311 1163264",

  telephone: [
    "042 302020320",
    "042 32020320",
  ],

  email: "sales@solartradehub.co",
};

/* ========================================
   SOCIAL MEDIA
======================================== */

export const socialLinks = {
  facebook: "https://facebook.com/zoraysinc",

  linkedin:
    "https://www.linkedin.com/showcase/zorays'%E2%80%8B-careers/",

  instagram:
    "https://instagram.com/zoraysinc",

  youtube:
    "https://youtube.com/zorays",
};