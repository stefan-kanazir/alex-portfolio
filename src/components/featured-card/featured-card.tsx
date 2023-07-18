import Image from "next/image";

interface FeaturedCardProps {
  iconUrl: string;
  altText: string;
  title: string;
  text: string;
}

function FeaturedCard({ iconUrl, altText, title, text }: FeaturedCardProps) {
  return (
    <article className="flex flex-col gap-6">
      <Image alt={altText} src={iconUrl} width={24} height={24} />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-md">{title}</h3>
        <p className="text-gray text-sm">{text}</p>
      </div>
    </article>
  );
}

export default FeaturedCard;
