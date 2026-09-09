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
    href: "/category/solar-panels",
  },

  /*
   * Current product data stores inverter products
   * under the parent "Inverters" category.
   */
  {
    label: "On-Grid Inverters",
    href: "/category/hybrid-inverters",
  },
  {
    label: "Hybrid Inverters",
    href: "/category/hybrid-inverters",
  },

  /*
   * Current product data stores batteries and ESS
   * under the parent "Batteries" category.
   */
  {
    label: "Lithium Batteries",
    href: "/category/batteries-ess",
  },
  {
    label: "Energy Storage Systems",
    href: "/category/batteries-ess",
  },

  {
    label: "Mounting Structures",
    href: "/category/mounting-structures",
  },

  /*
   * Until Solar Cables becomes its own category,
   * send it to Accessories.
   */
  {
    label: "Solar Cables",
    href: "/category/accessories",
  },

  {
    label: "Protection & Accessories",
    href: "/category/accessories",
  },
];

/* ========================================
   HEADER CONTACT
   ======================================== */

export const headerContact = {
  phone: "+92 300 0000000",
};