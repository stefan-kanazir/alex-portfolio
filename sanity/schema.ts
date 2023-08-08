import { type SchemaTypeDefinition } from "sanity";

import project from "./schemas/documents/project";
import footer from "./schemas/documents/footer";
import mainHero from "./schemas/objects/mainHero";
import link from "./schemas/objects/link";
import page from "./schemas/documents/page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    project,
    footer,
    page,
    // Objects
    mainHero,
    link,
  ],
};
