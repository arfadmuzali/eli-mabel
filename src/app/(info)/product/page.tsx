"use client";

import ProductSearchSkeleton from "@/components/skeleton/productSearchSkeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

type param = string | undefined | null;

export default function Product({
  searchParams: { q, page },
}: {
  searchParams: { q: param; page: param };
}) {
  async function getProducts() {
    try {
      const response = await axios.get(
        `/api/products/search?q=${q ?? ""}&page=${page ?? 0}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const { data, isLoading }: any = useQuery({
    queryKey: ["getProductsSearch"],
    queryFn: getProducts,
  });

  return (
    <div className="flex flex-col p-5 gap-5">
      <h1 className="m-auto w-fit p-2 text-lg font-medium border px-10 text-stone-700">
        Semua Produk Yang Berkaitan
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center lg:px-5 gap-1">
        {isLoading ? (
          <ProductSearchSkeleton />
        ) : (
          data?.map(
            (
              product: Product & {
                image: {
                  url: string;
                };
              }
            ) => {
              return (
                <Link
                  key={product?.id}
                  href={"/product/" + product?.name.replaceAll(" ", "-")}
                >
                  <Card className="p-1 w-fit group hover:bg-stone-200 transition-all duration-500 rounded-none">
                    <CardHeader className="p-0">
                      <Image
                        src={product?.image?.url}
                        alt="sdwad"
                        width={400}
                        height={400}
                        quality={50}
                        priority
                        className="md:w-72 w-44 h-44 md:h-72 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-0">
                      <h1 className="lg:text-lg text-base font-medium p-1">
                        {product?.name}
                      </h1>
                    </CardContent>
                  </Card>
                </Link>
              );
            }
          )
        )}
      </div>
    </div>
  );
}
