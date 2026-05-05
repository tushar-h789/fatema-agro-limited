"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import MangoContainer from "@/components/mango/ui/mango-container";
import { useCart } from "@/components/cart/cart-store";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendCheckoutOrderEmail } from "@/lib/send-checkout-email";

function formatBDT(amount: number) {
  try {
    return new Intl.NumberFormat("bn-BD", {
      style: "currency",
      currency: "BDT",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `৳ ${amount}`;
  }
}

function isKgLine(unitLabel?: string) {
  return (unitLabel ?? "").includes("কেজি");
}

const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে")
    .max(120, "নাম খুব বড়"),
  phone: z
    .string()
    .min(10, "সঠিক মোবাইল নম্বর দিন")
    .max(20, "নম্বর খুব বড়")
    .regex(/^[0-9+\-\s()]{10,20}$/, "শুধুমাত্র নম্বর ও + - () ব্যবহার করুন"),
  email: z.union([z.literal(""), z.string().email("সঠিক ইমেইল দিন")]),
  address: z
    .string()
    .min(8, "বিস্তারিত ঠিকানা দিন (রোড, বাড়ি নম্বর)")
    .max(500, "ঠিকানা খুব বড়"),
  city: z
    .string()
    .min(2, "শহর / উপজেলা দিন")
    .max(80, "খুব বড়"),
  notes: z.string().max(1000, "নোট খুব বড়").optional(),
});

type FormState = z.infer<typeof checkoutSchema>;
type FieldErrors = Partial<Record<keyof FormState, string>>;

/** EmailJS থ্রো করে এমন অবজেক্ট (contact/orders পেজের মতো catch) */
function checkoutEmailErrorMessage(err: unknown): string {
  const text =
    typeof err === "object" &&
    err !== null &&
    "text" in err &&
    typeof (err as { text: unknown }).text === "string"
      ? (err as { text: string }).text
      : "";
  if (/invalid grant|reconnect your gmail/i.test(text)) {
    return (
      "মেইল সার্ভিস (Gmail) সংযোগ মেয়াদোত্তীর্ণ। EmailJS ড্যাশবোর্ডে Gmail পুনরায় সংযোগ করুন।"
    );
  }
  return "অর্ডার মেইল পাঠাতে সমস্যা হয়েছে। ইন্টারনেট চেক করে আবার চেষ্টা করুন।";
}

const initialForm: FormState = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  notes: "",
};

export default function CheckoutPage() {
  const router = useRouter();
  const { state, hydrated, subtotal, totalItems, clear } = useCart();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  /** অর্ডার সফল হলে clear() এ কার্ট খালি হয়; তখন এই ref ছাড়া useEffect আবার /cart এ পাঠিয়ে সাকসেস পেজ ভেঙে দেয় */
  const completingOrderRef = useRef(false);

  useEffect(() => {
    if (!hydrated) return;
    if (state.lines.length === 0 && !completingOrderRef.current) {
      router.replace("/cart");
    }
  }, [hydrated, state.lines.length, router]);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSubmitError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const parsed = checkoutSchema.safeParse(form);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState | undefined;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    const orderRef = `FA-${Date.now().toString(36).toUpperCase()}`;

    setSubmitting(true);
    try {
      // contact/page.tsx / orders/page.tsx — একইভাবে emailjs.send ক্লায়েন্ট থেকে
      const response = await sendCheckoutOrderEmail({
        customer: {
          fullName: parsed.data.fullName.trim(),
          phone: parsed.data.phone.trim(),
          email: parsed.data.email.trim(),
          address: parsed.data.address.trim(),
          city: parsed.data.city.trim(),
          notes: (parsed.data.notes ?? "").trim(),
        },
        lines: state.lines,
        subtotal,
        totalItems,
        orderRef,
      });

      if (response.status === 200) {
        completingOrderRef.current = true;
        clear();
        router.push(`/checkout/success?ref=${encodeURIComponent(orderRef)}`);
      } else {
        setSubmitError("কিছু ভুল হয়েছে, আবার চেষ্টা করুন।");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitError(checkoutEmailErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  }

  if (!hydrated) {
    return (
      <div className="bg-white min-h-[50vh] pt-28 pb-16">
        <MangoContainer>
          <p className="text-slate-600 text-center py-20">কার্ট লোড হচ্ছে…</p>
        </MangoContainer>
      </div>
    );
  }

  if (state.lines.length === 0) {
    return null;
  }

  return (
    <div className="bg-white">
      <main className="pt-28 pb-16">
        <MangoContainer>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                চেকআউট
              </h1>
              <p className="text-slate-600 mt-1">
                ডেলিভারি ঠিকানা নিশ্চিত করুন। পেমেন্ট:{" "}
                <span className="font-semibold text-[#7e5700]">
                  ক্যাশ অন ডেলিভারি
                </span>
              </p>
            </div>
            <Link
              href="/cart"
              className="text-sm font-semibold text-[#7e5700] hover:underline"
            >
              ← কার্টে ফিরে যান
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-10">
            <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 md:p-8">
              <h2 className="text-lg font-extrabold text-slate-900 mb-4">
                অর্ডারকৃত পণ্য
              </h2>
              <ul className="space-y-4">
                {state.lines.map((l) => (
                  <li
                    key={l.id}
                    className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                      {l.imageUrl ? (
                        <Image
                          src={l.imageUrl}
                          alt={l.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-slate-900 truncate">
                        {l.title}
                      </p>
                      <p className="text-sm text-slate-600 mt-0.5">
                        {formatBDT(l.unitPrice)}{" "}
                        <span className="text-slate-400">{l.unitLabel}</span>
                      </p>
                      <p className="text-sm text-slate-700 mt-1">
                        পরিমাণ:{" "}
                        <span className="font-semibold">
                          {l.quantity}
                          {isKgLine(l.unitLabel) ? " কেজি" : ""}
                        </span>
                      </p>
                    </div>
                    <p className="font-extrabold text-slate-900 shrink-0 tabular-nums">
                      {formatBDT(l.unitPrice * l.quantity)}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center">
                <span className="font-semibold text-slate-700">মোট</span>
                <span className="text-xl font-extrabold text-[#7e5700] tabular-nums">
                  {formatBDT(subtotal)}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                ডেলিভারি চার্জ কল/মেসেজে নিশ্চিত করা হবে।
              </p>
            </section>

            <section>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-5 sticky top-24"
              >
                <h2 className="text-lg font-extrabold text-slate-900">
                  ডেলিভারি তথ্য
                </h2>

                <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-sm text-emerald-900">
                  <span className="font-bold">পেমেন্ট:</span> ক্যাশ অন
                  ডেলিভারি — পণ্য হাতে পেয়ে টাকা দিন।
                </div>

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-slate-800 mb-1"
                  >
                    পূর্ণ নাম <span className="text-rose-600">*</span>
                  </label>
                  <Input
                    id="fullName"
                    value={form.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    className="bg-white"
                    autoComplete="name"
                  />
                  {errors.fullName ? (
                    <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
                  ) : null}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-800 mb-1"
                    >
                      মোবাইল <span className="text-rose-600">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      className="bg-white"
                      placeholder="০১৭xxxxxxxx"
                      autoComplete="tel"
                    />
                    {errors.phone ? (
                      <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-800 mb-1"
                    >
                      ইমেইল (ঐচ্ছিক)
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      className="bg-white"
                      autoComplete="email"
                    />
                    {errors.email ? (
                      <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-slate-800 mb-1"
                  >
                    সম্পূর্ণ ঠিকানা <span className="text-rose-600">*</span>
                  </label>
                  <Textarea
                    id="address"
                    value={form.address}
                    onChange={(e) => setField("address", e.target.value)}
                    className="bg-white min-h-[88px]"
                    placeholder="বাড়ি/রোড, থানা, বিস্তারিত…"
                    autoComplete="street-address"
                  />
                  {errors.address ? (
                    <p className="text-xs text-rose-600 mt-1">{errors.address}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-slate-800 mb-1"
                  >
                    শহর / জেলা <span className="text-rose-600">*</span>
                  </label>
                  <Input
                    id="city"
                    value={form.city}
                    onChange={(e) => setField("city", e.target.value)}
                    className="bg-white"
                    autoComplete="address-level2"
                  />
                  {errors.city ? (
                    <p className="text-xs text-rose-600 mt-1">{errors.city}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-semibold text-slate-800 mb-1"
                  >
                    অতিরিক্ত নোট (ঐচ্ছিক)
                  </label>
                  <Textarea
                    id="notes"
                    value={form.notes ?? ""}
                    onChange={(e) => setField("notes", e.target.value)}
                    className="bg-white min-h-[72px]"
                    placeholder="ডেলিভারি সময়, গেট নম্বর ইত্যাদি"
                  />
                  {errors.notes ? (
                    <p className="text-xs text-rose-600 mt-1">{errors.notes}</p>
                  ) : null}
                </div>

                {submitError ? (
                  <p className="text-sm text-rose-600 font-medium">{submitError}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full py-3.5 font-extrabold text-white bg-gradient-to-br from-[#ffb300] to-[#ff8f00] shadow-lg hover:shadow-xl transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "পাঠানো হচ্ছে…" : "অর্ডার কনফার্ম করুন"}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  নিশ্চিত করলে অর্ডারের বিবরণ আমাদের অ্যাডমিন/অপারেশন টিমের ইমেইলে
                  চলে যাবে। আমরা শীঘ্রই ফোন বা মেসেজে যোগাযোগ করব।
                </p>
              </form>
            </section>
          </div>
        </MangoContainer>
      </main>
    </div>
  );
}
