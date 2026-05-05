import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import MangoContainer from "../ui/mango-container";
import { mangoAbout } from "../mango-data";

export default function MangoAbout() {
  return (
    <section className="py-16">
      <MangoContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-10 overflow-hidden">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-amber-200/40 rounded-full blur-3xl" />
            <div className="relative rounded-[32px] overflow-hidden shadow-xl border border-slate-200">
              <img
                src={mangoAbout.imageUrl}
                alt="Mango orchard in Naogaon"
                className="w-full h-[360px] md:h-[460px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-lg border border-amber-200 max-w-[260px]">
              <p className="text-[#7e5700] font-extrabold text-4xl">
                {mangoAbout.stat.value}
              </p>
              <p className="text-slate-600 text-sm leading-tight mt-1">
                {mangoAbout.stat.label}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-bold tracking-widest uppercase text-[#7e5700]">
                {mangoAbout.eyebrow}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                {mangoAbout.title}
              </h2>
              <p className="text-slate-600">{mangoAbout.body}</p>
            </div>

            <ul className="space-y-3">
              {mangoAbout.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span className="text-slate-800 font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#faq"
              className="inline-flex items-center gap-2 font-semibold text-[#7e5700] hover:gap-3 transition-all"
            >
              আমাদের আরও জানুন <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </MangoContainer>
    </section>
  );
}

