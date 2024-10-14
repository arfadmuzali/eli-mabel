import { motion } from "framer-motion";
import { Armchair, Paintbrush2, Bolt, Handshake } from "lucide-react";
export default function ServiceSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-2 m-auto w-fit my-10">
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
        viewport={{ once: true }}
        className="motion-div"
      >
        <Card title="Penjualan" text="Inovasi, kualitas, dan estetika.">
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
        viewport={{ once: true }}
        className="motion-div"
      >
        <Card title="Pengecatan" text="Pengecatan khusus.">
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
        viewport={{ once: true }}
        className="motion-div"
      >
        <Card title="Custom" text="layanan kustomisasi.">
          <Bolt size={72} color="#44403c" />
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
        viewport={{ once: true }}
        className="motion-div"
      >
        <Card title="Terpercaya" text="Selama bertahun tahun">
          <Handshake size={72} color="#44403c" />
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
    <div className="group flex flex-col justify-center items-center gap-2 text-black transition-all duration-500 p-2 rounded-lg relative hover:shadow-2xl">
      {children}
      <h1 className="text-xl font-semibold text-center transition-all duration-75 group-hover:text-yellow-900">
        {title}
      </h1>
      <p className="text-center text-gray-700">{text}</p>
    </div>
  );
}
