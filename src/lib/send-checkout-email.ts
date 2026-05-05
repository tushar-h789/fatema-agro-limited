import emailjs from "emailjs-com";
import { EMAILJS_ORDER } from "@/config/emailjs-order";
import type { CartLine } from "@/components/cart/cart-types";

export type CheckoutCustomerPayload = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  notes: string;
};

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

function buildOrderLinesText(lines: CartLine[]) {
  return lines
    .map((l, i) => {
      const unit = isKgLine(l.unitLabel) ? "কেজি" : "ইউনিট";
      const lineTotal = l.unitPrice * l.quantity;
      return `${i + 1}. ${l.title}\n   পরিমাণ: ${l.quantity} ${unit}\n   প্রতি ইউনিট: ${formatBDT(l.unitPrice)} ${l.unitLabel ?? ""}\n   লাইন মোট: ${formatBDT(lineTotal)}`;
    })
    .join("\n\n");
}

/**
 * টেমপ্লেট প্যারাম — `orders/page.tsx` এর ফিল্ড + contact-স্টাইল অ্যালিয়াস।
 * নতুন টেমপ্লেট (`template_anpz4n9` ইত্যাদি) এ `{{name}}`, `{{message}}` থাকলেও ডেটা পৌঁছায়।
 */
function buildCheckoutTemplateParams(args: {
  customer: CheckoutCustomerPayload;
  lines: CartLine[];
  subtotal: number;
  totalItems: number;
  orderRef: string;
}) {
  const { customer, lines, subtotal, totalItems, orderRef } = args;

  const productName = lines
    .map((l) => `${l.title} (×${l.quantity})`)
    .join(" | ");

  const quantity = `${totalItems} ইউনিট`;
  const price = formatBDT(subtotal);

  const fullAddress = `${customer.address}, ${customer.city}`;

  const comments = [
    `[কার্ট চেকআউট] অর্ডার রেফ: ${orderRef}`,
    "পেমেন্ট: ক্যাশ অন ডেলিভারি",
    customer.email ? `গ্রাহক ইমেইল: ${customer.email}` : null,
    customer.notes ? `ডেলিভারি নোট: ${customer.notes}` : null,
    "",
    "—— বিস্তারিত লাইন ——",
    buildOrderLinesText(lines),
  ]
    .filter(Boolean)
    .join("\n");

  let orderSubmittedAt = "";
  try {
    orderSubmittedAt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Dhaka",
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date());
  } catch {
    orderSubmittedAt = new Date().toISOString();
  }

  return {
    // —— `orders` টেমপ্লেট (template_l3sjxo8) ——
    productName,
    quantity,
    price,
    fullName: customer.fullName,
    fullAddress,
    phoneNumber: customer.phone,
    comments,
    // —— contact / জেনেরিক টেমপ্লেট অ্যালিয়াস ——
    name: customer.fullName,
    email: customer.email || "N/A",
    phone: customer.phone,
    message: comments,
    time: orderSubmittedAt,
    order_ref: orderRef,
  };
}

/**
 * ফ্রন্টএন্ড থেকে `emailjs.send(...)` — `contact` / `orders` পেজের প্যাটার্ন।
 */
export function sendCheckoutOrderEmail(args: {
  customer: CheckoutCustomerPayload;
  lines: CartLine[];
  subtotal: number;
  totalItems: number;
  orderRef: string;
}) {
  const templateParams = buildCheckoutTemplateParams(args);

  return emailjs.send(
    EMAILJS_ORDER.serviceId,
    EMAILJS_ORDER.templateId,
    templateParams,
    EMAILJS_ORDER.publicKey
  );
}
