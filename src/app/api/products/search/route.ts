import prisma from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") ?? ""; // Default ke string kosong
    const category = parseInt(searchParams.get("category") ?? "0"); // Default ke 0 jika tidak ada kategori
    const page = Math.max(Number(searchParams.get("page")) || 1, 1) - 1; // Pastikan page minimal 1 dan dimulai dari 0

    // Query untuk produk
    const productsQuery: {
      skip: number;
      take: number;
      where?: {
        name?: {
          contains: string;
          mode: "insensitive";
        };
        categoryId?: number | undefined; // Menyertakan kondisi untuk categoryId
      };
    } = {
      skip: page * 12,
      take: 12,
    };

    // Menambahkan kondisi pencarian berdasarkan nama
    if (q) {
      productsQuery.where = {
        ...productsQuery.where,
        name: {
          contains: q,
          mode: "insensitive",
        },
      };
    }

    // Menambahkan kondisi pencarian berdasarkan kategori jika kategori bukan 0
    if (category > 0) {
      productsQuery.where = {
        ...productsQuery.where,
        categoryId: category, // Menyaring produk berdasarkan categoryId
      };
    }

    const products = await prisma.product.findMany({
      ...productsQuery,
      include: {
        // Menggunakan nama relasi yang benar dari model Prisma Anda
        image: true, // Pastikan nama relasi sesuai, dalam hal ini 'Image'
        Category: true, // Menyertakan data kategori jika dibutuhkan
      },
    });

    // Menghitung total produk dengan kondisi yang sama
    const totalProducts = await prisma.product.count({
      where: {
        ...(q ? { name: { contains: q, mode: "insensitive" } } : {}),
        ...(category > 0 ? { categoryId: category } : {}),
      },
    });

    const totalPages = Math.ceil(totalProducts / 12); // Menghitung total halaman

    return Response.json({
      products,
      currentPage: page + 1, // Menambahkan 1 untuk halaman saat ini
      totalPages, // Mengembalikan total pages
      totalProducts, // Mengembalikan total produk
    });
  } catch (error) {
    console.error(error); // Log error untuk debugging
    return new Response("Something went wrong", { status: 500 });
  }
}
