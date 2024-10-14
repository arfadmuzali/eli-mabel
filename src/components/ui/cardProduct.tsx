import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function CardProduct({
  productDescription,
  productId,
  productImage,
  productName,
  size = "lg",
}: {
  productName: string;
  productId: number;
  productImage: string;
  productDescription: string;
  size?: "lg" | "md";
}) {
  return (
    <Link
      href={"/product/" + productName.replaceAll(" ", "-")}
      className={cn(
        "rounded shadow-md bg-center pb-3",
        size === "md" ? "md:w-[16rem] w-36 md:h-[22rem]" : "w-80"
      )}
    >
      <div
        style={{
          backgroundImage: `url('${productImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={cn(
          "w-full  rounded-t",
          size === "md" ? "md:h-52 h-28" : "h-64"
        )}
      />
      <h1
        className={cn(
          " font-semibold truncate",
          size === "md" ? "px-2 text-base" : "px-2 pt-2 text-xl"
        )}
      >
        {productName}
      </h1>
      <div
        className={cn("m-2", size === "md" ? "line-clamp-2" : "line-clamp-3")}
      >
        <p
          className={cn(
            "",
            size === "md"
              ? "leading-normal text-xs"
              : "leading-loose text-sm me-2"
          )}
        >
          {productDescription}
        </p>
      </div>
      <div className="m-2">
        <Button className="w-full bg-yellow-500 hover:bg-yellow-500/90">
          Detail Produk
        </Button>
      </div>
    </Link>
  );
}
