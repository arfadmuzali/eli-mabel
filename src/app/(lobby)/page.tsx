import Hero from "@/components/hero";
import ServiceSection from "@/components/service";
import WhyUsSection from "@/components/whyUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <WhyUsSection />
      <div className="h-screen"></div>
    </div>
  );
}
