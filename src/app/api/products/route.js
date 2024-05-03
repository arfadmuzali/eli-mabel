import prisma from "@/lib/db";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      take: 8,
    });
    return Response.json(products);
  } catch (error) {
    return new Response(error, { status: 400 });
  }
}
