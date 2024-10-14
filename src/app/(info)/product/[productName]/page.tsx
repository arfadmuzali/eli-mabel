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
import prisma from "@/lib/db";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

// Fungsi untuk mengambil data produk dari API menggunakan axios
async function getProductByName(productName: string) {
  try {
    const response = await prisma.product.findUnique({
      where: {
        name: productName.replaceAll("-", " "),
      },
      include: {
        Category: true,
        image: true,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

interface ProductProps {
  params: {
    productName: string;
  };
}

export default async function Product({
  params: { productName },
}: ProductProps) {
  const product = await getProductByName(productName);

  if (!product) {
    return (
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="text-4xl font-bold text-center ">
            Produk Tidak Ditemukan
          </p>
          <Link
            href={"/product"}
            className="m-auto w-fit rounded-md p-2 px-20 text-base bg-yellow-700 text-white border hover:bg-yellow-700/90"
          >
            Kembali
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row p-5 gap-5 lg:px-14">
      {!product ? (
        <ProductSkeleton />
      ) : (
        <>
          <Tabs
            defaultValue={product.image?.[0]?.id}
            className="flex gap-3 lg:flex-row flex-col-reverse
             "
          >
            <TabsList className="flex flex-col h-full justify-start items-start">
              {product.image.map((val) => {
                return (
                  <TabsTrigger
                    key={val.id}
                    value={val.id}
                    className="bg-center w-16 h-16 lg:w-24 lg:h-24 data-[state=active]:border border-spacing-1 border-black data-[state=active]:opacity-80"
                    style={{
                      backgroundImage: `url('${val.url}')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></TabsTrigger>
                );
              })}
            </TabsList>
            {/* <TabsContent value={product.image?.[0]?.id}>hehe</TabsContent> */}
            {product.image.map((image) => {
              return (
                <TabsContent key={image.id} value={image.id}>
                  <Image
                    src={product.image?.[0]?.url}
                    alt={product.name || "Product Image"}
                    quality={100}
                    width={400}
                    height={400}
                    priority
                    className="m-auto lg:w-[42rem] lg:max-w-[42rem] max-h-[32rem] rounded-md "
                  />
                </TabsContent>
              );
            })}
          </Tabs>

          <div className="flex flex-col lg:w-3/6 gap-4">
            <h1 className="text-3xl font-extrabold">{product.name}</h1>
            <h2 className="text-xl font-semibold text-green-700">
              {formatToRupiah(product.price ?? 0)}
            </h2>
            <Accordion
              type="single"
              defaultValue="description"
              collapsible
              className="w-full"
            >
              <AccordionItem value="description">
                <AccordionTrigger>Deskripsi Barang</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href={{
                pathname: "https://api.whatsapp.com/send",
                query: {
                  phone: "6281390621386",
                  text: `Hallo saya ingin pesan ${product.name}. Tolong dibantu, Terima kasih`,
                },
              }}
              className="text-lg py-2 bg-green-600 text-primary-foreground hover:bg-green-500 rounded text-center"
            >
              Pesan Sekarang
            </Link>
            <p className="text-sm text-stone-500">
              Category: {product?.Category?.name}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
