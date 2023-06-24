import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aleksandar Arbutina - Portfolio",
  description: "Portfolio website",
};

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-200px)] flex-col items-start pt-16 md:pt-32 gap-6  max-w-[560px]">
      <h1 className="text-heading-2 md:text-heading-1">
        I provide tailored web design services that accelerate growth.
      </h1>
      <p className="text-lg">
        Turn your website into a high-converting machine that accelerates
        business growth — tailored to businesses, eCommerce, and more.
      </p>
      <div className="flex gap-4">
        <a
          href="https://calendly.com/adarbutina/15min"
          target="_blank"
          className="btn-primary"
        >
          Book a call
        </a>
        <Link href="/portfolio" className="btn">
          Portfolio
        </Link>
      </div>
    </main>
  );
}
