import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center h-24">
      <Link href="/">Hi, I’m Alex</Link>
      <ul className="flex items-center gap-8">
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
