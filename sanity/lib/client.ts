import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { footerQuery, projectsQuery } from "./queries";
import type { Footer, FooterData, Project, Projects } from "./types";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getFooter(): Footer {
  const footer: FooterData = await client.fetch(footerQuery);

  return footer;
}

export async function getProjects(): Projects {
  const projects: Project[] = await client.fetch(projectsQuery);

  return projects;
}
