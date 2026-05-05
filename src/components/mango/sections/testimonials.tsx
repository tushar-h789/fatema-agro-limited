import MangoContainer from "../ui/mango-container";
import MangoSectionHeading from "../ui/mango-section-heading";
import { mangoTestimonials } from "../mango-data";

function Stars() {
  return (
    <div className="flex text-[#ffb300]" aria-label="5 out of 5 stars">
      {"★★★★★".split("").map((s, i) => (
        <span key={i} className="text-lg leading-none">
          {s}
        </span>
      ))}
    </div>
  );
}

export default function MangoTestimonials() {
  return (
    <section className="py-16">
      <MangoContainer>
        <MangoSectionHeading
          title="ক্রেতাদের ভালোবাসা"
          subtitle="৫০০০+ সন্তুষ্ট গ্রাহকের আস্থার প্রতীক নওগাঁর আম্রকানন"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {mangoTestimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-7 space-y-5"
            >
              <Stars />
              <p className="text-slate-600 italic leading-relaxed">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MangoContainer>
    </section>
  );
}

