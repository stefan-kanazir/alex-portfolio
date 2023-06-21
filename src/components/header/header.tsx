import Link from "next/link";

function Header() {
  return (
    <header className="container flex justify-between items-center h-24">
      <h3>Hi, I’m Alex</h3>
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
            target="blank"
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
