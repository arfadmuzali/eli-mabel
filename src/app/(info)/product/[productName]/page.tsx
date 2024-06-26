"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import formatToRupiah from "@/lib/formatToRupiah";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductSkeleton from "@/components/skeleton/productSkeleton";
import Link from "next/link";
export default function Product({
  params: { productName },
}: {
  params: { productName: string };
}) {
  async function getProductByName() {
    try {
      const response = await axios.get("/api/products/" + productName);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  const { data, isLoading }: any = useQuery({
    queryKey: ["getProduct"],
    queryFn: getProductByName,
  });

  return (
    <div className="flex flex-col lg:flex-row p-5 gap-5 lg:px-14">
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <>
          <Image
            src={data?.image?.url}
            alt={data?.name || "sdanwd"}
            quality={100}
            width={400}
            height={400}
            priority
            className="lg:w-3/6 m-auto"
          />
          <div className="flex flex-col lg:w-3/6 gap-4">
            <h1 className="text-3xl font-semibold">{data?.name}</h1>
            <p>Harga: {formatToRupiah(data?.price)}</p>
            <Accordion
              type="single"
              defaultValue="description"
              collapsible
              className="w-full"
            >
              <AccordionItem value="description">
                <AccordionTrigger>Deskripsi Barang</AccordionTrigger>
                <AccordionContent>{data?.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href={{
                pathname: "https://api.whatsapp.com/send",
                query: {
                  phone: "6281390621386",
                  text: `Hallo saya ingin pesan ${data?.name}. Tolong dibantu, Terima kasih`,
                },
              }}
              className="text-lg py-2 bg-green-600 text-primary-foreground hover:bg-green-500 rounded text-center"
            >
              Pesan Sekarang
            </Link>
            <p className="text-sm text-stone-500">
              Category: {data?.Category?.name}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
