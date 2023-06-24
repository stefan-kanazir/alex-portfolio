import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <main className="flex min-h-[calc(100vh-200px)] flex-col items-start pt-32 gap-8  max-w-[500px]">
      <h1>Portfolio Page</h1>
    </main>
  );
}
