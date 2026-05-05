import { MessageCircle } from "lucide-react";
import MangoContainer from "../ui/mango-container";
import { mangoCta } from "../mango-data";

export default function MangoCta() {
  return (
    <section className="py-16">
      <MangoContainer>
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-14 text-white bg-gradient-to-br from-[#ffb300] to-[#ff8f00] shadow-xl">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold">
              {mangoCta.title}
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">{mangoCta.body}</p>

            <div className="flex flex-col md:flex-row justify-center gap-3 pt-2">
              <a
                href="tel:01700000000"
                className="inline-flex items-center justify-center rounded-full bg-white text-[#7e5700] px-10 py-4 font-bold shadow-lg hover:bg-white/95 transition-colors"
              >
                {mangoCta.primaryCta}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-10 py-4 font-bold shadow-lg hover:bg-emerald-800 transition-colors gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {mangoCta.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </MangoContainer>
    </section>
  );
}

