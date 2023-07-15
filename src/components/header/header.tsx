import Link from "next/link";
import Menu from "./menu";

function Header() {
  return (
    <header className="flex justify-between items-center h-24">
      <Link href="/" className="text-lg border-b-2 border-primary font-bold">
        Hi, I’m Alex
      </Link>
      <Menu />
    </header>
  );
}

export default Header;
