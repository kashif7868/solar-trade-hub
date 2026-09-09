import { api } from "@/services/api";
import type { Product } from "@/types/product";

export const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>("/products");

    return response.data;
  },

  async getProductById(
    id: number
  ): Promise<Product> {
    const response = await api.get<Product>(
      `/products/${id}`
    );

    return response.data;
  },

  async getProductBySlug(
    slug: string
  ): Promise<Product | null> {
    const response = await api.get<Product[]>(
      "/products",
      {
        params: {
          slug,
        },
      }
    );

    return response.data[0] ?? null;
  },
};