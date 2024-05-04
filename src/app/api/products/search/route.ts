import prisma from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    const page = searchParams.get("page");

    if (q) {
      const products = await prisma.product.findMany({
        where: {
          name: {
            contains: q,
            mode: "insensitive",
          },
        },
        skip: Number(page) * 12 ?? 0,
        take: 12,
      });
      return Response.json(products);
    }

    const products = await prisma.product.findMany({
      skip: Number(page) * 12 ?? 0,
      take: 12,
    });

    return Response.json(products);
  } catch (error) {
    return new Response("something error", { status: 400 });
  }
}
