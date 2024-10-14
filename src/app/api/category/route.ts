import prisma from "@/lib/db";

export async function GET() {
  try {
    const response = await prisma.category.findMany();
    return Response.json(response);
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
}
