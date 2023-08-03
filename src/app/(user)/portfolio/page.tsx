import { Metadata } from "next";
import { PROJECTS } from "../projects";
import { ProjectCard } from "@/components";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <main className="flex flex-col gap-24 md:gap-32 mt-24 md:mt-32 min-h-[calc(100vh-420px)]">
      <section>
        <h2 className="text-3xl font-bold mb-8">Here’s the work I’ve done</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
