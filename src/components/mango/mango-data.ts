export type MangoFeature = {
  title: string;
  description: string;
  tone: "primary" | "secondary" | "tertiary";
};

export type MangoVariety = {
  name: string;
  badge?: { label: string; tone: "primary" | "secondary" | "neutral" };
  price: { amount: number; unitLabel: string };
  description: string;
  imageUrl: string;
  ctaLabel: string;
};

export type MangoTestimonial = {
  name: string;
  location: string;
  quote: string;
  avatarUrl: string;
};

export type MangoFaq = {
  question: string;
  answer: string;
};

export const mangoHero = {
  title: "নওগাঁর বিষমুক্ত সেরা",
  highlight: "ল্যাংড়া ও আম্রপালি",
  subtitle:
    "সরাসরি নওগাঁর বাগান থেকে সংগৃহীত, কোনো প্রকার ক্ষতিকারক কেমিক্যাল ছাড়াই প্রাকৃতিকভাবে পাকানো আম পৌঁছে দিচ্ছি আমরা। আমাদের ঐতিহ্যের স্বাদ নিন পরম নিশ্চিন্তে।",
  priceBadge: { price: 120, unitLabel: "/ কেজি", note: "বাগান থেকে সরাসরি রেট" },
  trustBadge: "১০০% ফরমালিন মুক্ত",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAC9bZ_B2L9Tg3oCSTvsyJqd4ybthUaphUSw4DHrt7J4RFRD13Q07kYq75Yvc3xvxKf0nBRu7O32acmK87gWn5k5RArkg60KFRfP-MchiArB68C22Xss6iIAB52xjBLQtFSkYWKSHHinDRgtZOurg-Z4C10hoPT5jX0KWit1bQv3SvKLVcnaNpNQ4clztquxsBUZwfJDVQkggtE_nTvinsA972sOVgh5Zf0f45dYmJhrDSOPjeuY27ovta2BZLs5FvZiD9y8fKEG8Y",
};

export const mangoFeatures: MangoFeature[] = [
  {
    title: "নিজস্ব বাগান",
    description: "নওগাঁর প্রসিদ্ধ বাগানে আমাদের তত্ত্বাবধানে প্রতিটি আম বড় হয়।",
    tone: "primary",
  },
  {
    title: "সম্পূর্ণ বিষমুক্ত",
    description: "কোনো ফরমালিন বা ক্যালসিয়াম কার্বাইড ব্যবহার করা হয় না।",
    tone: "secondary",
  },
  {
    title: "দ্রুত ডেলিভারি",
    description: "অর্ডারের ২৪-৪৮ ঘণ্টার মধ্যে সারা দেশে হোম ডেলিভারি।",
    tone: "tertiary",
  },
  {
    title: "গ্যারান্টিযুক্ত স্বাদ",
    description: "স্বাদে বা মানে অসন্তুষ্ট হলে রয়েছে মানি ব্যাক গ্যারান্টি।",
    tone: "primary",
  },
];

export const mangoVarieties: MangoVariety[] = [
  {
    name: "আম্রপালি",
    badge: { label: "স্টকে আছে", tone: "secondary" },
    price: { amount: 120, unitLabel: "/ কেজি" },
    description:
      "অত্যন্ত মিষ্টি এবং আঁশহীন এই আমটি ছোট হলেও স্বাদে অতুলনীয়। নওগাঁর আম্রপালি সারা দেশে জনপ্রিয়।",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOFwYb9W2ChkxxLbvWJnIzpG97LdmZSclP9Wxe4p_fLnBAiVDYqSwrBmWKfrKJ_0vNLuneMNlpdTStWo0u_AwvGRP-M5Wj1Iym8I22InBK4Vo6lViN591c-WYkTkn2UrAfylkUne4KVH4iR7-xfZV_DB2QrTyJddKjWU8qmktDjDevQ5btmSYwjRWUASeL18HlO0OOGrw2YL96Ath__QvFM59WzZI2uFcxF7C0NGva_JzsBCeqTBhTRfIF0DcE3vYIZR7-8Jy5Brc",
    ctaLabel: "অর্ডার করুন",
  },
  {
    name: "ল্যাংড়া",
    badge: { label: "সেরা বিক্রীত", tone: "primary" },
    price: { amount: 110, unitLabel: "/ কেজি" },
    description:
      "অসাধারণ সুগন্ধ আর পাতলা আটি এই আমের বৈশিষ্ট্য। ল্যাংড়া আমের স্বাদ মুখে লেগে থাকার মতো।",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWRxf6cG_sHCXzD0gxbl3hSBHhw0ZafL7VFiSgEBazGlipoZXDsvyi_ZQ65E6tMBCT71GY2cbOms1DsgZwp87EdduEVGMGb-AdzmqUBFo3MFjRL6BDz3JBnsNQcDUe_fGGYrmCQFrw6x93oV2PgjI4UdZfXD25qIH93Edl7ZafHe0VyH-VZuepfeLmonJslmaUNn7EaP9dMr_qFkJQU7XGsgfKjX1vSj6HKKO0JOHMm0Dbak9fJsp4IqnksndsARWKtLUvopmEtms",
    ctaLabel: "অর্ডার করুন",
  },
  {
    name: "হিমসাগর",
    badge: { label: "প্রি-অর্ডার", tone: "neutral" },
    price: { amount: 130, unitLabel: "/ কেজি" },
    description:
      "মিষ্টির দিক দিয়ে হিমসাগর সবার সেরা। এর হালকা লালচে আভা এবং সুমিষ্ট স্বাদ আপনাকে মুগ্ধ করবেই।",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzbJQw35_evRFib8b2g4-7YDKTvY8AJETsawdpaaBBqSQLlpb4ygYTINlcRZnkJ1qxvPT_2nmbcLBYKA_REFD69pm7WInM-DhwFB9PerDH8VqD8y9IFqZdJbAsGKH193r-W01MUUT5RS1PkfCs72bAY6zpA2luekDtU1jJW0eIPjK54DOJ-SbsyeaK70SiqziU2qJ6dIaEE67XDR5dxKQvPkPDEqbLB5H7IQYCUo7HcArt2gk19r7A09BrMCT9T1sJxprC5fntZyQ",
    ctaLabel: "প্রি-অর্ডার",
  },
];

export const mangoAbout = {
  eyebrow: "আমাদের কথা",
  title: "নওগাঁর মাটির খাঁটি স্বাদ পৌঁছে দিচ্ছি আমরা",
  body:
    "আমরা কোনো মধ্যস্বত্বভোগী নয়, বরং নওগাঁর পোরশা ও সাপাহার উপজেলার বাগান মালিকদের একটি সংগঠন। আমাদের মূল লক্ষ্য হলো সাধারণ মানুষের কাছে আমে কোনো কেমিক্যাল ছাড়াই পৌঁছে দেওয়া।",
  bullets: [
    "সরাসরি বাগান থেকে প্যাকেজিং",
    "স্বাস্থ্যসম্মত উপায়ে বাছাই ও ডেলিভারি",
    "কৃষকদের ন্যায্য মূল্য নিশ্চিত করা",
  ],
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCHw932oVKDEznqb0cuN54EWAFcPIwrfG1KMzLz5OOLo3DwoIp7-6xZfMAyUcppOLyv16iZ7ZNfcZ3auDbfQxN6SyK5wbv0AR3W7pqP2AEZWDQBA-aO6HR-tDOOYa-8BEDD8Wuy3lOcnYHiyPVrvKJTrZVd79slFBezI8IET85wU4ZeU1rT8iV5hp0SG70m_K3SlrgK0-kq9oADesd-GhcpHbsWIMVvi7f6jybDunF86dfPuJstPk_X7rJ_mQVlnZ2GqI7mUpnbLJs",
  stat: { value: "১৫+", label: "বছরের অভিজ্ঞতায় সেরা বাগান পরিচর্যা" },
};

export const mangoTestimonials: MangoTestimonial[] = [
  {
    name: "আরিফুর রহমান",
    location: "ঢাকা",
    quote:
      "আমি গত ৩ বছর ধরে এদের থেকে আম নিচ্ছি। নওগাঁর আম্রপালি যে এত মিষ্টি হতে পারে তা আগে জানতাম না। ধন্যবাদ আপনাদের!",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO6n12lsQjyGtmT7pn8BT2OIiVOev7V8U3qsIJRlSq3_nuvKAeIprTikR3ME3zv6nKxwR2S7WhKwNMgdN4_LsJ03ux1FtjJgdqJBlrFGfNNXkLx0IrtTnXQ42_GnNNULW4aYYeqe3vUFPe8tDgaJC4RChMENnoX2X-eAUBPBVfOcxbmId7Y833H-NNpJ5sJ_bWRiWvOpAjrh23A4JXuk31np9bSpQ8fHoBFv5-MTFpP-iEwIEx6zC6RhSpLI_ZfkboO1g1fnQ1vmE",
  },
  {
    name: "নুসরাত জাহান",
    location: "চট্টগ্রাম",
    quote:
      "খুবই ফ্রেশ এবং সুন্দর প্যাকিং। একদম অক্ষত অবস্থায় ডেলিভারি পেয়েছি। বাচ্চাদের জন্য নিশ্চিন্তে এই আম খাওয়ানো যায়।",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkXq6NqDDgxSMoAwCtzEqQBn_yBshxI1edxauRBvUJxEiwU-5jEB37gMZXjxjI8RpMMYAQhCtKlaejgmB_5pHp3sutaipvVAgO8asf3VhsoK182vRqxpA0RdSLkTj4UFcuKZxfPaO0yY-Fn9YLGTVDhzXoDlsnUI7_VI6o_BA9qDcnS0EqXYkuIIXoDTRlWmDmEekfnnMUdSK7_RCzwFaYaJjDOczs5wQr0Ud05jrQJkFtMR30_jXyB6wSFb1L5R_CRpwqzeHUz_w",
  },
  {
    name: "তানভীর আহমেদ",
    location: "সিলেট",
    quote:
      "ল্যাংড়া আমের ফ্লেভার ছিল জাস্ট ওয়াও! ডেলিভারিও ছিল খুব ফাস্ট। আম প্রেমীদের জন্য রিকমেন্ডেড সার্ভিস।",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjc9omfyh1hXTlAgNkSjk-GcyIky-pLwqDLdNiLPeSGpHOrr_ED9Qojohu9goEn7zohMqoi99txmL-YOHj-V-CbJBNZjgUHH99TnivXXBnjAgz7fisA-s6LKDpyetjOOJtjWmEo9ivxXFfxSoc3x4qlSJGXS9UTRwmEXVu7HO3CUWq3VKhgkYzkRAUQd6-VgZylU_AK-WyzRJWm_KeOnUHq2EVCwuOFI_pnf5zw6u4Ljj9KD1wDY0FrPo2HH_A8GBPPIBhpC7oym0",
  },
];

export const mangoFaqs: MangoFaq[] = [
  {
    question: "ডেলিভারি চার্জ কত?",
    answer:
      "ঢাকার ভেতরে ডেলিভারি চার্জ ১০০ টাকা এবং ঢাকার বাইরে ১৫০ টাকা। তবে ২০ কেজির বেশি অর্ডার করলে ডেলিভারি চার্জ সম্পূর্ণ ফ্রি!",
  },
  {
    question: "আমগুলো কি প্রাকৃতিকভাবে পাকানো?",
    answer:
      "হ্যাঁ, আমরা কোনো ক্যালসিয়াম কার্বাইড ব্যবহার করি না। আমগুলো ঝুড়িতে খড় দিয়ে ঢেকে রাখা হয় এবং ২-৩ দিনের মধ্যে স্বাভাবিকভাবেই পেকে যায়।",
  },
  {
    question: "যদি আম নষ্ট বের হয় তাহলে কি করব?",
    answer:
      "পরিবহনের কারণে কোনো আম নষ্ট হলে ছবি তুলে আমাদের জানাবেন। আমরা পরের অর্ডারের সাথে তা সমন্বয় করব অথবা টাকা ফেরত দেব।",
  },
];

export const mangoCta = {
  title: "আপনার প্রিয় আমের জাতটি এখনই বুক করুন!",
  body:
    "আমাদের আমের সিজন সীমিত সময়ের জন্য। বাগানের সেরা আমটি পেতে স্টক শেষ হওয়ার আগেই অর্ডার নিশ্চিত করুন।",
  primaryCta: "অর্ডার করুন (কল: ০১৭০০-০০০০০০)",
  secondaryCta: "মেসেজ পাঠান",
};

