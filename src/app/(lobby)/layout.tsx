import NavbarLobby from "@/components/nav/navbarLobby";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarLobby />
      {children}
    </div>
  );
}
