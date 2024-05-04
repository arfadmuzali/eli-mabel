"use client";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="block lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="bg-stone-100">
        <div className="flex flex-col my-3 gap-5 text-xl font-semibold text-center">
          <Link
            className="hover:bg-stone-200 active:bg-stone-200 p-2 rounded"
            onClick={() => setIsOpen(false)}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:bg-stone-200 active:bg-stone-200 p-2 rounded"
            onClick={() => setIsOpen(false)}
            href={"/product"}
          >
            Produk
          </Link>
          <Link
            className="hover:bg-stone-200 active:bg-stone-200 p-2 rounded"
            onClick={() => setIsOpen(false)}
            href={"/about"}
          >
            Tentang
          </Link>
          <Link
            className="hover:bg-stone-200 active:bg-stone-200 p-2 rounded"
            onClick={() => setIsOpen(false)}
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
