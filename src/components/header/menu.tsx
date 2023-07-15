"use client";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./menu-icon";

function Menu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      <MenuIcon
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        isMenuOpened={isMenuOpened}
      />
      <ul
        className={`${
          isMenuOpened
            ? "flex max-md:fixed max-md:inset-0 max-md:bg-lightBlue max-md:flex-col"
            : "hidden"
        } items-center justify-center gap-8`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
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
    </>
  );
}

export default Menu;
