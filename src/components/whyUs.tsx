"use client";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function WhyUsSection() {
  return (
    <div className="flex flex-col lg:flex-row  justify-evenly gap-7">
      <Carousel className="w-full  max-w-md z-0">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        className="flex flex-col  lg:py-20 lg:w-2/6 gap-10"
      >
        <h1 className="text-2xl font-bold text-center">Kenapa Kami?</h1>
        <p className="text-lg text-center">
          Kami adalah pilihan utama karena dedikasi kami pada kualitas tanpa
          kompromi. Setiap produk kami dihasilkan dengan teliti untuk memastikan
          kepuasan pelanggan yang tak terbantahkan
        </p>
      </motion.div>
    </div>
  );
}
