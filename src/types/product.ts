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