import { Armchair, Paintbrush2, Bolt } from "lucide-react";
export default function ServiceSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 p-5 m-auto w-fit my-10">
      <Card
        title="Penjualan Mabel"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ea!"
      >
        <Armchair size={72} color="#44403c" />
      </Card>
      <Card
        title="Pengecatan"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ea!"
      >
        <Paintbrush2 size={72} color="#44403c" />
      </Card>
      <Card
        title="Custom"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ea!"
      >
        <Bolt size={72} color="#44403c" />
      </Card>
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
