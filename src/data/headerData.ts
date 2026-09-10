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
   HEADER CONTACT
   ======================================== */

export const headerContact = {
  phone: "+92 300 0000000",
};