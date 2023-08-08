import { groq } from "next-sanity";

export const footerQuery = groq`
*[_type=="footer"][0]{
    copyright,
    socialLinks[]{
        _key,
        label,
        url
    }
}
`;

export const projectsQuery = groq`
*[_type=="project"][] {
    title,
    image,
    altText,
    description,
    categories
}
`;
