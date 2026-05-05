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
          <div className="max-w-lg mx-auto text-center rounded-2xl border border-emerald-100 bg-emerald-50/40 p-8 md:p-10">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-6">
              অর্ডার গ্রহণ করা হয়েছে
            </h1>
            <p className="text-slate-600 mt-3 leading-relaxed">
              ধন্যবাদ। আপনার অর্ডার আমাদের টিমের ইমেইলে পৌঁছেছে; শীঘ্রই ফোন বা
              মেসেজে নিশ্চিত করা হবে।
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
