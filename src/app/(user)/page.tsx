import { Link, FeaturedCard, ProjectCard } from "@/components";
import { Metadata } from "next";
import { CARDS } from "./cards";
import { getProjects } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

export const metadata: Metadata = {
  title: "Aleksandar Arbutina - Portfolio",
  description: "Portfolio website",
};

const projects = await getProjects();

export default function Home() {
  return (
    <main className="flex flex-col gap-24 md:gap-32 mt-24 md:mt-32">
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
        <div className="flex w-full max-md:flex-col gap-4">
          <Link href="https://calendly.com/adarbutina/15min" external>
            Schedule a call
          </Link>
          <Link href="/portfolio" intent="secondary">
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
          <h2 className="text-3xl font-bold">Here’s my recent work</h2>
          <Link href="/portfolio" intent="secondary" className="max-md:hidden">
            View All Projects
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const { title, altText, description, image, categories } = project;
            const imageUrl = urlForImage(image)?.url();

            return (
              <ProjectCard
                altText={altText}
                categories={categories}
                title={title}
                text={description}
                imageUrl={imageUrl}
                key={project.title}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
