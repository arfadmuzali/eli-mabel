"use client";
import { useRef } from "react";
import iconWhite from "@/../public/icon/icon-white.svg";
import iconBlack from "@/../public/icon/icon-black.svg";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Menu from "./menu";
export default function NavbarLobby() {
  const nav = useRef<HTMLDivElement>(null);
  const isInView: boolean = useInView(nav);

  return (
    <>
      <div
        ref={nav}
        className={`flex absolute top-0 bg-inherit md:px-10 px-4 py-4 text-white justify-between w-full items-center `}
      >
        <Link href={"/"} className="font-black text-2xl">
          <Image
            src={iconWhite.src}
            alt="Icon"
            width={0}
            height={0}
            className="w-20"
          />
        </Link>
        <div className="hidden lg:block space-x-5 transition-all">
          <Link href={"/"} className="hover:text-stone-500 text-lg font-medium">
            Home
          </Link>
          <Link
            href={"/product"}
            className="hover:text-stone-500 text-lg font-medium"
          >
            Produk
          </Link>
          <Link
            href={"/about"}
            className="hover:text-stone-500 text-lg font-medium"
          >
            Tentang
          </Link>
          <Link
            href={"/contact"}
            className="hover:text-stone-500 text-lg font-medium"
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <Button
            variant={"outline"}
            className="bg-white rounded-r-none norder-r-0"
          >
            <Search className="text-black " />
          </Button>

          <Input
            type="text"
            className="rounded-l-none border-l-0"
            placeholder="Search ..."
          />
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
            className={`flex sticky top-0 bg-stone-100 md:px-10 px-4 py-4 text-black justify-between w-full items-center border-b-2 z-50`}
          >
            <Link href={"/"} className="font-black text-2xl">
              <Image
                src={iconBlack.src}
                alt="Icon"
                width={0}
                height={0}
                className="w-20"
              />
            </Link>
            <div className="hidden lg:block space-x-5 transition-all">
              <Link
                href={"/"}
                className="hover:text-stone-500 text-lg font-medium"
              >
                Home
              </Link>
              <Link
                href={"/product"}
                className="hover:text-stone-500 text-lg font-medium"
              >
                Produk
              </Link>
              <Link
                href={"/about"}
                className="hover:text-stone-500 text-lg font-medium"
              >
                Tentang
              </Link>
              <Link
                href={"/contact"}
                className="hover:text-stone-500 text-lg font-medium"
              >
                Contact
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <Button
                variant={"outline"}
                className="bg-white rounded-r-none norder-r-0"
              >
                <Search className="text-black " />
              </Button>

              <Input
                type="text"
                className="rounded-l-none border-l-0"
                placeholder="Search ..."
              />
            </div>
            <Menu />
          </motion.div>
        </AnimatePresence>
      ) : null}
    </>
  );
}
