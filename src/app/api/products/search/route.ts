import prisma from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    const page = Number(searchParams.get("page")) || 0; // default ke 0 jika tidak ada

    const productsQuery: {
      skip: number;
      take: number;
      where?: {
        name: {
          contains: string;
          mode: "insensitive";
        };
      };
    } = {
      skip: page * 12,
      take: 12,
    };

    if (q) {
      // Jika ada query pencarian
      productsQuery.where = {
        name: {
          contains: q,
          mode: "insensitive",
        },
      };
    }

    const products = await prisma.product.findMany(productsQuery);
    const totalProducts = await prisma.product.count({
      where: q
        ? {
            name: {
              contains: q,
              mode: "insensitive",
            },
          }
        : {},
    });

    const totalPages = Math.ceil(totalProducts / 12); // Menghitung total halaman

    return Response.json({
      products,
      currentPage: page + 1, // Menambahkan 1 untuk halaman saat ini (karena page dimulai dari 0)
      totalPage: totalPages,
      lastPage: totalPages, // Halaman terakhir sama dengan totalPages
    });
  } catch (error) {
    console.error(error); // Log error untuk debugging
    return new Response("Something went wrong", { status: 400 });
  }
}
