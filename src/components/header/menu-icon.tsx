import React from "react";

interface MenuIconProps {
  isMenuOpened: boolean;
  onClick: () => void;
}

function MenuIcon({ isMenuOpened = false, onClick }: MenuIconProps) {
  const icon = isMenuOpened ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      fill="none"
      stroke="#111"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M1 1h18M9 8h10M1 15h18" />
    </svg>
  );

  return (
    <button
      className={`block md:hidden ${isMenuOpened ? "fixed z-10 right-8" : ""}`}
      onClick={onClick}
      aria-label="Menu icon"
    >
      {icon}
    </button>
  );
}

export default MenuIcon;
