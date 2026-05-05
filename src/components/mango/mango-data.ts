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
  tags?: ("sweet" | "tangySweet" | "popular" | "preorder")[];
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
    tags: ["sweet", "popular"],
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
    tags: ["tangySweet", "popular"],
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
    tags: ["sweet", "preorder"],
  },
  {
    name: "ফজলী",
    badge: { label: "বড় আকার", tone: "primary" },
    price: { amount: 100, unitLabel: "/ কেজি" },
    description: "আকারে বিশাল এবং বেশ মিষ্টি। এটি আমের অন্যতম জনপ্রিয় বড় জাত।",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAwt3H3ul-Q8hcO6OGbyEpPELp_t8d0rav7Fm5RiyBEEB3IAJ3-rLrtmlJSzHzuXzNhxTY5xlq1owaggOlIjF7As7av8kxc4UuTttyduYgH9NQ1xG5iVhyFwVbQ7fuZwIc8ZoQ5U3SfyfpxqLdlZYiNXgWdSGTVR9I1WAtJymDktYwpCtfvnCaD6_ZjxtdkrY1WS8-WUl10BaQkzn15_Ozo94HGqF7aNfp508aDqJ3ftTtwYOD6yRqbYcgf1qbk1F477PxRwbHBMk",
    ctaLabel: "অর্ডার করুন",
    tags: ["tangySweet"],
  },
  {
    name: "গোপালভোগ",
    badge: { label: "আগাম জাত", tone: "secondary" },
    price: { amount: 140, unitLabel: "/ কেজি" },
    description:
      "মৌসুমের শুরুতেই এই আমের স্বাদ নেয়া যায়। এটি অত্যন্ত মিষ্টি ও সুস্বাদু।",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuk6D1IdYfKCdMHaJIv2ZEzHj1XH_AjP96kCcc_fWC3BX2R6S4q3NTKrd3XXmb9So2JBJrDv-7kn0Wztb3cfMVkSJLigLZJF7lAB2skX_Lr_cCDik4dcTJbFCMyiOfR0fs89Sb0mhLZyiyWg4j_mVhYDnr8O3f3ZfKnrp-z1e-mALBHmjsTLpx5qK3hp7EminSTbc1GjN_gCPjjJ0uimMoKI1S0NYwoktHmbfYyj4aVFXya-xAG3UjbozAUezzJoX1vPXSXk7U55g",
    ctaLabel: "অর্ডার করুন",
    tags: ["sweet", "popular"],
  },
  {
    name: "ক্ষীরশাপাত",
    badge: { label: "জিআই পণ্য", tone: "secondary" },
    price: { amount: 145, unitLabel: "/ কেজি" },
    description:
      "অপূর্ব স্বাদ এবং গন্ধে ভরপুর। এর মিষ্টি স্বাদ আপনাকে মুগ্ধ করবেই।",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCY_C7KiSOV3mIUmq-LOMApRVNAeJfwmjMli75GPsognTbllY9Ws9x2F5GJFeRQnIZ8cPLEc4uBLykYyDQZOASL9j7eOsxe8NHvrpaZGzLx8wXf-cPdFucLA8-prDcLU6fEGT3wHv2rmLl9cpvtCTmdTbLVKqzytm6_cYq7W3Q7jMSnxIIRXWmEcnnInoPK8qEm101rhK54otY8Go7e7hFJdNtgDx58NM60z0bk8oYAAGqXfdgpYgaazh_Tn_lw-fgt5Ih26f9WWLQ",
    ctaLabel: "অর্ডার করুন",
    tags: ["sweet"],
  },
  {
    name: "আশ্বিনী",
    badge: { label: "নাবি জাত", tone: "primary" },
    price: { amount: 90, unitLabel: "/ কেজি" },
    description: "মৌসুমের শেষের দিকে এই আম পাওয়া যায়। বেশ বড় এবং মিষ্টি এই আম।",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7n3gZ9PR03v6SpMczxAqlKPQnZq3_pqrRAFm2-cSDu9JX_8RpxnsgSo48SykbFUwam05QLyhvyxnCJosx2KiWXAsr7AQ03KHvoh9W3GJAGbbXxZjrJGEsBlLlEDYqGXTE2KQQkYoN8ZQvLCDb5RBn8ZwZ6Wt6BVi3_-rSG7gdywzLrXgE6h_jj8XH8O_v_4CW_0OTFhVKknnT6xJ_8LWNv7DrWorVF-PmnddTjJTafNXJiWEWdu7O8ypa_r2MWMxkyYt7-EkXNa4",
    ctaLabel: "অর্ডার করুন",
    tags: ["tangySweet"],
  },
  {
    name: "হাড়িভাঙ্গা",
    badge: { label: "অনন্য স্বাদ", tone: "secondary" },
    price: { amount: 125, unitLabel: "/ কেজি" },
    description: "এর আকার এবং স্বাদ সম্পূর্ণ আলাদা। মাংসল এবং দারুণ মিষ্টি এই জাতটি।",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCwz3ZDy3KgWE-MGIW3ciAv4YfIqGKHev8RPXy9D3h41XVmWAZkpsPFfTcj5MjLQDgiBhWk8fT8iyatMS7tSTPEBO7QE-NdgzL_YuoSHVCENhvoG2uP74OyZk9MD1FBGfMKKDTWMkQSgEq0HNVR68bGtpKqrsnnwRl0lRIMq1p1cv_yg1vkHfxHDWr8khW6M2jROEyoPhaXAM9Ia6PBSZ971KK6TfiPDEvRcoBn44vKpjlo2TYDg4_LeCQiKVUpQ9TCgCdrACHznkg",
    ctaLabel: "অর্ডার করুন",
    tags: ["sweet"],
  },
];

export const mangoHarvest = {
  title: "হারভেস্ট আপডেট",
  body: "এখন আমাদের বাগানে আমের ভরা মৌসুম চলছে। সতেজ আম পেতে দ্রুত অর্ডার করুন।",
  percent: 75,
  leftLabel: "মৌসুম শুরু",
  centerLabel: "বর্তমান অবস্থা",
  rightLabel: "মৌসুম শেষ",
};

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

