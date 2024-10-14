"use client";
import ProductSearchSkeleton from "@/components/skeleton/productSearchSkeleton";
import Paginator from "@/components/ui/paginator";
import { Image as ImageType, type Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FilterIcon, SearchIcon } from "lucide-react";
import { CardProduct } from "@/components/ui/cardProduct";
import { cn } from "@/lib/utils";

type Param = string | undefined | null;

export default function Product({
  searchParams: { q, page, category: initialCategory },
}: {
  searchParams: { q: Param; page: Param; category: Param };
}) {
  const router = useRouter();
  const initialPage = page ? Number(page) : 1;
  const category = parseInt(initialCategory ?? "0");
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(initialPage);

  const getProducts = async () => {
    const response = await axios.get(
      `/api/products/search?q=${
        q ?? ""
      }&category=${category}&page=${currentPage}`
    );
    return response.data;
  };

  const { data, isLoading, isError }: any = useQuery({
    queryKey: ["getProductsSearch", q, currentPage, category],
    queryFn: getProducts,
  });

  const handlePageChange = (page: number) => {
    console.log("page", page);
    if (page >= 1 && page <= (data?.totalPages || 0)) {
      setCurrentPage(page);
      router.push(`?q=${q ?? ""}&category=${category}&page=${page}`);
    }
  };

  if (isError) {
    return <div>Error fetching products</div>;
  }

  return (
    <div className="flex lg:flex-row flex-col p-5 relative gap-5">
      <div className="lg:w-1/4 lg:sticky lg:top-24 h-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/product?q=${search}&category=${category ?? 0}`);
          }}
          className="mb-2 flex items-center justify-center sticky"
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

        <h1 className=" justify-center items-center text-md font-semibold mb-2 hidden lg:flex">
          <FilterIcon className="text-black" height={16} /> <span>FILTER</span>
        </h1>

        {/* category */}
        <div className="mx-5 border-b pb-5 gap-2 hidden lg:flex flex-col">
          <h1 className="text-lg font-medium">Kategori</h1>
          <Link
            href={category == 1 ? "/product?category=0" : "/product?category=1"}
            className={cn(
              "text-sm hover:text-yellow-700",
              category === 1 ? "text-yellow-700" : ""
            )}
          >
            Ruang Kantor
          </Link>
          <Link
            href={category == 2 ? "/product?category=0" : "/product?category=2"}
            className={cn(
              "text-sm hover:text-yellow-700",
              category === 2 ? "text-yellow-700" : ""
            )}
          >
            Ruang Makan
          </Link>

          <Link
            href={category == 3 ? "/product?category=0" : "/product?category=3"}
            className={cn(
              "text-sm hover:text-yellow-700",
              category === 3 ? "text-yellow-700" : ""
            )}
          >
            Kamar Tidur
          </Link>
          <Link
            href={category == 5 ? "/product?category=0" : "/product?category=5"}
            className={cn(
              "text-sm hover:text-yellow-700",
              category === 5 ? "text-yellow-700" : ""
            )}
          >
            Ruang Tamu
          </Link>
          <Link
            href={category == 4 ? "/product?category=0" : "/product?category=4"}
            className={cn(
              "text-sm hover:text-yellow-700",
              category === 4 ? "text-yellow-700" : ""
            )}
          >
            Produk Lainnya
          </Link>
        </div>

        <div className="lg:hidden flex overflow-x-scroll gap-2 py-2  whitespace-nowrap scrollbar-custom">
          <Link
            href={category == 1 ? "/product?category=0" : "/product?category=1"}
            className={cn(
              "text-sm p-2 border rounded-md hover:text-yellow-700",
              category === 1 ? "bg-yellow-700 text-white" : ""
            )}
          >
            Ruang Kantor
          </Link>
          <Link
            href={category == 2 ? "/product?category=0" : "/product?category=2"}
            className={cn(
              "text-sm p-2 border rounded-md hover:text-yellow-700",
              category === 2 ? "bg-yellow-700 text-white" : ""
            )}
          >
            Ruang Makan
          </Link>

          <Link
            href={category == 3 ? "/product?category=0" : "/product?category=3"}
            className={cn(
              "text-sm p-2 border rounded-md hover:text-yellow-700",
              category === 3 ? "bg-yellow-700 text-white" : ""
            )}
          >
            Kamar Tidur
          </Link>
          <Link
            href={category == 5 ? "/product?category=0" : "/product?category=5"}
            className={cn(
              "text-sm p-2 border rounded-md hover:text-yellow-700",
              category === 5 ? "bg-yellow-700 text-white" : ""
            )}
          >
            Ruang Tamu
          </Link>
          <Link
            href={category == 4 ? "/product?category=0" : "/product?category=4"}
            className={cn(
              "text-sm p-2 border rounded-md hover:text-yellow-700",
              category === 4 ? "bg-yellow-700 text-white" : ""
            )}
          >
            Produk Lainnya
          </Link>
        </div>
      </div>
      <div className="lg:w-3/4">
        <div className="flex flex-wrap gap-5 justify-center items-center mb-5">
          {isLoading ? (
            <ProductSearchSkeleton />
          ) : (
            data?.products.map((product: Product & { image: ImageType[] }) => {
              return (
                <CardProduct
                  key={product.id}
                  productDescription={product.description}
                  productId={product.id}
                  productImage={product.image?.[0]?.url}
                  productName={product.name}
                  size="md"
                />
              );
            })
          )}
        </div>

        <Paginator
          showPreviousNext={true}
          currentPage={data?.currentPage ?? 1}
          totalPages={data?.totalPages || 1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
