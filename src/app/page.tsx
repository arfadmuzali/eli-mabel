import Hero from "@/components/hero";
import ServiceSection from "@/components/service";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <div className="h-screen"></div>
    </div>
  );
}
