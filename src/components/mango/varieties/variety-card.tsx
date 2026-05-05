import Image from "next/image";
import MangoBadge from "../ui/mango-badge";
import type { MangoVariety } from "../mango-data";
import AddToCartButton from "@/components/cart/add-to-cart-button";
import MangoOrderButton from "@/components/mango/mango-order-button";

export default function MangoVarietyCard({ item }: { item: MangoVariety }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(126,87,0,0.15)] flex flex-col group transition-all duration-300 hover:-translate-y-2 border border-amber-100/60">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {item.badge ? (
          <div className="absolute top-4 right-4">
            <MangoBadge tone={item.badge.tone}>{item.badge.label}</MangoBadge>
          </div>
        ) : null}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-[#7e5700] mb-2">
          {item.name}
        </h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-[#7e5700] font-extrabold text-lg">
            ৳ {item.price.amount} {item.price.unitLabel}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-6">
          <AddToCartButton
            line={{
              id: `mango:${item.id}`,
              title: item.name,
              imageUrl: item.imageUrl,
              unitPrice: item.price.amount,
              unitLabel: item.price.unitLabel,
            }}
            className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
          />
          <MangoOrderButton
            varietyId={item.id}
            title={item.name}
            imageUrl={item.imageUrl}
            unitPrice={item.price.amount}
            unitLabel={item.price.unitLabel}
            className="bg-amber-400 text-[#6b4900] px-4 py-2 rounded-lg font-extrabold hover:brightness-95 transition-all"
          >
            {item.ctaLabel}
          </MangoOrderButton>
        </div>
      </div>
    </div>
  );
}

