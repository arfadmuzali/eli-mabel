import heroImage from "@/../public/img/hero-image.webp";
export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
      className="h-screen bg-cover bg-no-repeat select-text lg:bg-top bg-bottom-4 grid grid-cols-2 justify-center items-center md:p-20 p-10"
    >
      <p className="md:text-3xl text-white text-xl font-semibold">
        Salamat datang di{" "}
        <span className="text-stone-500 md:text-stone-700 font-black">
          ELI MABEL
        </span>
        . Menyediakan produk-produk mabel. Mulai dari kursi, meja, hingga tollet
        berkualitas
      </p>
    </div>
  );
}
