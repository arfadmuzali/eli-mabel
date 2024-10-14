"use client";
import { useRef } from "react";
import iconWhite from "@/../public/icon/icon-white.svg";
import iconBlack from "@/../public/icon/icon-black.svg";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";

export default function NavbarLobby() {
  const nav = useRef<HTMLDivElement>(null);
  const isInView: boolean = useInView(nav);

  return (
    <>
      <div
        ref={nav}
        className={`flex absolute top-0 bg-inherit md:px-20 px-6 py-4 text-white justify-between w-full items-center `}
      >
        <Link href={"/"} className="font-black text-2xl">
          <Image
            src={iconWhite.src}
            alt="Icon"
            width={100}
            height={100}
            className="w-30"
          />
        </Link>
        <div className="hidden lg:block space-x-10 transition-all">
          <Link
            href={"/"}
            className="hover:text-yellow-600 text-xl font-semibold"
          >
            Home
          </Link>
          <Link
            href={"/product"}
            className="hover:text-yellow-600 text-xl font-semibold"
          >
            Produk
          </Link>
          <Link
            href={"/about"}
            className="hover:text-yellow-600 text-xl font-semibold"
          >
            Tentang
          </Link>
          <Link
            href={"/contact"}
            className="hover:text-yellow-600 text-xl font-semibold"
          >
            Kontak
          </Link>
        </div>
        <Menu />
      </div>

      {!isInView ? (
        <AnimatePresence>
          <motion.div
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              type: "tweenn",
            }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            className={`flex sticky top-0 bg-[#ffff] md:px-20 px-6 py-2 text-white justify-between w-full items-center z-50`}
          >
            <Link href={"/"} className="font-black text-2xl">
              <Image
                src={iconBlack.src}
                alt="Icon"
                width={100}
                height={100}
                className="md:w-30 w-24"
              />
            </Link>
            <div className="text-black hidden lg:block space-x-10 transition-all">
              <Link
                href={"/"}
                className="hover:text-yellow-600 text-xl font-semibold"
              >
                Home
              </Link>
              <Link
                href={"/product"}
                className="hover:text-yellow-600 text-xl font-semibold"
              >
                Produk
              </Link>
              <Link
                href={"/about"}
                className="hover:text-yellow-600 text-xl font-semibold"
              >
                Tentang
              </Link>
              <Link
                href={"/contact"}
                className="hover:text-yellow-600 text-xl font-semibold"
              >
                Kontak
              </Link>
            </div>
            <Menu />
          </motion.div>
        </AnimatePresence>
      ) : null}
    </>
  );
}
