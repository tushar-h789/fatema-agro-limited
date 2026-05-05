import { Leaf, ShieldCheck, Truck, BadgeCheck } from "lucide-react";
import MangoContainer from "../ui/mango-container";
import MangoSectionHeading from "../ui/mango-section-heading";
import { mangoFeatures } from "../mango-data";

const icons = [Leaf, ShieldCheck, Truck, BadgeCheck] as const;

export default function MangoFeatures() {
  return (
    <section className="py-16">
      <MangoContainer>
        <MangoSectionHeading title="কেন আমাদের আম সেরা?" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mangoFeatures.map((f, idx) => {
            const Icon = icons[idx % icons.length];
            const toneBg =
              f.tone === "secondary"
                ? "bg-emerald-100"
                : f.tone === "tertiary"
                  ? "bg-orange-100"
                  : "bg-amber-100";
            const toneText =
              f.tone === "secondary"
                ? "text-emerald-700"
                : f.tone === "tertiary"
                  ? "text-orange-700"
                  : "text-amber-800";

            return (
              <div
                key={f.title}
                className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div
                  className={`w-14 h-14 ${toneBg} rounded-2xl flex items-center justify-center mx-auto`}
                >
                  <Icon className={`w-7 h-7 ${toneText}`} />
                </div>
                <h3 className="mt-4 font-bold text-lg text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </MangoContainer>
    </section>
  );
}

