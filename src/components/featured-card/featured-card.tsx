import Image from "next/image";

interface FeaturedCardProps {
  icon: {
    url: string;
    alt: string;
  };
  title: string;
  paragraph: string;
}

function FeaturedCard({ icon, title, paragraph }: FeaturedCardProps) {
  return (
    <article className="flex gap-3 flex-col">
      <Image alt={icon.alt} src={icon.url} width={24} height={24} />
      <h3 className="font-semibold text-md">{title}</h3>
      <p className="text-gray">{paragraph}</p>
    </article>
  );
}

export default FeaturedCard;
