import { getFooter } from "../../../sanity/lib/client";

const footer = await getFooter();

function Footer() {
  const { copyright, socialLinks } = footer;

  return (
    <footer className="flex flex-col items-center justify-between md:flex-row gap-6 mt-24 md:mt-32 py-6 border-t border-lightGray rounded-lg">
      <p className="max-md:text-center text-sm">{copyright}</p>
      <div className="flex flex-row gap-6">
        {socialLinks.map((link) => (
          <a
            key={link._key}
            href={link.url}
            target="_blank"
            className="text-sm font-semibold"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
