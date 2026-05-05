/**
 * কার্ট চেকআউট → EmailJS (`emailjs-com`, শুধু ক্লায়েন্ট)।
 *
 * ## কেন এক সেট কাজ করে, আরেক সেট করে না?
 *
 * **১) একই অ্যাকাউন্টের তিনটিই লাগবে**  
 * `serviceId`, `templateId`, আর `publicKey` — তিনটিই **একই EmailJS লগইন** থেকে হতে হবে।
 * এক অ্যাকাউন্টের `service_d16j28f` + অন্য অ্যাকাউন্টের `publicKey` দিলে API ব্যর্থ হবে।
 * ড্যাশবোর্ডে: একই প্রোফাইলে **Email Services** ও **Email Templates** ও **Account → API keys → Public Key** খুলে কপি করুন।
 *
 * **২) Public Key vs Private Key**  
 * কোডে শুধু **Public Key**। Private Key ক্লায়েন্টে দেওয়া যাবে না এবং মিক্স করলে কাজ করবে না।
 *
 * **৩) ডোমেইন রেস্ট্রিকশন**  
 * কিছু অ্যাকাউন্টে **Security / Allowed domains** এ শুধু প্রোডাকশন ডোমেইন থাকে — তখন
 * `localhost` থেকে দ্বিতীয় সেট ফেলে, প্রথম সেট (অন্য অ্যাকাউন্ট) কাজ করতে পারে।
 * সমাধান: ওই অ্যাকাউন্টে `localhost` যোগ করুন, অথবা প্রোডাকশন URL থেকে টেস্ট করুন।
 *
 * **৪) ইমেইল সার্ভিস (Gmail) সংযোগ**  
 * নতুন `service_d16j28f` যদি Gmail দিয়ে যুক্ত থাকে, সেখানে **Reconnect** না থাকলে
 * `412` / `Invalid grant` হবে — প্রথম সার্ভিসে Gmail ঠিক থাকলে শুধু সেটাই মেইল পাঠাবে।
 *
 * **৫) টেমপ্লেট ভেরিয়েবল নাম**  
 * `send-checkout-email.ts` এখন **orders স্টাইল** + **contact-স্টাইল অ্যালিয়াস** পাঠায়।
 * তবুও টেমপ্লেটে যে নাম আছে (`{{...}}`), ড্যাশবোর্ডে দেখে মিলিয়ে নিন।
 *
 * বাকি সাইট: `contact` → service_9npt1t8; `orders` → একই সার্ভিস + template_l3sjxo8।
 */
// export const EMAILJS_ORDER = {
//   serviceId: "service_d16j28f",
//   templateId: "template_anpz4n9",
//   publicKey: "kBTgmwmSGzAskfSRK",
// } as const;
export const EMAILJS_ORDER = {
  serviceId: "service_9npt1t8",
  templateId: "template_l3sjxo8",
  publicKey: "1AXSdbPWEXJF4rnjo",
} as const;

/*
 * --- বিকল্প (নিজের নতুন টেমপ্লেট) — শুধু যখন উপরের নিয়ম মেনে তিনটিই একই অ্যাকাউন্টের: ---
 *
 * export const EMAILJS_ORDER = {
 *   serviceId: "service_d16j28f",
 *   templateId: "template_anpz4n9",
 *   publicKey: "kBTgmwmSGzAskfSRK",
 * } as const;
 */
