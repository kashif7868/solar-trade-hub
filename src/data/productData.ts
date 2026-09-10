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
    name: "Jinko Tiger Neo N-Type 585W Solar Panel",
    slug: "jinko-tiger-neo-n-type-585w-solar-panel",
    href: "/products/jinko-tiger-neo-n-type-585w-solar-panel",
    image: "/images/products/panel/jinko-tiger-neo-585w.png",
    category: "Solar Panel",
    brand: "Jinko Solar",
    description:
      "High-efficiency N-Type TOPCon solar module designed for residential, commercial and industrial installations.",
    price: 29900,
    oldPrice: 32000,
    rating: 4.9,
    reviewCount: 48,
    badge: "Featured",
  },

  {
    id: 2,
    name: "JA Solar DeepBlue N-Type 585W Solar Panel",
    slug: "ja-solar-deepblue-n-type-585w-solar-panel",
    href: "/products/ja-solar-deepblue-n-type-585w-solar-panel",
    image: "/images/products/panel/ja-solar-deepblue-585w.png",
    category: "Solar Panel",
    brand: "JA Solar",
    description:
      "High-performance N-Type solar module offering strong conversion efficiency and dependable long-term output.",
    price: 28750,
    oldPrice: 30500,
    rating: 4.8,
    reviewCount: 32,
    badge: "Popular",
  },

  {
    id: 3,
    name: "Longi Hi-MO 7 610W Bifacial Solar Panel",
    slug: "longi-hi-mo-7-610w-bifacial-solar-panel",
    href: "/products/longi-hi-mo-7-610w-bifacial-solar-panel",
    image: "/images/products/panel/longi-hi-mo-7-610w.png",
    category: "Solar Panel",
    brand: "LONGi",
    description:
      "High-output bifacial module designed for commercial and utility-scale solar applications.",
    price: 31500,
    oldPrice: 33500,
    rating: 4.8,
    reviewCount: 27,
    badge: "New",
  },

  {
    id: 4,
    name: "Canadian Solar TOPHiKu6 585W N-Type Panel",
    slug: "canadian-solar-tophiku6-585w-n-type-panel",
    href: "/products/canadian-solar-tophiku6-585w-n-type-panel",
    image: "/images/products/panel/canadian-solar-tophiku6-585w.png",
    category: "Solar Panel",
    brand: "Canadian Solar",
    description:
      "Premium N-Type module engineered for high efficiency, low degradation and strong energy yield.",
    price: 30250,
    oldPrice: 32500,
    rating: 4.8,
    reviewCount: 24,
    badge: "Premium",
  },

  {
    id: 5,
    name: "Solis 12kW Three Phase Hybrid Solar Inverter",
    slug: "solis-12kw-three-phase-hybrid-solar-inverter",
    href: "/products/solis-12kw-three-phase-hybrid-solar-inverter",
    image: "/images/products/inverter/solis-12kw-hybrid.png",
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
    id: 6,
    name: "GoodWe 10kW Three Phase Hybrid Inverter",
    slug: "goodwe-10kw-three-phase-hybrid-inverter",
    href: "/products/goodwe-10kw-three-phase-hybrid-inverter",
    image: "/images/products/inverter/goodwe-10kw-hybrid.png",
    category: "Hybrid Inverter",
    brand: "GoodWe",
    description:
      "Three-phase hybrid inverter built for solar self-consumption, lithium battery integration and backup power.",
    price: 399000,
    oldPrice: 420000,
    rating: 4.7,
    reviewCount: 18,
    badge: "Featured",
  },

  {
    id: 7,
    name: "Sungrow SH10RT 10kW Hybrid Inverter",
    slug: "sungrow-sh10rt-10kw-hybrid-inverter",
    href: "/products/sungrow-sh10rt-10kw-hybrid-inverter",
    image: "/images/products/inverter/sungrow-sh10rt-10kw.png",
    category: "Hybrid Inverter",
    brand: "Sungrow",
    description:
      "High-efficiency hybrid inverter with smart battery management and reliable residential backup support.",
    price: 475000,
    oldPrice: 499000,
    rating: 4.8,
    reviewCount: 16,
    badge: "Premium",
  },

  {
    id: 8,
    name: "Growatt SPH 10kW Three Phase Hybrid Inverter",
    slug: "growatt-sph-10kw-three-phase-hybrid-inverter",
    href: "/products/growatt-sph-10kw-three-phase-hybrid-inverter",
    image: "/images/products/inverter/growatt-sph-10kw.png",
    category: "Hybrid Inverter",
    brand: "Growatt",
    description:
      "Smart three-phase hybrid inverter designed for solar production, energy storage and backup applications.",
    price: 429000,
    oldPrice: 455000,
    rating: 4.7,
    reviewCount: 15,
    badge: "Popular",
  },

  {
    id: 9,
    name: "KNOX 16kWh LiFePO4 Solar Battery",
    slug: "knox-16kwh-lifepo4-solar-battery",
    href: "/products/knox-16kwh-lifepo4-solar-battery",
    image: "/images/products/battery/knox-16kwh.png",
    category: "Lithium Battery",
    brand: "KNOX",
    description:
      "Long-life LiFePO4 battery designed for daily solar cycling, residential backup and energy storage.",
    price: 598000,
    oldPrice: 625000,
    rating: 4.8,
    reviewCount: 26,
    badge: "Best Seller",
  },

  {
    id: 10,
    name: "Huawei LUNA2000 10kWh Energy Storage System",
    slug: "huawei-luna2000-10kwh-energy-storage-system",
    href: "/products/huawei-luna2000-10kwh-energy-storage-system",
    image: "/images/products/battery/huawei-luna2000-10kwh.png",
    category: "Energy Storage",
    brand: "Huawei",
    description:
      "Modular lithium energy storage solution for solar self-consumption, smart backup and residential energy control.",
    price: 485000,
    oldPrice: 510000,
    rating: 4.9,
    reviewCount: 14,
    badge: "Premium",
  },

  {
    id: 11,
    name: "Dyness PowerBrick 14.3kWh LiFePO4 Battery",
    slug: "dyness-powerbrick-14-3kwh-lifepo4-battery",
    href: "/products/dyness-powerbrick-14-3kwh-lifepo4-battery",
    image: "/images/products/battery/dyness-powerbrick-14kwh.png",
    category: "Lithium Battery",
    brand: "Dyness",
    description:
      "High-capacity LiFePO4 battery designed for scalable residential solar storage and dependable backup.",
    price: 515000,
    oldPrice: 545000,
    rating: 4.8,
    reviewCount: 12,
    badge: "New",
  },

  {
    id: 12,
    name: "Pylontech Force H2 Lithium Battery System",
    slug: "pylontech-force-h2-lithium-battery-system",
    href: "/products/pylontech-force-h2-lithium-battery-system",
    image: "/images/products/battery/pylontech-force-h2.png",
    category: "Energy Storage",
    brand: "Pylontech",
    description:
      "Modular high-voltage lithium battery system for hybrid solar applications and residential energy storage.",
    price: 565000,
    oldPrice: 595000,
    rating: 4.8,
    reviewCount: 13,
    badge: "Premium",
  },

  {
    id: 13,
    name: "Solar DC Protection Distribution Box",
    slug: "solar-dc-protection-distribution-box",
    href: "/products/solar-dc-protection-distribution-box",
    image: "/images/products/accessories/dc-protection-box.png",
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
    id: 14,
    name: "Premium Solar DC Cable 6mm²",
    slug: "premium-solar-dc-cable-6mm",
    href: "/products/premium-solar-dc-cable-6mm",
    image: "/images/products/accessories/solar-dc-cable-6mm.png",
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