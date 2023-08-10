import { type SchemaTypeDefinition } from "sanity";
import { footer, homepage, project } from "./schemas/documents";
import { link, mainHero } from "./schemas/objects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    project,
    footer,
    homepage,
    // Objects
    mainHero,
    link,
  ],
};
