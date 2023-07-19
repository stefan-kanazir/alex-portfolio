import Image from "next/image";
import React from "react";

interface MenuIconProps {
  isMenuOpened: boolean;
  onClick: () => void;
}

function MenuIcon({ isMenuOpened = false, onClick }: MenuIconProps) {
  return (
    <button
      className={`flex items-center justify-end md:hidden w-12 h-12 ${
        isMenuOpened ? "fixed z-10 right-8" : undefined
      }`}
      onClick={onClick}
      aria-label={isMenuOpened ? "Close icon" : "Menu icon"}
    >
      <Image
        src={isMenuOpened ? "/icons/close.svg" : "/icons/menu.svg"}
        width={24}
        height={24}
        alt={isMenuOpened ? "Close" : "Menu Icon"}
      />
    </button>
  );
}

export default MenuIcon;
