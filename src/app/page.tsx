import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aleksandar Arbutina - Portfolio",
  description: "Portfolio website",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
