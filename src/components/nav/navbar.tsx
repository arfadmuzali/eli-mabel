import Image from "next/image";
import iconBlack from "@/../public/icon/icon-black.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Menu from "./menu";

export default function Navbar() {
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
  );
}
