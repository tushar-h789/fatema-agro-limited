import MangoContainer from "../ui/mango-container";
import { mangoHarvest } from "../mango-data";

export default function MangoHarvestProgress() {
  const percent = Math.max(0, Math.min(100, mangoHarvest.percent));

  return (
    <section className="mt-16">
      <MangoContainer>
        <div className="bg-amber-50 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-amber-100">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#7e5700] mb-3">
              {mangoHarvest.title}
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg">{mangoHarvest.body}</p>

            <div className="w-full bg-amber-100 h-4 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-br from-[#ffb300] to-[#ff8c00]"
                style={{ width: `${percent}%` }}
              />
            </div>

            <div className="flex justify-between text-xs md:text-sm font-extrabold text-[#7e5700]">
              <span>{mangoHarvest.leftLabel}</span>
              <span>
                {mangoHarvest.centerLabel} ({percent}%)
              </span>
              <span>{mangoHarvest.rightLabel}</span>
            </div>
          </div>
        </div>
      </MangoContainer>
    </section>
  );
}

