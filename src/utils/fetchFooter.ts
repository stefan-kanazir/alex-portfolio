import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

export const fetchFooter = async () => {
  const query = groq`
    *[_type=="footer"][0]{
        copyright,
        socialLinks[]{
            _key,
            label,
            url
        }
    }
  `;

  const footer = await client.fetch(query);

  return footer;
};
