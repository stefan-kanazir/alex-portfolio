import { LinkIcon } from "@heroicons/react/20/solid";
import { defineField, defineType } from "sanity";

const socialLink = {
  title: "Social Link",
  name: "socialLink",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      title: "Label",
      name: "label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Url",
      name: "url",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default defineType({
  type: "document",
  name: "footer",
  title: "Footer",
  fields: [
    defineField({
      title: "Social Links",
      name: "socialLinks",
      type: "array",
      of: [socialLink],
    }),
    defineField({
      title: "Copyright",
      name: "copyright",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
});
