import prisma from "@/lib/db";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Ganti dengan URL halaman yang ingin dimasukkan ke dalam sitemap
  const product = await prisma.product.findMany();

  function convertNameToSlug(name: string): string {
    return name.trim().replace(/\s+/g, "-");
  }

  const productRoutes = product.map((val) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/product/${convertNameToSlug(
      val.name
    )}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
      lastModified: new Date(),
    },
    ...productRoutes,
  ];
}
