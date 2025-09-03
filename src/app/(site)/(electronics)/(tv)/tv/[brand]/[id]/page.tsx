import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllProducts } from "../../../../../../../../shared/data";
import Link from "next/link";

type Params = { params: { brand: string; id: string } };

export default function TVDetailsPage({ params }: Params) {
  const product = getAllProducts().find((p) => p.id === params.id);
  if (!product) return notFound();

  // Validate brand segment matches product path (e.g., /tv/samsung)
  const expectedBrand = product.path.split("/")[2];
  if (!expectedBrand || expectedBrand !== params.brand) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
          <Image
            src={typeof product.image === "string" ? product.image : product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-6 space-y-4">
          
          <p className="text-muted-foreground leading-7 whitespace-pre-line">
            {product.description}
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-3">Key Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Spec label="Display Size" value={product.quantity} />
            <Spec label="Connectivity" value="Wi‑Fi, 2×HDMI, 1×USB, Smart View" />
            <Spec label="Operating System" value="Tizen™" />
            <Spec label="Processor" value="Quad Core" />
            <Spec label="Color" value="Black" />
            <Spec label="Warranty" value="LED Panel 2y, Spare Parts 1y, Free Service 5y" />
          </div>
        </div>
      </div>

      <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit border rounded-xl p-5 space-y-4">
        <div>
        <h1 className="text-2xl font-semibold">{product.title}</h1>
          <div className="text-sm text-muted-foreground">Price</div>
          <div className="text-2xl font-semibold">৳ {product.price.toLocaleString("bn-BD")}</div>

           {/* Additional Info */}
           <ul className="space-y-2 mt-4">
                <li>
                  👉{" "}
                  <span className="text-primary font-semibold">
                    Fatema Agro
                  </span>{" "}
                  আপনাদেরকে দিচ্ছে সম্পূর্ণ ভেজাল মুক্ত খাঁটি সরিষার তেল।
                </li>
                <li>
                  📲 অর্ডার করতে আমাদের{" "}
                  <span>
                    <Link
                      href="https://www.facebook.com/fatemaagroo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 underline hover:text-blue-800"
                    >
                      পেজে
                    </Link>
                  </span>{" "}
                  মেসেজ করুন অথবা ফোন করুনঃ{" "}
                  <a
                    href="tel:01719355375"
                    className="text-primary font-bold hover:text-primary-dark"
                  >
                    01719355375
                  </a>
                </li>
                <li>🚚 সারা বাংলাদেশে ক্যাশঅন হোম ডেলিভারি দিচ্ছি।</li>
                <li>
                  ☑️ ভালো খান সুস্থ থাকুন{" "}
                  <span className="text-primary font-semibold">
                    Fatema Agro
                  </span>{" "}
                  সার্ভিসের সাথেই থাকুন।
                </li>
                <li className="text-primary font-semibold">
                  ~Enjoy The Real Taste~
                </li>
              </ul>
        </div>
        <button className="w-full h-11 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
          অর্ডার করুন
        </button>
        <div className="text-xs text-muted-foreground">
          ডেলিভারি চার্জ প্রযোজ্য। ক্যাশ অন ডেলিভারি/বিকাশ/নগদ সমর্থিত।
        </div>
      </aside>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
} 