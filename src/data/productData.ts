export interface ProductItem {
  id: number;
  name: string;
  slug: string;
  href: string;
  image: string;

  category: string;
  brand: string;
  description: string;

  price: number;
  oldPrice?: number;

  rating: number;
  reviewCount: number;

  badge?: string;
}

export const popularProducts: ProductItem[] = [
  {
    id: 1,
    name: "Jinko Tiger Neo N-Type Solar Panel",
    slug: "jinko-tiger-neo-n-type-solar-panel",
    href: "/product/jinko-tiger-neo-n-type-solar-panel",

    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",

    category: "Solar Panel",
    brand: "Jinko Solar",

    description:
      "High-efficiency N-Type solar panel for residential, commercial and industrial solar systems.",

    price: 29900,
    oldPrice: 32000,

    rating: 4.9,
    reviewCount: 48,

    badge: "Featured",
  },

  {
    id: 2,
    name: "JA Solar High Efficiency N-Type Module",
    slug: "ja-solar-high-efficiency-n-type-module",
    href: "/product/ja-solar-high-efficiency-n-type-module",

    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",

    category: "Solar Panel",
    brand: "JA Solar",

    description:
      "High-performance N-Type solar module designed for dependable output and excellent conversion efficiency.",

    price: 28750,
    oldPrice: 30500,

    rating: 4.8,
    reviewCount: 32,

    badge: "Popular",
  },

  {
    id: 3,
    name: "Solis 12kW Three Phase Hybrid Solar Inverter",
    slug: "solis-12kw-three-phase-hybrid-solar-inverter",
    href: "/product/solis-12kw-three-phase-hybrid-solar-inverter",

    image:
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80",

    category: "Hybrid Inverter",
    brand: "Solis",

    description:
      "Smart three-phase hybrid inverter for solar generation, battery backup and intelligent energy management.",

    price: 545000,
    oldPrice: 565000,

    rating: 4.9,
    reviewCount: 21,

    badge: "Hot",
  },

  {
    id: 4,
    name: "GoodWe 10kW Smart Hybrid Inverter IP65",
    slug: "goodwe-10kw-smart-hybrid-inverter-ip65",
    href: "/product/goodwe-10kw-smart-hybrid-inverter-ip65",

    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80",

    category: "Hybrid Inverter",
    brand: "GoodWe",

    description:
      "IP65 hybrid inverter built for solar self-consumption, battery storage and reliable backup applications.",

    price: 399000,
    oldPrice: 420000,

    rating: 4.7,
    reviewCount: 18,

    badge: "Featured",
  },

  {
    id: 5,
    name: "KNOX 16kWh LiFePO4 Solar Battery",
    slug: "knox-16kwh-lifepo4-solar-battery",
    href: "/product/knox-16kwh-lifepo4-solar-battery",

    image:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80",

    category: "Lithium Battery",
    brand: "KNOX",

    description:
      "Long-life LiFePO4 battery for stable solar backup, daily cycling and modern residential energy storage.",

    price: 598000,
    oldPrice: 625000,

    rating: 4.8,
    reviewCount: 26,

    badge: "Best Seller",
  },

  {
    id: 6,
    name: "Huawei 10kWh Lithium Energy Storage Battery",
    slug: "huawei-10kwh-lithium-energy-storage-battery",
    href: "/product/huawei-10kwh-lithium-energy-storage-battery",

    image:
      "https://images.unsplash.com/photo-1609943247960-22a55176b136?auto=format&fit=crop&w=800&q=80",

    category: "Energy Storage",
    brand: "Huawei",

    description:
      "Smart lithium energy storage solution for efficient solar backup and intelligent residential energy use.",

    price: 485000,
    oldPrice: 510000,

    rating: 4.9,
    reviewCount: 14,

    badge: "Premium",
  },

  {
    id: 7,
    name: "Solar DC Protection Distribution Box",
    slug: "solar-dc-protection-distribution-box",
    href: "/product/solar-dc-protection-distribution-box",

    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",

    category: "Protection",
    brand: "Solar Trade Hub",

    description:
      "DC protection box designed for safe isolation, circuit protection and reliable photovoltaic installations.",

    price: 36500,
    oldPrice: 39000,

    rating: 4.6,
    reviewCount: 11,

    badge: "Essential",
  },

  {
    id: 8,
    name: "Premium Solar DC Cable 6mm²",
    slug: "premium-solar-dc-cable-6mm",
    href: "/product/premium-solar-dc-cable-6mm",

    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",

    category: "Solar Cable",
    brand: "Solar Cable",

    description:
      "UV-resistant 6mm² solar DC cable engineered for safe and durable photovoltaic power installations.",

    price: 29500,
    oldPrice: 31500,

    rating: 4.7,
    reviewCount: 19,

    badge: "Popular",
  },
];