function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between md:flex-row gap-6 mt-24 md:mt-32 py-6 border-t border-lightGray rounded-lg">
      <p className="max-md:text-center text-sm">
        © 2023 Aleksandar Arbutina. All rights reserved.
      </p>
      <div className="flex flex-row gap-1.5">
        <a
          href="https://www.linkedin.com/in/aleksandar-arbutina/"
          target="_blank"
          className="text-sm font-semibold"
        >
          Linkedin
        </a>
        <span className="text-sm">•</span>
        <a href="mailto:arbutina99@gmail.com" className="text-sm font-semibold">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
