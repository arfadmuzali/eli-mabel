import { motion } from "framer-motion";
import { Armchair, Paintbrush2, Bolt } from "lucide-react";
export default function ServiceSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 p-5 m-auto w-fit my-10">
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        onViewportLeave={() => {
          document.querySelector(".motion-div")?.classList.add("out-of-view");
        }}
        className="motion-div"
      >
        <Card
          title="Penjualan Mebel"
          text="Penjualan mebel kami menawarkan inovasi, kualitas, dan estetika yang fungsional dan elegan."
        >
          <Armchair size={72} color="#44403c" />
        </Card>
      </motion.div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        onViewportLeave={() => {
          document.querySelector(".motion-div")?.classList.add("out-of-view");
        }}
        className="motion-div"
      >
        <Card
          title="Pengecatan"
          text="Teknik pengecatan khusus kami menghadirkan keindahan dan daya tahan yang luar biasa."
        >
          <Paintbrush2 size={72} color="#44403c" />
        </Card>
      </motion.div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        onViewportLeave={() => {
          document.querySelector(".motion-div")?.classList.add("out-of-view");
        }}
        className="motion-div"
      >
        <Card
          title="Custom"
          text="Menyediakan layanan kustomisasi mebel untuk memenuhi kebutuhan unik Anda."
        >
          <Bolt size={72} color="#44403c" />
        </Card>
      </motion.div>
    </div>
  );
}

function Card({
  children,
  text,
  title,
}: {
  children: React.ReactNode;
  text: string;
  title: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-black">
      {children}
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-center">{text}</p>
    </div>
  );
}
