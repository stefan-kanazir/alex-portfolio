import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "homepage",
  title: "Homepage",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "array",
      name: "sections",
      title: "Sections",
      of: [defineArrayMember({ type: "MainHero" })],
    }),
  ],
});
