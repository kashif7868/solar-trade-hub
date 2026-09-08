export type ProductStatus = "In Stock" | "Out of Stock";

export interface Product {
  id: number;

  name: string;
  slug: string;
  sku: string;

  category: string;
  brand: string;
  type: "Material" | "Equipment";

  capacity: string;

  price: number;
  oldPrice?: number;

  stock: number;
  status: ProductStatus;

  rating: number;
  reviewCount: number;

  badge?: string;

  image: string;

  description: string;
}