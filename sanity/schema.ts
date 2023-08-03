import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import project from "./schemas/documents/project";
import post from "./schemas/post";
import author from "./schemas/author";
import footer from "./schemas/documents/footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, project, blockContent, footer],
};
