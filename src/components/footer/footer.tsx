import Image from "next/image";
import LinkedinIcon from "./linkedin-icon";

function Footer() {
  return (
    <footer className="flex flex-col gap-6">
      <a
        href="https://www.linkedin.com/in/aleksandar-arbutina/"
        target="_blank"
      >
        <LinkedinIcon />
      </a>
      <p className="text-sm md:text-body">
        © 2023 Aleksandar Arbutina. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
