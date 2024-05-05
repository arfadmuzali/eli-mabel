import Navbar from "@/components/nav/navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen text-3xl font-semibold">
        404 | Page Not Found
      </div>
    </div>
  );
}
