import { defineField, defineType } from "sanity";

export default defineType({
  name: "MainHero",
  title: "Main Hero",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "heading",
      title: "Heading",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "text",
      name: "body",
      title: "Body",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "Link",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      media: "heroImage",
    },
    prepare({ title, media }) {
      return {
        subtitle: "Main Hero",
        media,
        title,
      };
    },
  },
});
