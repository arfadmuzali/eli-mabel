import prisma from "@/lib/db";

export async function GET(
  request: Request,
  { params: { productName } }: { params: { productName: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        name: productName.replaceAll("-", " "),
      },
      include: {
        Category: true,
        image: true,
      },
    });

    return Response.json(product);
  } catch (error) {
    return new Response("product not found", { status: 404 });
  }
}
