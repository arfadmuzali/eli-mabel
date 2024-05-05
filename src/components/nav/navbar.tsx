"use client";
import Image from "next/image";
import iconBlack from "@/../public/icon/icon-black.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Menu from "./menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  function getSearch(e: any) {
    e.preventDefault();
    router.push("/product?q=" + search);
  }

  return (
    <div
      className={`flex sticky top-0 bg-stone-50 md:px-10 px-4 py-4 text-black justify-between w-full items-center border-b-2 z-50`}
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
      <form
        onSubmit={getSearch}
        className="lg:hidden flex items-center justify-center w-max px-5"
      >
        <Button
          type="submit"
          variant={"outline"}
          className="bg-white rounded-r-none norder-r-0"
        >
          <Search className="text-black " />
        </Button>

        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="rounded-l-none border-l-0"
          placeholder="Cari..."
        />
      </form>
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
      <form
        onSubmit={getSearch}
        className="hidden lg:flex items-center justify-center w-2/6"
      >
        <Button
          type="submit"
          variant={"outline"}
          className="bg-white rounded-r-none norder-r-0"
        >
          <Search className="text-black " />
        </Button>

        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="rounded-l-none border-l-0"
          placeholder="Cari..."
        />
      </form>
      <Menu />
    </div>
  );
}
