"use client";

import heroImage from "@/../public/img/hero-image.webp";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
      className="h-screen bg-cover bg-no-repeat select-text lg:bg-top bg-bottom-4 md:grid flex grid-cols-2 justify-center items-center md:p-20 p-10"
    >
      <div className="space-y-5">
        <motion.h1
          className="text-[#C4B59B] md:text-3xl text-2xl font-extrabold"
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
            duration: 0.5,
          }}
        >
          Temukan Mebel Impianmu di{" "}
          <span className="text-yellow-600">ELI MEBEL</span>
        </motion.h1>
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
            duration: 0.5,
          }}
          className="md:text-xl text-[#C4B59B] text-medium font-semibold"
        >
          Menyediakan produk-produk mebel. Mulai dari kursi, meja, hingga tollet
          berkualitas
        </motion.p>
        <motion.div
          className="w-full"
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
            duration: 1.2,
          }}
        >
          <Link
            href={"/product"}
            className="bg-yellow-600 p-3 md:m-0 m-auto w-fit hover:bg-yellow-600/90 text-primary-foreground rounded"
          >
            Lihat Semua Produk
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
