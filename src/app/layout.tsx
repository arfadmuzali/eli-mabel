import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Eli Mebel",
  description: "Beli produk mebel di Eli Mebel",
  keywords: ["Mebel", "Kayu", "Furniture", "Eli", "Wirosari", "Mebel Wirosari"],
  openGraph: {
    title: "Eli Mebel",
    description: "Beli produk mebel di Eli Mebel",
    url: "https://eli-mebel.vercel.app/",
    siteName: "Eli Mebel",
    images: "https://eli-mebel.vercel.app/img/pak-eli-screenshot.PNG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eli Mebel",
    description: "Beli produk mebel di Eli Mebel",
    images: ["https://eli-mebel.vercel.app/img/pak-eli-screenshot.PNG"],
  },
  creator: "Arfad Muzali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className + " bg-white bg-opacity-15"}
        style={
          {
            // backgroundImage: "url('/img/topography.svg')",
            // backgroundBlendMode: "soft-light",
            // backgroundRepeat: "repeat",
          }
        }
        suppressHydrationWarning
      >
        <div className="flex flex-col justify-between">
          <div>{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
