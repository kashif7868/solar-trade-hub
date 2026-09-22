export interface CategoryItem {
  id: number;

  title: string;

  slug: string;

  href: string;

  image: string;

  eyebrow: string;

  description: string;

  /**
   * Product category value used for filtering products.
   */
  productCategory: string;
}

/* =========================================================
   HOME CATEGORIES
========================================================= */

export const homeCategories: CategoryItem[] = [
  {
    id: 1,

    title: "Solar Panels",

    slug: "solar-panels",

    href: "/category/solar-panels",

    image:
      "https://solarbatteryquotesfinder.com.au/__l5e/assets-v1/c8d099f0-0fa9-4392-8554-71d8dceab0b1/solar-battery.png",

    eyebrow: "Solar Marketplace",

    description:
      "Compare high-efficiency solar panels from trusted brands and suppliers across Pakistan.",

    productCategory:
      "Solar Panels",
  },

  {
    id: 2,

    title: "Hybrid Inverters",

    slug: "hybrid-inverters",

    href: "/category/hybrid-inverters",

    image:
      "https://sunpronapenergia.hu/resources/image/deye_sun.jpg",

    eyebrow:
      "Smart Energy Conversion",

    description:
      "Explore hybrid solar inverters for intelligent energy management, backup and solar power systems.",

    productCategory:
      "Inverters",
  },

  {
    id: 3,

    title: "Batteries & ESS",

    slug: "batteries-ess",

    href: "/category/batteries-ess",

    image:
      "https://img.yfisher.com/m30564/1744950920esi/jpg70-t3-scale100.webp",

    eyebrow:
      "Energy Storage",

    description:
      "Compare lithium batteries and energy storage solutions for reliable solar backup and energy independence.",

    productCategory:
      "Batteries",
  },

  {
    id: 4,

    title: "Accessories",

    slug: "accessories",

    href: "/category/accessories",

    image:
      "https://www.truenav.com/wp-content/uploads/2024/10/Invest-in-the.png",

    eyebrow:
      "Complete Your System",

    description:
      "Explore essential solar accessories and supporting equipment for complete solar installations.",

    productCategory:
      "Accessories",
  },

  {
    id: 5,

    title: "Protection & DB",

    slug: "protection-db",

    href: "/category/protection-db",

    image:
      "https://www.truenav.com/wp-content/uploads/2024/10/Invest-in-the.png",

    eyebrow:
      "Electrical Protection",

    description:
      "Explore protection devices, distribution boxes and electrical safety equipment for solar installations.",

    productCategory:
      "Protection & DB",
  },

  {
    id: 6,

    title:
      "Mounting Structures",

    slug:
      "mounting-structures",

    href:
      "/category/mounting-structures",

    image:
      "https://solarbatteryquotesfinder.com.au/__l5e/assets-v1/c8d099f0-0fa9-4392-8554-71d8dceab0b1/solar-battery.png",

    eyebrow:
      "Solar Mounting",

    description:
      "Explore mounting structures and installation solutions for secure and reliable solar panel systems.",

    productCategory:
      "Mounting Structures",
  },
];

/* =========================================================
   GET CATEGORY BY SLUG
========================================================= */

export function getCategoryBySlug(
  slug: string
): CategoryItem | undefined {
  const normalizedSlug =
    String(slug || "")
      .trim()
      .toLowerCase();

  return homeCategories.find(
    (category) =>
      category.slug ===
      normalizedSlug
  );
}

/* =========================================================
   STATIC CATEGORY PARAMS

   Used by:
   app/category/[slug]/page.tsx

   Required for:
   output: "export"
========================================================= */

export function getCategoryStaticParams() {
  return homeCategories.map(
    (category) => ({
      slug: category.slug,
    })
  );
}