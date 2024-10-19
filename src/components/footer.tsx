import Image from "next/image";
import Link from "next/link";
import Whatsapp from "@/../public/icon/whatsapp-logo.png";
import prisma from "@/lib/db";

async function getCategoryProduct() {
  try {
    const response = await prisma.category.findMany();
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function Footer() {
  const response = await getCategoryProduct();
  return (
    <div className="w-full justify-center items-start p-5 text-sm border-t border-stone-300 bg-stone-700 text-white">
      <div className="flex md:flex-row flex-col justify-start lg:justify-between gap-20 items-start mb-5 my-2 lg:mx-10 mx-4 ">
        <div className="m-auto md:m-0">
          <Image
            src={"/icon/icon-white.svg"}
            alt="logo"
            width={150}
            height={150}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-24 gap-10 ">
          <div className="flex gap-4 flex-col">
            <h1 className="md:text-xl text-2xl font-bold">Halaman</h1>
            <Link
              href={"/"}
              className="hover:text-stone-500 text-base md:text-sm "
            >
              Home
            </Link>
            <Link
              href={"/product"}
              className="hover:text-stone-500 text-base md:text-sm "
            >
              Produk
            </Link>
            <Link
              href={"/about"}
              className="hover:text-stone-500 text-base md:text-sm "
            >
              Tentang Kami
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-stone-500 text-base md:text-sm "
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="md:text-xl text-2xl font-bold">Category</h1>
            {response?.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={"/"}
                  className="hover:text-stone-500 text-base md:text-sm"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t w-full text-center pt-4">
        <h1>
          Build with love by{" "}
          <Link href={"https://github.com/arfadmuzali"} className="">
            Arfad Muzali
          </Link>
        </h1>
      </div>
    </div>
  );
}
