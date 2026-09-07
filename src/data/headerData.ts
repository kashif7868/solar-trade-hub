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
    href: "/shop/solar-panels",
  },
  {
    label: "Inverters",
    href: "/shop/inverters",
  },
  {
    label: "Batteries & ESS",
    href: "/shop/batteries-ess",
  },
  {
    label: "Accessories",
    href: "/shop/accessories",
  },
  {
    label: "Installers",
    href: "/installers",
  },
  {
    label: "Suppliers",
    href: "/suppliers",
  },
  {
    label: "Solar Prices",
    href: "/solar-prices",
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
    href: "/shop/solar-panels",
  },
  {
    label: "On-Grid Inverters",
    href: "/shop/on-grid-inverters",
  },
  {
    label: "Hybrid Inverters",
    href: "/shop/hybrid-inverters",
  },
  {
    label: "Lithium Batteries",
    href: "/shop/lithium-batteries",
  },
  {
    label: "Energy Storage Systems",
    href: "/shop/energy-storage-systems",
  },
  {
    label: "Mounting Structures",
    href: "/shop/mounting-structures",
  },
  {
    label: "Solar Cables",
    href: "/shop/solar-cables",
  },
  {
    label: "Protection & Accessories",
    href: "/shop/accessories",
  },
];

/* ========================================
   HEADER CONTACT
   ======================================== */

export const headerContact = {
  phone: "+92 300 0000000",
};