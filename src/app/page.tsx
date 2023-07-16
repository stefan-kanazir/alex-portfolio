import { FeaturedCard, ProjectCard } from "@/components";
import { Metadata } from "next";
import Link from "next/link";
import { CARDS } from "./cards";
import { PROJECTS } from "./projects";

export const metadata: Metadata = {
  title: "Aleksandar Arbutina - Portfolio",
  description: "Portfolio website",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-32 mt-16 md:mt-32">
      <section className="flex flex-col items-start gap-6 max-w-[440px]">
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
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-heading-3">Latest projects</h2>
          <Link href="/portfolio" className="btn-secondary hidden md:flex">
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
