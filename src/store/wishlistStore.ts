import { create } from "zustand";

export interface WishlistItem {
  id: number;
  name: string;
  slug: string;
  sku: string;
  image: string;
  price: number;
}

interface WishlistState {
  items: WishlistItem[];

  addItem: (
    item: WishlistItem
  ) => void;

  removeItem: (
    id: number
  ) => void;

  toggleItem: (
    item: WishlistItem
  ) => void;

  isInWishlist: (
    id: number
  ) => boolean;

  clearWishlist: () => void;

  getTotalItems: () => number;
}

export const useWishlistStore =
  create<WishlistState>(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const exists =
            state.items.some(
              (wishlistItem) =>
                wishlistItem.id ===
                item.id
            );

          if (exists) {
            return state;
          }

          return {
            items: [
              ...state.items,
              item,
            ],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items:
            state.items.filter(
              (item) =>
                item.id !== id
            ),
        })),

      toggleItem: (item) =>
        set((state) => {
          const exists =
            state.items.some(
              (wishlistItem) =>
                wishlistItem.id ===
                item.id
            );

          if (exists) {
            return {
              items:
                state.items.filter(
                  (wishlistItem) =>
                    wishlistItem.id !==
                    item.id
                ),
            };
          }

          return {
            items: [
              ...state.items,
              item,
            ],
          };
        }),

      isInWishlist: (id) =>
        get().items.some(
          (item) =>
            item.id === id
        ),

      clearWishlist: () =>
        set({
          items: [],
        }),

      getTotalItems: () =>
        get().items.length,
    })
  );