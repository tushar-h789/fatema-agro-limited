export type MangoFilterKey = "all" | "sweet" | "tangySweet" | "popular" | "preorder";

export const mangoFilters: { key: MangoFilterKey; label: string }[] = [
  { key: "all", label: "সব আম" },
  { key: "sweet", label: "মিষ্টি আম" },
  { key: "tangySweet", label: "টক-মিষ্টি" },
  { key: "popular", label: "জনপ্রিয়" },
  { key: "preorder", label: "প্রি-অর্ডার" },
];

