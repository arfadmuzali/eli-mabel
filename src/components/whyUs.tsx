"use client";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";

export default function WhyUsSection() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center my-10 mx-2 md:mx-28 gap-10">
      <div className="flex flex-col md:flex-row md:items-center justify-start">
        <Image
          src={"/img/carousel/carousel2.jpg"}
          alt="image"
          width={400}
          height={400}
          className="w-52 md:w-96 rounded-lg shadow-xl"
        />
        <div
          data-aos={"fade-right"}
          className="p-5 w-[20rem] md:w-[40rem] md:space-y-3 space-y-2 shadow-xl bg-white relative bottom-10 md:bottom-0 md:right-16 rounded-lg"
        >
          <h1 className="text-xl md:text-2xl font-bold">Kenapa Kami?</h1>
          <p className="text-sm  md:text-lg">
            ELI MEBEL menghadirkan mebel berkualitas tinggi dengan desain unik
            yang disesuaikan untuk memenuhi kebutuhan Anda.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-center items-end">
        <div
          data-aos={"fade-left"}
          className="p-5 w-[20rem] md:w-[40rem] md:space-y-3 space-y-2 shadow-xl bg-white relative bottom-10 md:bottom-0  md:left-16 rounded-lg"
        >
          <h1 className="text-xl md:text-2xl font-bold">Kelebihan Kami?</h1>
          <p className="text-sm md:text-lg">
            ELI MEBEL selalu mengikuti tren desain terkini, memastikan setiap
            produk kami modern, stylish, dan sesuai dengan perkembangan gaya
            interior terbaru.
          </p>
        </div>
        <Image
          src={"/img/carousel/carousel4-crop.jpg"}
          alt="image"
          width={400}
          height={400}
          className="w-52 md:w-96 rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}
