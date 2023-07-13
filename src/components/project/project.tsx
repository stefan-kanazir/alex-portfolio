import Image from "next/image";

interface ProjectProps {
  title: string;
  imageUrl: string;
  altText: string;
  text: string;
  categories: string[];
}

function Project({ title, imageUrl, altText, text, categories }: ProjectProps) {
  return (
    <div>
      <Image src={imageUrl} alt={altText} width={387} height={516} />
      <h3>{title}</h3>
      <p>{text}</p>
      <div>
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
    </div>
  );
}

export default Project;
