"use client";

import ProductSearchSkeleton from "@/components/skeleton/productSearchSkeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Paginator from "@/components/ui/paginator";
import { type Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Param = string | undefined | null;

export default function Product({
  searchParams: { q, page },
}: {
  searchParams: { q: Param; page: Param };
}) {
  const router = useRouter();
  const initialPage = page ? Number(page) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const getProducts = async () => {
    const response = await axios.get(
      `/api/products/search?q=${q ?? ""}&page=${currentPage - 1}`
    );
    return response.data;
  };

  const { data, isLoading, isError }: any = useQuery({
    queryKey: ["getProductsSearch", q, currentPage],
    queryFn: getProducts,
  });

  const handlePageChange = (page: number) => {
    console.log(page);
    if (page >= 1 && page <= (data?.totalPage || 0)) {
      setCurrentPage(page);
      router.push(`?q=${q ?? ""}&page=${page}`);
    }
  };

  if (isError) {
    return <div>Error fetching products</div>;
  }

  return (
    <div className="flex flex-col p-5 gap-5">
      <h1 className="m-auto w-fit p-2 text-lg font-medium border px-10 text-stone-700">
        Produk
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center lg:px-5 gap-1">
        {isLoading ? (
          <ProductSearchSkeleton />
        ) : (
          data?.products.map((product: Product & { image: string }) => (
            <Link
              key={product?.id}
              href={"/product/" + product?.name.replaceAll(" ", "-")}
            >
              <Card className="p-1 w-fit group hover:bg-stone-200 transition-all duration-500 rounded-none">
                <CardHeader className="p-0">
                  <Image
                    src={product?.image}
                    alt="Product Image"
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
          ))
        )}
      </div>

      <Paginator
        showPreviousNext={true}
        currentPage={data?.currentPage ?? 1}
        totalPages={data?.totalPage || 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
