"use client";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TabsTrigger, Tabs, TabsContent, TabsList } from "../ui/tabs";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="block lg:hidden">
        <MenuIcon className="text-black" />
      </SheetTrigger>
      <SheetContent className="bg-stone-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
          className="mb-2 flex items-center justify-center"
        >
          <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            className="rounded-r-none border-r-0"
            placeholder="Cari..."
          />
          <Button
            type="submit"
            variant={"outline"}
            className="bg-white rounded-l-none norder-l-0"
          >
            <SearchIcon className="text-black " />
          </Button>
        </form>
        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="menu" className="w-full">
              Menu
            </TabsTrigger>
            <TabsTrigger value="category" className="w-full">
              Kategori
            </TabsTrigger>
          </TabsList>
          <TabsContent
            onClick={() => setIsOpen(false)}
            value="menu"
            className="flex flex-col gap-5 my-3"
          >
            <Link href={"/"} className=" text-center border-b p-2">
              Home
            </Link>
            <Link href={"/product"} className=" text-center border-b p-2">
              Produk
            </Link>
            <Link href={"/about"} className=" text-center border-b p-2">
              Tentang
            </Link>
            <Link href={"/contact"} className=" text-center border-b p-2">
              Kontak
            </Link>
          </TabsContent>
          <TabsContent value="category">
            {" "}
            <Link
              href={"/product?category=1"}
              className={"text-sm hover:text-yellow-700"}
            >
              Ruang Kantor
            </Link>
            <Link
              href={"/product?category=2"}
              className={"hover:text-yellow-700"}
            >
              Ruang Makan
            </Link>
            <Link
              href={"/product?category=3"}
              className={"text-sm hover:text-yellow-700"}
            >
              Kamar Tidur
            </Link>
            <Link
              href={"/product?category=5"}
              className={"text-sm hover:text-yellow-700"}
            >
              Ruang Tamu
            </Link>
            <Link
              href={"/product?category=4"}
              className={"text-sm hover:text-yellow-700"}
            >
              Produk Lainnya
            </Link>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
