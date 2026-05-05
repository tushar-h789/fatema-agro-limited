"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartLine, CartState } from "./cart-types";

const STORAGE_KEY = "fatemaagro_cart_v1";

type CartApi = {
  state: CartState;
  /** true after cart is loaded from localStorage (avoid redirect flash on checkout). */
  hydrated: boolean;
  totalItems: number;
  subtotal: number;
  addLine: (line: Omit<CartLine, "quantity"> & { quantity?: number }) => void;
  removeLine: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartApi | null>(null);

function safeParse(json: string | null): CartState | null {
  if (!json) return null;
  try {
    const parsed = JSON.parse(json) as CartState;
    if (!parsed || !Array.isArray(parsed.lines)) return null;
    return {
      lines: parsed.lines
        .filter((l) => l && typeof l.id === "string")
        .map((l) => ({
          id: String(l.id),
          title: String(l.title ?? ""),
          imageUrl: l.imageUrl ? String(l.imageUrl) : undefined,
          unitPrice: Number(l.unitPrice ?? 0),
          unitLabel: l.unitLabel ? String(l.unitLabel) : undefined,
          quantity: Math.max(1, Number(l.quantity ?? 1)),
        })),
    };
  } catch {
    return null;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>({ lines: [] });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const loaded = safeParse(globalThis?.localStorage?.getItem(STORAGE_KEY) ?? null);
    if (loaded) setState(loaded);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    globalThis?.localStorage?.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [hydrated, state]);

  const addLine: CartApi["addLine"] = useCallback((line) => {
    const qty = Math.max(1, line.quantity ?? 1);
    setState((prev) => {
      const existing = prev.lines.find((l) => l.id === line.id);
      if (!existing) {
        return { lines: [...prev.lines, { ...line, quantity: qty }] };
      }
      return {
        lines: prev.lines.map((l) =>
          l.id === line.id ? { ...l, quantity: l.quantity + qty } : l
        ),
      };
    });
  }, []);

  const removeLine = useCallback((id: string) => {
    setState((prev) => ({ lines: prev.lines.filter((l) => l.id !== id) }));
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    const q = Math.max(1, Math.floor(quantity));
    setState((prev) => ({
      lines: prev.lines.map((l) => (l.id === id ? { ...l, quantity: q } : l)),
    }));
  }, []);

  const clear = useCallback(() => setState({ lines: [] }), []);

  const totalItems = useMemo(
    () => state.lines.reduce((sum, l) => sum + l.quantity, 0),
    [state.lines]
  );

  const subtotal = useMemo(
    () => state.lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0),
    [state.lines]
  );

  const value: CartApi = useMemo(
    () => ({
      state,
      hydrated,
      totalItems,
      subtotal,
      addLine,
      removeLine,
      setQuantity,
      clear,
    }),
    [addLine, clear, hydrated, removeLine, setQuantity, state, subtotal, totalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

