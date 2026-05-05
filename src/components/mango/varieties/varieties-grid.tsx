"use client";

import { useMemo, useState } from "react";
import MangoContainer from "../ui/mango-container";
import type { MangoVariety } from "../mango-data";
import MangoVarietyCard from "./variety-card";
import { mangoFilters, type MangoFilterKey } from "./filters";

export default function MangoVarietiesGrid({ items }: { items: MangoVariety[] }) {
  const [active, setActive] = useState<MangoFilterKey>("all");

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((i) => (i.tags ?? []).includes(active));
  }, [active, items]);

  return (
    <>
      <section className="mb-10">
        <MangoContainer>
          <div className="flex flex-wrap justify-center gap-3">
            {mangoFilters.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActive(f.key)}
                  className={
                    isActive
                      ? "px-7 py-3 rounded-full bg-[#7e5700] text-white font-extrabold shadow-md"
                      : "px-7 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold hover:bg-amber-100 hover:text-slate-900 transition-all"
                  }
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </MangoContainer>
      </section>

      <section>
        <MangoContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <MangoVarietyCard key={item.name} item={item} />
            ))}
          </div>
        </MangoContainer>
      </section>
    </>
  );
}

