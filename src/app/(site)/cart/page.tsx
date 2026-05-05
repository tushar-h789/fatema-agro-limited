"use client";

import Image from "next/image";
import Link from "next/link";
import MangoContainer from "@/components/mango/ui/mango-container";
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

function isKgLine(unitLabel?: string) {
  return (unitLabel ?? "").includes("কেজি");
}

export default function CartPage() {
  const { state, subtotal, totalItems, removeLine, setQuantity, clear } = useCart();

  return (
    <div className="bg-white">
      <main className="pt-28 pb-16">
        <MangoContainer>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                আপনার কার্ট
              </h1>
              <p className="text-slate-600">
                মোট আইটেম: <span className="font-bold">{totalItems}</span>
              </p>
            </div>

            {state.lines.length ? (
              <button
                type="button"
                onClick={clear}
                className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors font-semibold"
              >
                কার্ট খালি করুন
              </button>
            ) : null}
          </div>

          {!state.lines.length ? (
            <div className="mt-10 rounded-3xl border border-slate-200 p-10 text-center bg-slate-50">
              <p className="text-slate-700 font-semibold">
                আপনার কার্ট এখন খালি।
              </p>
              <p className="text-slate-600 mt-2">
                আমাদের আমের কালেকশন দেখে পছন্দের আম কার্টে যোগ করুন।
              </p>
              <Link
                href="/mango/varieties"
                className="inline-flex mt-6 items-center justify-center rounded-full px-8 py-3 font-semibold text-white bg-gradient-to-br from-[#ffb300] to-[#ff8f00] shadow-lg hover:shadow-xl transition-shadow"
              >
                আমের কালেকশন দেখুন
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
              <div className="space-y-4">
                {state.lines.map((l) => (
                  <div
                    key={l.id}
                    className="rounded-2xl border border-slate-200 p-4 md:p-5 flex gap-4 bg-white"
                  >
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                      {l.imageUrl ? (
                        <Image
                          src={l.imageUrl}
                          alt={l.title}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      ) : null}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-extrabold text-slate-900 truncate">
                            {l.title}
                          </p>
                          <p className="text-sm text-slate-600 mt-1">
                            {formatBDT(l.unitPrice)}{" "}
                            <span className="text-slate-400">{l.unitLabel}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeLine(l.id)}
                          className="text-sm font-semibold text-rose-600 hover:text-rose-700"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
                        {isKgLine(l.unitLabel) ? (
                          <p className="w-full text-xs font-semibold text-slate-500 -mb-1">
                            পরিমাণ (কেজি)
                          </p>
                        ) : null}
                        <div className="inline-flex items-center rounded-xl border border-slate-200 overflow-hidden">
                          <button
                            type="button"
                            onClick={() => setQuantity(l.id, l.quantity - 1)}
                            className="px-3 py-2 font-extrabold text-slate-700 hover:bg-slate-50"
                          >
                            −
                          </button>
                          <input
                            value={l.quantity}
                            onChange={(e) =>
                              setQuantity(l.id, Number(e.target.value || 1))
                            }
                            className="w-14 text-center py-2 outline-none text-slate-900 font-semibold"
                            inputMode="numeric"
                          />
                          <button
                            type="button"
                            onClick={() => setQuantity(l.id, l.quantity + 1)}
                            className="px-3 py-2 font-extrabold text-slate-700 hover:bg-slate-50"
                          >
                            +
                          </button>
                        </div>

                        <p className="font-extrabold text-slate-900">
                          {formatBDT(l.unitPrice * l.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="rounded-2xl border border-slate-200 p-6 bg-slate-50 h-fit">
                <h2 className="text-lg font-extrabold text-slate-900">
                  অর্ডার সারাংশ
                </h2>
                <div className="mt-4 space-y-3 text-slate-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold">{formatBDT(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Delivery</span>
                    <span>Checkout এ দেখানো হবে</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between text-slate-900">
                    <span className="font-extrabold">Total</span>
                    <span className="font-extrabold">{formatBDT(subtotal)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-6 w-full inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-white bg-gradient-to-br from-[#ffb300] to-[#ff8f00] shadow-lg hover:shadow-xl transition-shadow"
                >
                  অর্ডার কনফার্ম করুন
                </button>

                <p className="mt-3 text-xs text-slate-500">
                  নোট: এখন শুধু ডেমো কার্ট। পেমেন্ট/অর্ডার ফ্লো পরের ধাপে যুক্ত করা
                  যাবে।
                </p>
              </aside>
            </div>
          )}
        </MangoContainer>
      </main>
    </div>
  );
}

