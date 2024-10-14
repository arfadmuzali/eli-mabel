import Image from "next/image";
import PakELiImage from "@/../public/img/pak-eli-image.jpg";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col-reverse gap-5 justify-center items-start lg:flex-row p-10">
        <div className="lg:w-3/6 text-sm space-y-3 text-start">
          <p>
            <h1 className="text-3xl mb-2 font-bold">ELI MEBEL</h1>
            <span>ELI MEBEL</span> adalah perusahaan mebel yang berdiri kokoh
            sejak tahun 2012, didirikan oleh Bapak Elya Wahyudi, seorang
            pengrajin berpengalaman yang memiliki dedikasi tinggi terhadap
            kualitas dan keindahan dalam industri mebel. Dengan fokus pada
            desain inovatif dan kepuasan pelanggan, kami telah menjadi salah
            satu pemimpin dalam industri mebel lokal.
          </p>
          <p>
            Kami menawarkan beragam koleksi mebel mulai dari furnitur ruang
            tamu, ruang makan, kamar tidur, hingga furnitur outdoor. Setiap
            produk kami dihasilkan dengan menggunakan bahan-bahan berkualitas
            tinggi dan diproses dengan teknik pengrajin terbaik, menjadikan
            setiap potongan mebel kami sebagai investasi jangka panjang bagi
            pelanggan kami.
          </p>

          <p>
            Selain itu, kami juga menyediakan layanan konsultasi desain interior
            bagi pelanggan yang ingin menciptakan ruang yang unik dan elegan
            sesuai dengan preferensi dan gaya hidup mereka.
          </p>
          <p>
            Komitmen kami tidak hanya terletak pada kualitas produk, tetapi juga
            pada keberlanjutan lingkungan. Kami menggunakan bahan-bahan ramah
            lingkungan dan berupaya untuk mengurangi dampak negatif terhadap
            lingkungan sebisa mungkin.
          </p>
          <p>
            Dengan Eli Mebel, Anda tidak hanya mendapatkan mebel berkualitas
            tinggi, tetapi juga pengalaman yang memuaskan dan solusi desain yang
            unik untuk setiap kebutuhan furnitur Anda.
          </p>
        </div>
        <Image
          src={PakELiImage.src}
          alt="Pak Eli"
          width={500}
          height={500}
          className="image lg:w-2/6 rounded-md"
          priority
        />
      </div>
    </>
  );
}
