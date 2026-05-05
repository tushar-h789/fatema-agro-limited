import Link from "next/link";
import MangoContainer from "@/components/mango/ui/mango-container";

type Props = {
  searchParams: { ref?: string };
};

export default function CheckoutSuccessPage({ searchParams }: Props) {
  const ref = searchParams.ref ?? "";

  return (
    <div className="bg-white">
      <main className="pt-28 pb-20">
        <MangoContainer>
          <div className="max-w-lg mx-auto text-center rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50/80 to-white p-8 md:p-10 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-3xl">
              🎉
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mt-5">
              অভিনন্দন
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
              আপনার অর্ডার সফলভাবে জমা হয়েছে
            </h1>
            <p className="text-slate-600 mt-4 leading-relaxed text-base">
              খুব শীঘ্রই আমাদের প্রতিনিধি বা সংশ্লিষ্ট টিমের কেউ আপনার সঙ্গে{" "}
              <span className="font-semibold text-slate-800">ফোন বা মেসেজে</span>{" "}
              যোগাযোগ করে অর্ডারটি চূড়ান্তভাবে নিশ্চিত করবে। তার আগে অনুগ্রহ করে
              কল/মেসেজের জন্য প্রস্তুত থাকুন।
            </p>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              আপনার অর্ডার বিস্তারিত আমাদের কাছে পৌঁছেছে; প্রক্রিয়াকরণের জন্য
              একটু সময় লাগতে পারে—ধন্যবাদ আমাদের সাথে থাকার জন্য।
            </p>
            {ref ? (
              <p className="mt-4 text-sm font-mono text-slate-700 bg-white/80 rounded-lg py-2 px-3 border border-slate-200 inline-block">
                রেফারেন্স: {ref}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/mango"
                className="inline-flex justify-center rounded-full px-8 py-3 font-semibold text-white bg-gradient-to-br from-[#ffb300] to-[#ff8f00] shadow-md hover:shadow-lg transition-shadow"
              >
                আমের পেজ
              </Link>
              <Link
                href="/"
                className="inline-flex justify-center rounded-full px-8 py-3 font-semibold border-2 border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
              >
                হোম
              </Link>
            </div>
          </div>
        </MangoContainer>
      </main>
    </div>
  );
}
