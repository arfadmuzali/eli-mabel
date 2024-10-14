import { Skeleton } from "../ui/skeleton";

export default function ProductSearchSkeleton() {
  const temp: string[] = new Array(12).fill("");
  return (
    <div
      className="flex flex-wrap
     gap-5 justify-center items-center"
    >
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
