"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { Image, Product } from "@prisma/client";
import { Card } from "./ui/card";
import { CardProduct } from "./ui/cardProduct";
import { Button } from "./ui/button";

export default function FeaturedProducts() {
  async function getProducts() {
    const response = await axios.get("/api/products");
    return response.data;
  }
  const query = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  return (
    <div className="flex flex-col my-14 items-center gap-5">
      <h1 className="text-3xl text-center font-extrabold text-stone-700 w-full">
        Produk Unggulan
      </h1>
      <div className="md:gap-10 gap-5 flex flex-wrap justify-center items-center">
        {query?.data?.map((product: Product & { image: Image[] }) => {
          return (
            <CardProduct
              key={product.id}
              productDescription={product.description}
              productId={product.id}
              productImage={product.image?.[0].url}
              productName={product.name}
            />
          );
        })}
      </div>

      <Link
        href={"/product"}
        className="bg-yellow-600 hover:bg-yellow-600/90 text-white p-2 rounded"
      >
        Lihat Semua Produk
      </Link>
    </div>
  );
}
