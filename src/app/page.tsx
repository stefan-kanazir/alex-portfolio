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
      <section className="flex flex-col items-start gap-6">
        <h1 className="text-3xl md:text-6xl font-bold">
          I design <span className="text-primary">digital products</span> that
          accelerate business growth.
        </h1>
        <p className="font-medium">
          I’m a product designer that specializes in visual design and
          conversion rate optimization. I currently manage creative projects and
          design shopping experiences for an{" "}
          <span className="text-primary">
            international furniture eCommerce brand.
          </span>
        </p>
        <div className="flex gap-4">
          <a
            href="https://calendly.com/adarbutina/15min"
            target="_blank"
            className="btn-primary"
          >
            Schedule a call
          </a>
          <Link href="/portfolio" className="btn-secondary">
            View Full Résumé
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
