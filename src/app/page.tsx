import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import OfferBreakdown from "@/components/sections/OfferBreakdown";
import WhyMotherhood from "@/components/sections/WhyMotherhood";
import Doctors from "@/components/sections/Doctors";
import PackageInclusions from "@/components/sections/PackageInclusions";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <OfferBreakdown />
      <WhyMotherhood />
      <Doctors />
      <PackageInclusions />
      <Testimonials />
      <Location />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
