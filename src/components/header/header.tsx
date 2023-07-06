import Link from "next/link";
import MenuIcon from "./menu-icon";

function Header() {
  return (
    <header className="flex justify-between items-center h-24">
      <Link href="/" className="text-lg border-b-2 border-primary font-bold">
        Hi, I’m Alex
      </Link>
      <MenuIcon />
      <ul className="hidden md:flex items-center gap-8">
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <a
            href="https://calendly.com/adarbutina/15min"
            target="_blank"
            className="btn-primary"
          >
            Book a call
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
