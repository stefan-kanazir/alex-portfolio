import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

type Project = {
  title: string;
  image: {
    altText: string;
    asset: {
      _ref: string;
    };
  };
  description: string;
  categories: string[];
};

type Projects = () => Promise<Project[]>;

export const fetchProjects: Projects = async () => {
  const query = groq`
    *[_type=="project"][] {
        title,
        image {
            altText,
            asset {
            _ref
            }
        },
        description,
        categories
    }
  `;

  const projects: Project[] = await client.fetch(query);

  return projects;
};
