import { Skeleton } from "../ui/skeleton";

export default function ProductSearchSkeleton() {
  const temp: string[] = new Array(12).fill("");
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-16 w-max justify-center items-center m-auto">
      {temp.map((e, index) => {
        return (
          <div key={index}>
            <Skeleton className="lg:w-72 lg:h-72 w-36 h-36 mb-2" />
            <Skeleton className="w-36 h-5" />
          </div>
        );
      })}
    </div>
  );
}
