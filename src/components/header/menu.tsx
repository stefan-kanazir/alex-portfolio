"use client";

import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./menu-icon";

interface MenuItemProps {
  href: string;
  text: string;
}

function MenuItem({ href, text }: MenuItemProps) {
  return (
    <li>
      <Link href={href}>{text}</Link>
    </li>
  );
}

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
            : "hidden md:flex"
        } items-center justify-center gap-8`}
      >
        <MenuItem href="/" text="Home" />
        <MenuItem href="/portfolio" text="Portfolio" />
        <MenuItem href="/about" text="About" />
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
