"use client";
import heroImage from "@/../public/img/hero-image.webp";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
      className="h-screen bg-cover bg-no-repeat select-text lg:bg-top bg-bottom-4 md:grid flex grid-cols-2 justify-center items-center md:p-20 p-10"
    >
      <motion.p
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        className="md:text-3xl text-white text-xl font-semibold"
      >
        Salamat datang di{" "}
        <span className="text-stone-500 md:text-stone-700 font-black">
          ELI MABEL
        </span>
        . Menyediakan produk-produk mabel. Mulai dari kursi, meja, hingga tollet
        berkualitas
      </motion.p>
    </div>
  );
}
