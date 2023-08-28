import { type SchemaTypeDefinition } from "sanity";
import { footer, project } from "./schemas/documents";
import { link, mainHero } from "./schemas/objects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    project,
    footer,
    // Objects
    mainHero,
    link,
  ],
};
