"use client";
import FeaturedProducts from "@/components/feturedProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "@/components/hero";
import ServiceSection from "@/components/service";
import WhyUsSection from "@/components/whyUs";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Hero />
        <ServiceSection />
        <WhyUsSection />
        <FeaturedProducts />
      </div>
    </QueryClientProvider>
  );
}
