import Image from "next/image";
import Link from "next/link";
import Whatsapp from "@/../public/icon/whatsapp-logo.png";

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center p-5 text-sm border-t border-stone-300 bg-stone-700 text-white">
      <div className="flex flex-col justify-center items-center">
        <Link
          href={{
            pathname: "https://api.whatsapp.com/send",
            query: {
              phone: "6281390621386",
              text: `Hallo saya ingin pesan mebel. Tolong dibantu, Terima kasih`,
            },
          }}
          className="w-full m-2 p-1 bg-green-600 flex flex-row justify-center items-center rounded"
        >
          <Image
            src={Whatsapp.src}
            alt="whatsapp icon"
            width={50}
            height={50}
            loading="lazy"
          />
          <h1 className="text-white font-bold">
            ORDER LANGSUNG LEWAT WHATSAPP
          </h1>
        </Link>
        <div className="flex gap-4 my-2">
          {/* <Link href={"/"} className="hover:text-stone-500 text-lg ">
            Home
          </Link> */}
          <Link href={"/product"} className="hover:text-stone-500 text-lg ">
            Produk
          </Link>
          <Link href={"/about"} className="hover:text-stone-500 text-lg ">
            Tentang Kami
          </Link>
          <Link href={"/contact"} className="hover:text-stone-500 text-lg ">
            Contact
          </Link>
        </div>
      </div>
      <h1>
        Made with love by{" "}
        <Link
          href={"https://github.com/arfadmuzali"}
          className="underline font-medium"
        >
          Arfad Muzali
        </Link>
      </h1>
    </div>
  );
}
