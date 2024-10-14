import Image from "next/image";

export default function Collection() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center md:p-10 p-5 gap-2">
      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-2">
          <Image
            width={1000}
            height={750}
            src={"/img/collection-2.jpg"}
            alt="collection-1"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-row gap-2">
          <Image
            width={300}
            height={750}
            src={"/img/collection-4.jpg"}
            alt="collection-1"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="md:w-2/5 flex flex-col gap-2">
        <div>
          <Image
            width={1000}
            height={750}
            src={"/img/collection-1.jpg"}
            alt="collection-1"
            className="rounded-md"
          />
        </div>
        <div>
          <Image
            width={1000}
            height={750}
            src={"/img/collection-3.jpg"}
            alt="collection-1"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
