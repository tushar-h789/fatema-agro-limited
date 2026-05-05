"use client";

import { useMemo, useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "./cart-store";
import type { CartLine } from "./cart-types";

export default function AddToCartButton({
  line,
  className,
  children = "কার্টে যোগ",
  inCartLabel = "কার্টে আছে",
  addedLabel = "যোগ হয়েছে",
  variant = "text",
}: {
  line: Omit<CartLine, "quantity">;
  className?: string;
  children?: string;
  inCartLabel?: string;
  addedLabel?: string;
  variant?: "text" | "icon";
}) {
  const { addLine, state } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const isInCart = useMemo(
    () => state.lines.some((l) => l.id === line.id),
    [line.id, state.lines]
  );

  const label = useMemo(() => {
    if (justAdded) return addedLabel;
    if (isInCart) return inCartLabel;
    return children;
  }, [addedLabel, children, inCartLabel, isInCart, justAdded]);

  const disabled = isInCart;

  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={
        variant === "icon"
          ? isInCart
            ? "কার্টে আছে"
            : "কার্টে যোগ"
          : undefined
      }
      aria-disabled={disabled}
      onClick={() => {
        if (isInCart) return;
        addLine(line);
        setJustAdded(true);
        window.setTimeout(() => setJustAdded(false), 900);
      }}
      className={cn(
        className,
        disabled && "opacity-60 cursor-not-allowed"
      )}
    >
      {variant === "icon" ? (
        isInCart ? (
          <Check className="w-5 h-5" strokeWidth={2.5} aria-hidden />
        ) : (
          <ShoppingCart className="w-5 h-5" strokeWidth={2} aria-hidden />
        )
      ) : (
        label
      )}
    </button>
  );
}
