import prisma from "@/lib/db";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      take: 3,
      orderBy: {
        id: "desc",
      },
      include: {
        image: true,
      },
    });
    return Response.json(products);
  } catch (error) {
    return new Response("something error", { status: 400 });
  }
}
