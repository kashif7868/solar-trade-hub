import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  slug: string;
  sku: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];

  addItem: (
    item: Omit<CartItem, "quantity">
  ) => void;

  removeItem: (
    id: number
  ) => void;

  increaseQuantity: (
    id: number
  ) => void;

  decreaseQuantity: (
    id: number
  ) => void;

  clearCart: () => void;

  getTotalItems: () => number;

  getSubtotal: () => number;
}

export const useCartStore =
  create<CartState>((set, get) => ({
    items: [],

    addItem: (item) =>
      set((state) => {
        const existingItem =
          state.items.find(
            (cartItem) =>
              cartItem.id === item.id
          );

        /*
         * Product already exists:
         * do not automatically increase quantity.
         */
        if (existingItem) {
          return state;
        }

        return {
          items: [
            ...state.items,
            {
              ...item,
              quantity: 1,
            },
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

    increaseQuantity: (id) =>
      set((state) => ({
        items:
          state.items.map(
            (item) =>
              item.id === id
                ? {
                    ...item,
                    quantity:
                      item.quantity + 1,
                  }
                : item
          ),
      })),

    decreaseQuantity: (id) =>
      set((state) => ({
        items:
          state.items
            .map(
              (item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity:
                        item.quantity - 1,
                    }
                  : item
            )
            .filter(
              (item) =>
                item.quantity > 0
            ),
      })),

    clearCart: () =>
      set({
        items: [],
      }),

    getTotalItems: () =>
      get().items.reduce(
        (total, item) =>
          total + item.quantity,
        0
      ),

    getSubtotal: () =>
      get().items.reduce(
        (total, item) =>
          total +
          item.price *
            item.quantity,
        0
      ),
  }));