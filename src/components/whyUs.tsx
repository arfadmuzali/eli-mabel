"use client";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import carousel1 from "@/../public/img/carousel/carousel1.jpg";
import carousel2 from "@/../public/img/carousel/carousel2.jpg";
import carousel3 from "@/../public/img/carousel/carousel3.jpg";
import carousel4 from "@/../public/img/carousel/carousel4.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const carouselImages: { src: string }[] = [
  {
    src: carousel1.src,
  },
  {
    src: carousel2.src,
  },
  {
    src: carousel3.src,
  },
  {
    src: carousel4.src,
  },
];

export default function WhyUsSection() {
  return (
    <div className="flex flex-col lg:flex-row  justify-evenly items-center gap-7">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="w-full  max-w-md z-0 md:m-auto lg:m-0"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <div className="">
                  <Card className="m-2">
                    <CardContent className="flex aspect-square items-center justify-center p-1 ">
                      <Image
                        src={image.src}
                        alt="carouselImage"
                        width={500}
                        height={500}
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
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
        <h1 className="text-2xl font-bold text-center text-stone-700">
          Kenapa Kami?
        </h1>
        <p className="text-lg text-center">
          Kami adalah pilihan utama karena dedikasi kami pada kualitas tanpa
          kompromi. Setiap produk kami dihasilkan dengan teliti untuk memastikan
          kepuasan pelanggan yang tak terbantahkan
        </p>
      </motion.div>
    </div>
  );
}
