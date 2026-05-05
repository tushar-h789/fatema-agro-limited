import Link from "next/link";
import { Bookmark } from "lucide-react";
import MangoContainer from "../ui/mango-container";
import MangoBadge from "../ui/mango-badge";
import { mangoVarieties } from "../mango-data";
import Image from "next/image";
import AddToCartButton from "@/components/cart/add-to-cart-button";
import MangoOrderButton from "@/components/mango/mango-order-button";

export default function MangoVarieties() {
  return (
    <section id="varieties" className="py-16">
      <MangoContainer>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              আমাদের আমের জাতসমূহ
            </h2>
            <p className="text-slate-600">
              সিজন অনুযায়ী সেরা আমের সংগ্রহ থেকে বেছে নিন আপনার পছন্দেরটি
            </p>
          </div>

          <Link
            href="/mango/varieties"
            className="inline-flex items-center gap-2 text-[#7e5700] font-semibold hover:underline"
          >
            সবগুলো দেখুন
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {mangoVarieties.map((v) => {
            const isPreorder = v.ctaLabel.includes("প্রি");
            return (
              <div
                key={v.name}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={v.imageUrl}
                    width={500}
                    height={500}
                    alt={`${v.name} mango`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {v.badge ? (
                    <div className="absolute top-4 left-4">
                      <MangoBadge tone={v.badge.tone}>{v.badge.label}</MangoBadge>
                    </div>
                  ) : null}
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {v.name}
                      </h3>
                      <p className="mt-1 text-sm text-emerald-700 bg-emerald-50 inline-flex rounded px-2 py-0.5">
                        নওগাঁর বিশেষ
                      </p>
                    </div>
                    <p className="text-[#7e5700] font-extrabold text-xl whitespace-nowrap">
                      ৳ {v.price.amount}
                      <span className="ml-1 text-sm font-semibold text-slate-600">
                        {v.price.unitLabel}
                      </span>
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {v.description}
                  </p>

                  <div className="flex gap-2">
                    <MangoOrderButton
                      varietyId={v.id}
                      title={v.name}
                      imageUrl={v.imageUrl}
                      unitPrice={v.price.amount}
                      unitLabel={v.price.unitLabel}
                      className={
                        isPreorder
                          ? "flex-1 rounded-xl py-3 font-semibold border-2 border-[#7e5700] text-[#7e5700] hover:bg-[#7e5700] hover:text-white transition-colors"
                          : "flex-1 rounded-xl py-3 font-semibold text-white bg-gradient-to-br from-[#ffb300] to-[#ff8f00] hover:opacity-95 transition-opacity"
                      }
                    >
                      {v.ctaLabel}
                    </MangoOrderButton>
                    {isPreorder ? (
                      <button
                        type="button"
                        aria-label="Bookmark"
                        className="w-12 h-12 rounded-xl border-2 border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <Bookmark className="w-5 h-5" />
                      </button>
                    ) : (
                      <AddToCartButton
                        variant="icon"
                        line={{
                          id: `mango:${v.id}`,
                          title: v.name,
                          imageUrl: v.imageUrl,
                          unitPrice: v.price.amount,
                          unitLabel: v.price.unitLabel,
                        }}
                        className="w-12 h-12 rounded-xl border-2 border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shrink-0"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MangoContainer>
    </section>
  );
}

