import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
};

export default function About() {
  return (
    <main className="md:grid md:grid-cols-2 md:gap-8 min-h-[calc(100vh-420px)] mt-24 md:mt-32">
      <h1 className="text-3xl font-bold max-md:mb-6">
        Here’s a little bit about me...
      </h1>
      <article className="flex flex-col gap-6">
        <p>
          I’m a Product (UX/UI) Designer that specializes in visual design and
          conversion rate optimization. I currently design experiences and
          manage projects for an{" "}
          <span className="text-primary">
            international eCommerce furniture business.
          </span>
        </p>
        <p>
          Back in 2020, I started my career as a front-end developer, but my
          passion for design and business guided me into the world of user
          experience design.
        </p>
        <p>
          Outside of design, I’m a passionate gamer, a gym junkie, and most of
          all, I love food in all capacities.
        </p>
      </article>
    </main>
  );
}
