import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

type SocialLink = {
  _key: string;
  label: string;
  url: string;
};

type FooterData = {
  copyright: string;
  socialLinks: SocialLink[];
};

type Footer = () => Promise<FooterData>;

export const fetchFooter: Footer = async () => {
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

  const footer: FooterData = await client.fetch(query);

  return footer;
};
