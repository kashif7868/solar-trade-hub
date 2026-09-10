import { create } from "zustand";

export type ShopViewMode =
  | "grid"
  | "list";

interface ShopState {
  category: string;

  brand: string;

  sortBy: string;

  minPrice: number;

  maxPrice: number;

  minRating: number;

  viewMode: ShopViewMode;

  setCategory: (
    value: string
  ) => void;

  setBrand: (
    value: string
  ) => void;

  setSortBy: (
    value: string
  ) => void;

  setMinPrice: (
    value: number
  ) => void;

  setMaxPrice: (
    value: number
  ) => void;

  setMinRating: (
    value: number
  ) => void;

  setViewMode: (
    value: ShopViewMode
  ) => void;

  resetFilters: () => void;
}

export const useShopStore =
  create<ShopState>((set) => ({
    category: "all",

    brand: "all",

    sortBy: "featured",

    minPrice: 0,

    maxPrice: 1000000,

    minRating: 0,

    viewMode: "grid",

    setCategory: (value) =>
      set({
        category: value,
      }),

    setBrand: (value) =>
      set({
        brand: value,
      }),

    setSortBy: (value) =>
      set({
        sortBy: value,
      }),

    setMinPrice: (value) =>
      set({
        minPrice: value,
      }),

    setMaxPrice: (value) =>
      set({
        maxPrice: value,
      }),

    setMinRating: (value) =>
      set({
        minRating: value,
      }),

    setViewMode: (value) =>
      set({
        viewMode: value,
      }),

    resetFilters: () =>
      set({
        category: "all",

        brand: "all",

        sortBy: "featured",

        minPrice: 0,

        maxPrice: 1000000,

        minRating: 0,
      }),
  }));