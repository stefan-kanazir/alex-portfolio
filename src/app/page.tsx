import { FeaturedCard } from "@/components";
import { Metadata } from "next";
import Link from "next/link";
import { CARDS } from "./cards";

export const metadata: Metadata = {
  title: "Aleksandar Arbutina - Portfolio",
  description: "Portfolio website",
};

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-start pt-16 pb-32 md:pt-32 gap-6 max-w-[440px]">
        <h1 className="text-heading-2 md:text-heading-1">
          Web design that accelerates business growth.
        </h1>
        <p className="text-lg">
          Elevate your business to the next level. Web design tailored to small
          businesses, eCommerce, and more.
        </p>
        <div className="flex gap-4">
          <a
            href="https://calendly.com/adarbutina/15min"
            target="_blank"
            className="btn-primary"
          >
            Book a call
          </a>
          <Link href="/portfolio" className="btn-secondary">
            Portfolio
          </Link>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-8">
        {CARDS.map((card) => (
          <FeaturedCard {...card} key={card.title} />
        ))}
      </section>
    </main>
  );
}
