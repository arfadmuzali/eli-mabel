import { Skeleton } from "../ui/skeleton";
export default function ProductSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row lg:mx-10 my-5 w-full">
      <Skeleton className="lg:w-3/6 lg:h-screen h-96" />
      <div className="flex flex-col lg:w-3/6 gap-2 lg:mx-4">
        <Skeleton className={"h-7 lg:w-80 my-4"} />
        <Skeleton className={"h-3 lg:w-96"} />
        <Skeleton className={"h-3 lg:w-96"} />
        <Skeleton className={"h-3 lg:w-80"} />
        <Skeleton className={"h-10 w-full my-10"} />
      </div>
    </div>
  );
}
