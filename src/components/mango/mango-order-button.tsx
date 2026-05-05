"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useCart } from "@/components/cart/cart-store";

function formatBDT(amount: number) {
  try {
    return new Intl.NumberFormat("bn-BD", {
      style: "currency",
      currency: "BDT",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `৳ ${amount}`;
  }
}

function clampKg(n: number) {
  return Math.min(500, Math.max(1, Math.floor(Number.isFinite(n) ? n : 1)));
}

export default function MangoOrderButton({
  varietyId,
  title,
  imageUrl,
  unitPrice,
  unitLabel = "/ কেজি",
  className,
  children,
}: {
  varietyId: string;
  title: string;
  imageUrl: string;
  unitPrice: number;
  unitLabel?: string;
  className?: string;
  children: ReactNode;
}) {
  const cartId = `mango:${varietyId}`;
  const { state, addLine, setQuantity } = useCart();
  const [open, setOpen] = useState(false);
  const [kg, setKg] = useState(1);
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalEl(document.body);
  }, []);

  useEffect(() => {
    if (!open) return;
    const existing = state.lines.find((l) => l.id === cartId);
    setKg(clampKg(existing?.quantity ?? 1));
  }, [open, cartId, state.lines]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const lineTotal = useMemo(() => unitPrice * kg, [unitPrice, kg]);

  function confirm() {
    const q = clampKg(kg);
    const exists = state.lines.some((l) => l.id === cartId);
    if (exists) {
      setQuantity(cartId, q);
    } else {
      addLine({
        id: cartId,
        title,
        imageUrl,
        unitPrice,
        unitLabel,
        quantity: q,
      });
    }
    setOpen(false);
  }

  const modal =
    open && portalEl ? (
      createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`mango-order-title-${varietyId}`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-lg"
            aria-label="বন্ধ করুন"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md max-h-[min(90dvh,720px)] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl">
            <div className="flex items-start justify-between gap-3 p-5 border-b border-slate-100">
              <h2
                id={`mango-order-title-${varietyId}`}
                className="text-lg font-extrabold text-slate-900 pr-2"
              >
                অর্ডার নিশ্চিতকরণ
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors shrink-0"
                aria-label="বন্ধ করুন"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-5">
              <div className="flex gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-extrabold text-slate-900 leading-snug">
                    {title}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    {formatBDT(unitPrice)}{" "}
                    <span className="text-slate-400">{unitLabel}</span>
                  </p>
                </div>
              </div>

              <div>
                <label
                  htmlFor={`mango-kg-input-${varietyId}`}
                  className="block text-sm font-semibold text-slate-800 mb-2"
                >
                  কত কেজি আম চান?
                </label>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="inline-flex items-center rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                    <button
                      type="button"
                      onClick={() => setKg((k) => clampKg(k - 1))}
                      className="px-4 py-3 font-extrabold text-slate-700 hover:bg-white transition-colors"
                    >
                      −
                    </button>
                    <input
                      id={`mango-kg-input-${varietyId}`}
                      value={kg}
                      onChange={(e) =>
                        setKg(clampKg(Number(e.target.value || 1)))
                      }
                      className="w-16 text-center py-3 outline-none bg-transparent text-slate-900 font-extrabold tabular-nums"
                      inputMode="numeric"
                      min={1}
                      max={500}
                    />
                    <button
                      type="button"
                      onClick={() => setKg((k) => clampKg(k + 1))}
                      className="px-4 py-3 font-extrabold text-slate-700 hover:bg-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm font-medium text-slate-600">কেজি</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  ন্যূনতম ১ কেজি। পরিমাণ পরে কার্ট থেকেও পরিবর্তন করতে পারবেন।
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 border border-amber-100 px-4 py-3 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-700">
                  মোট (আনুমানিক)
                </span>
                <span className="text-lg font-extrabold text-[#7e5700] tabular-nums">
                  {formatBDT(lineTotal)}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl border-2 border-slate-200 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  বাতিল
                </button>
                <button
                  type="button"
                  onClick={confirm}
                  className="flex-1 rounded-xl py-3 font-extrabold text-white bg-gradient-to-br from-[#ffb300] to-[#ff8f00] shadow-md hover:shadow-lg transition-shadow"
                >
                  কার্টে যোগ করুন
                </button>
              </div>

              <p className="text-center text-sm text-slate-500">
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="font-semibold text-[#7e5700] hover:underline"
                >
                  কার্ট দেখুন
                </Link>
              </p>
            </div>
          </div>
        </div>,
        portalEl
      )
    ) : null;

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {modal}
    </>
  );
}
