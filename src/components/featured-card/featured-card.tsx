import Image from "next/image";

interface FeaturedCardProps {
  iconUrl: string;
  altText: string;
  title: string;
  text: string;
}

function FeaturedCard({ iconUrl, altText, title, text }: FeaturedCardProps) {
  return (
    <article className="flex gap-3 flex-col">
      <Image alt={altText} src={iconUrl} width={24} height={24} />
      <h3 className="font-semibold text-md">{title}</h3>
      <p className="text-gray">{text}</p>
    </article>
  );
}

export default FeaturedCard;
