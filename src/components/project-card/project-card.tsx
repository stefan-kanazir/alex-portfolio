import Image from "next/image";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  altText: string;
  text: string;
  categories: string[];
}

function ProjectCard({
  title,
  imageUrl,
  altText,
  text,
  categories,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={imageUrl}
        alt={altText}
        width={516}
        height={387}
        className="w-full rounded overflow-hidden"
      />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray">{text}</p>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            className="bg-lightBlue text-gray rounded-full text-xs font-semibold py-1 px-3"
            key={category}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
