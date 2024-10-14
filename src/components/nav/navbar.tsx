"use client";
import Image from "next/image";
import iconBlack from "@/../public/icon/icon-black.svg";
import Link from "next/link";
import Menu from "./menu";

export default function Navbar() {
  return (
    <div
      className={`flex sticky top-0 bg-white md:px-20 px-6 py-3 text-black justify-between w-full items-center border-b-2 z-50`}
    >
      <Link href={"/"} className="font-black text-2xl">
        <Image
          src={iconBlack.src}
          alt="Icon"
          width={100}
          height={100}
          className="lg:w-24 w-20"
        />
      </Link>
      <div className="hidden lg:block space-x-5 transition-all">
        <Link href={"/"} className="hover:text-yellow-700 text-lg font-medium">
          Home
        </Link>
        <Link
          href={"/product"}
          className="hover:text-yellow-700 text-lg font-medium"
        >
          Produk
        </Link>
        <Link
          href={"/about"}
          className="hover:text-yellow-700 text-lg font-medium"
        >
          Tentang
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-yellow-700 text-lg font-medium"
        >
          Kontak
        </Link>
      </div>
      <Menu />
    </div>
  );
}
