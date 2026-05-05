import MangoAbout from "@/components/mango/sections/about";
import MangoCta from "@/components/mango/sections/cta";
import MangoFaq from "@/components/mango/sections/faq";
import MangoFeatures from "@/components/mango/sections/features";
import MangoHero from "@/components/mango/sections/hero";
import MangoTestimonials from "@/components/mango/sections/testimonials";
import MangoVarieties from "@/components/mango/sections/varieties";

export default function MangoPage() {
  return (
    <div className="bg-white">
      <MangoHero />
      <MangoFeatures />
      <MangoVarieties />
      <MangoAbout />
      <MangoTestimonials />
      <MangoFaq />
      <MangoCta />
    </div>
  );
}
