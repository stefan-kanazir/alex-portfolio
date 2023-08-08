import { Metadata } from "next";
import { ProjectCard } from "@/components";
import { getProjects } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";

export const metadata: Metadata = {
  title: "Portfolio",
};

const projects = await getProjects();

export default function Portfolio() {
  return (
    <main className="flex flex-col gap-24 md:gap-32 mt-24 md:mt-32 min-h-[calc(100vh-420px)]">
      <section>
        <h2 className="text-3xl font-bold mb-8">Here’s the work I’ve done</h2>

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
