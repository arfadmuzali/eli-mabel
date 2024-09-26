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

// Fungsi untuk mengambil data produk dari API menggunakan axios
async function getProductByName(productName: string) {
  try {
    const response = await axios.get(`/api/products/${productName}`);
    return response.data;
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
      <p className="m-44 text-4xl font-bold text-center ">Product not found</p>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row p-5 gap-5 lg:px-14">
      {!product ? (
        <ProductSkeleton />
      ) : (
        <>
          <Image
            src={product.image}
            alt={product.name || "Product Image"}
            quality={100}
            width={400}
            height={400}
            priority
            className="lg:w-3/6 m-auto"
          />
          <div className="flex flex-col lg:w-3/6 gap-4">
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p>Harga: {formatToRupiah(product.price)}</p>
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
