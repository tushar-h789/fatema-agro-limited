import MangoContainer from "@/components/mango/ui/mango-container";
import { mangoVarieties } from "@/components/mango/mango-data";
import MangoVarietiesGrid from "@/components/mango/varieties/varieties-grid";
import MangoHarvestProgress from "@/components/mango/varieties/harvest-progress";

export default function MangoVarietiesPage() {
  return (
    <div className="bg-white">
      <main className="pt-28 pb-16">
        <section className="mb-12">
          <MangoContainer>
            <div className="text-center space-y-5">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#7e5700]">
                আমাদের সব সেরা জাতের আম
              </h1>
              <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg">
                নওগাঁর বরেন্দ্র অঞ্চলের উর্বর মাটি থেকে সংগৃহীত বিষমুক্ত ও
                কার্বাইডমুক্ত প্রিমিয়াম কোয়ালিটির আম। সরাসরি বাগান থেকে আপনার
                ঘরে পৌঁছে দিচ্ছি আমরা।
              </p>
            </div>
          </MangoContainer>
        </section>

        <MangoVarietiesGrid items={mangoVarieties} />
        <MangoHarvestProgress />
      </main>
    </div>
  );
}

