import { Skeleton } from "../ui/skeleton";
export default function ProductSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row mx-10 my-5 w-full">
      <Skeleton className="lg:w-3/6 h-screen" />
      <div className="flex flex-col lg:w-3/6 gap-2 mx-4">
        <Skeleton className={"h-7 w-80 my-4"} />
        <Skeleton className={"h-3 w-96"} />
        <Skeleton className={"h-3 w-96"} />
        <Skeleton className={"h-3 w-80"} />
        <Skeleton className={"h-10 w-full my-10"} />
      </div>
    </div>
  );
}
