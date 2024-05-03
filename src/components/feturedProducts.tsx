"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@prisma/client";

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
    <div className="flex flex-col items-center py-10 ">
      <h1 className="text-2xl mb-10 font-semibold text-stone-700">
        Produk Unggulan
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-2 ">
        {query?.data?.map(
          (
            product: Product & {
              image: {
                url: string;
              };
            }
          ) => {
            return (
              <Link
                key={product.id}
                href={""}
                className=" bg-stone-700 flex justify-center items-center"
              >
                <span className="z-10 group-hover:scale-105 absolute text-white font-bold text-xl md:w-60 w-40 text-center">
                  {product.name}
                </span>
                <Image
                  src={product.image.url}
                  alt="image"
                  width={400}
                  height={400}
                  className="object-cover hover:scale-105 hover:brightness-75 md:w-72 w-44 h-44 md:h-72 transition-all duration-300 bg-center "
                  quality={60}
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
