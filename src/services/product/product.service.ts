import { api } from "../api";

import type { ProductItem } from "@/data/productData";

interface ProductsResponse {
  success: boolean;
  message: string;
  data: ProductItem[];
}

export async function getProducts(): Promise<ProductItem[]> {
  const response = await api.get<ProductsResponse>("/products");

  return response.data.data;
}