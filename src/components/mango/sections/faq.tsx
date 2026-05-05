import MangoContainer from "../ui/mango-container";
import MangoSectionHeading from "../ui/mango-section-heading";
import { mangoFaqs } from "../mango-data";

export default function MangoFaq() {
  return (
    <section id="faq" className="py-16">
      <MangoContainer>
        <MangoSectionHeading title="সাধারণ কিছু প্রশ্ন" />

        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {mangoFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 open:bg-white open:shadow-sm transition-all"
            >
              <summary className="flex justify-between items-center font-semibold text-slate-900 cursor-pointer list-none">
                {faq.question}
                <span className="text-slate-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </MangoContainer>
    </section>
  );
}

