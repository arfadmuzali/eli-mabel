import Link from "next/link";
import Whatsapp from "@/../public/icon/whatsapp-logo.png";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <h1 className="m-auto w-fit my-5 p-2 text-lg font-medium border px-10 text-stone-700">
        Kontak
      </h1>

      <div className="flex lg:flex-row flex-col justify-evenly  mb-10">
        <div className="flex flex-col  border border-stone-300 p-5 lg:w-2/6 h-fit">
          <h1 className="text-2xl font-semibold mb-4 text-center border-b p-2 border-black">
            Pak Eli Mabel
          </h1>
          <div>
            <h1 className=" font-medium ">ALAMAT</h1>
            <p className="text-sm p-2 font-medium mb-5">
              RT04/RW03 Dusun Kuniran, Desa Dokoro, Kecamatan Wirosari,
              Kabupaten Grobogan, Provinsi Jawa Tengah
            </p>
          </div>

          <div>
            <h1 className=" font-medium">CONTACT</h1>
            <p className="text-sm p-2 font-medium mb-4">
              HP/WA: +62 813-9062-1386 (Arfad Muzali)
            </p>
          </div>
          <h1 className="font-medium">ORDER</h1>
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
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d26441.146439236574!2d111.06699199393792!3d-6.982969819031769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1714532841281!5m2!1sid!2sid"
          height={450}
          className=" border-8 lg:w-3/6 m-0 p-0"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
