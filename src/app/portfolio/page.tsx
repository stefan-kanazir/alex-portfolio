import { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "../projects";
import { Project } from "@/components";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <main className="flex flex-col gap-32 mt-16 md:mt-32">
      <section className="mb-6">
        <h2 className="text-heading-3">Portfolio</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <Project {...project} key={project.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
