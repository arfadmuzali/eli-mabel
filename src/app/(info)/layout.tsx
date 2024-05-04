"use client";
import Navbar from "@/components/nav/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        {children}
      </div>
    </QueryClientProvider>
  );
}
