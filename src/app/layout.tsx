import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/nav/navbarLobby";
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
    images: "https://eli-mebel.vercel.app/img/pak-eli-screenshot.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eli Mebel",
    description: "Beli produk mebel di Eli Mebel",
    images: ["https://eli-mebel.vercel.app/img/pak-eli-screenshot.png"],
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
        className={inter.className + " bg-stone-50"}
        suppressHydrationWarning
      >
        <div>
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
