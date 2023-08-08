import { defineField, defineType } from "sanity";

export default defineType({
  name: "Link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      type: "boolean",
      name: "isExternal",
      title: "Is External Link?",
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "boolean",
      name: "intent",
      title: "Variant",
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "href",
      title: "Url",
    }),
    defineField({
      type: "string",
      name: "text",
      title: "Text",
    }),
  ],
});
