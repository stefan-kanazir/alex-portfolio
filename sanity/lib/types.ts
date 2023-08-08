type SocialLink = {
  _key: string;
  label: string;
  url: string;
};

export type FooterData = {
  copyright: string;
  socialLinks: SocialLink[];
};

export type Footer = Promise<FooterData>;

export type Project = {
  title: string;
  image: {
    altText: string;
    asset: {
      _ref: string;
    };
  };
  description: string;
  categories: string[];
};

export type Projects = Promise<Project[]>;
