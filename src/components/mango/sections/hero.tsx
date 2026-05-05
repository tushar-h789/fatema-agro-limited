import Link from "next/link";
import MangoContainer from "../ui/mango-container";
import MangoBadge from "../ui/mango-badge";
import { mangoHero } from "../mango-data";
import Image from "next/image";

export default function MangoHero() {
  return (
    <section className="pt-28 pb-16">
      <MangoContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-7">
            <div>
              <MangoBadge tone="secondary">{mangoHero.trustBadge}</MangoBadge>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              {mangoHero.title} <br />
              <span className="text-[#7e5700]">{mangoHero.highlight}</span>{" "}
              এখন আপনার দোরগোড়ায়
            </h1>

            <p className="text-slate-600 text-base md:text-lg max-w-xl">
              {mangoHero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#varieties"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white bg-gradient-to-br from-[#ffb300] to-[#ff8f00] shadow-lg hover:shadow-xl transition-shadow"
              >
                এখনই সংগ্রহ করুন
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border-2 border-slate-300 text-slate-900 hover:bg-slate-50 transition-colors"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            {/* using <img> to avoid next/image remote config issues */}
            <Image
              src={mangoHero.heroImage}
              alt="Naogaon mangoes hero"
              className="h-[420px] md:h-[520px] w-full object-cover"
              loading="eager"
              width={500}
              height={500}
            />
            <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur px-5 py-4 rounded-2xl shadow-lg border border-[#ffb300]/30">
              <p className="text-[#7e5700] font-extrabold text-2xl md:text-3xl">
                ৳ {mangoHero.priceBadge.price}{" "}
                <span className="text-base font-semibold">
                  {mangoHero.priceBadge.unitLabel}
                </span>
              </p>
              <p className="text-slate-600 text-sm">{mangoHero.priceBadge.note}</p>
            </div>
          </div>
        </div>
      </MangoContainer>
    </section>
  );
}

