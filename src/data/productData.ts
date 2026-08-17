export interface ProductItem {
  id: number;
  name: string;
  slug: string;
  href: string;
  image: string;
  brand: string;
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
    brand: "Jinko Solar",
    price: 29900,
    oldPrice: 32000,
    rating: 4.9,
    reviewCount: 48,
    badge: "Popular",
  },
  {
    id: 2,
    name: "High Efficiency Mono PERC Solar Module",
    slug: "high-efficiency-mono-perc-solar-module",
    href: "/product/high-efficiency-mono-perc-solar-module",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
    brand: "JA Solar",
    price: 28750,
    rating: 4.8,
    reviewCount: 32,
  },
  {
    id: 3,
    name: "12kW Three Phase Hybrid Solar Inverter",
    slug: "12kw-three-phase-hybrid-solar-inverter",
    href: "/product/12kw-three-phase-hybrid-solar-inverter",
    image:
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80",
    brand: "Solis",
    price: 545000,
    oldPrice: 565000,
    rating: 4.9,
    reviewCount: 21,
    badge: "Hot",
  },
  {
    id: 4,
    name: "10kW Smart Hybrid Inverter IP65",
    slug: "10kw-smart-hybrid-inverter-ip65",
    href: "/product/10kw-smart-hybrid-inverter-ip65",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80",
    brand: "GoodWe",
    price: 399000,
    rating: 4.7,
    reviewCount: 18,
  },
  {
    id: 5,
    name: "16kWh LiFePO4 Solar Battery",
    slug: "16kwh-lifepo4-solar-battery",
    href: "/product/16kwh-lifepo4-solar-battery",
    image:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80",
    brand: "KNOX",
    price: 598000,
    oldPrice: 625000,
    rating: 4.8,
    reviewCount: 26,
    badge: "Best Seller",
  },
  {
    id: 6,
    name: "10kWh Lithium Energy Storage Battery",
    slug: "10kwh-lithium-energy-storage-battery",
    href: "/product/10kwh-lithium-energy-storage-battery",
    image:
      "https://images.unsplash.com/photo-1609943247960-22a55176b136?auto=format&fit=crop&w=800&q=80",
    brand: "Huawei",
    price: 485000,
    rating: 4.9,
    reviewCount: 14,
  },
  {
    id: 7,
    name: "Solar DC Protection Distribution Box",
    slug: "solar-dc-protection-distribution-box",
    href: "/product/solar-dc-protection-distribution-box",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    brand: "Solar Trade Hub",
    price: 36500,
    rating: 4.6,
    reviewCount: 11,
  },
  {
    id: 8,
    name: "Premium Solar DC Cable 6mm²",
    slug: "premium-solar-dc-cable-6mm",
    href: "/product/premium-solar-dc-cable-6mm",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    brand: "Solar Cable",
    price: 29500,
    rating: 4.7,
    reviewCount: 19,
  },
];