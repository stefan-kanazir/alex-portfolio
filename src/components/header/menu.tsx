"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import MenuIcon from "./menu-icon";
import { usePathname } from "next/navigation";
import { Link } from "../link";

interface MenuItemProps {
  href: string;
  text: string;
}

function MenuItem({ href, text }: MenuItemProps) {
  return (
    <li>
      <NextLink href={href}>{text}</NextLink>
    </li>
  );
}

function Menu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsMenuOpened(false);
  }, [path]);

  return (
    <>
      <MenuIcon
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        isMenuOpened={isMenuOpened}
      />
      <ul
        className={`${
          isMenuOpened
            ? "flex max-md:container max-md:fixed max-md:inset-0 max-md:bg-white max-md:flex-col"
            : "hidden md:flex"
        } items-center justify-center gap-8`}
      >
        <MenuItem href="/" text="Home" />
        <MenuItem href="/portfolio" text="Portfolio" />
        <MenuItem href="/about" text="About" />
        <li className="max-md:w-full">
          <Link href="https://calendly.com/adarbutina/15min" external>
            Schedule a call
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
