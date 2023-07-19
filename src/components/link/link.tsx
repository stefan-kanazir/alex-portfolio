import { cva, type VariantProps } from "class-variance-authority";
import NextLink from "next/link";

const link = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "px-4",
    "rounded-lg",
    "border-2",
    "border-primary",
    "h-11",
    "text-sm",
    "font-semibold",
    "text-center",
    "ease-in",
    "duration-150",
    "hover:opacity-75",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary", "text-white"],
        secondary: ["bg-transparent", "text-primary"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface LinkProps
  extends VariantProps<typeof link>,
    React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

function Link({
  href,
  external = false,
  children,
  intent,
  className,
}: LinkProps) {
  return (
    <>
      {external ? (
        <a href={href} className={link({ intent, className })} target="_blank">
          {children}
        </a>
      ) : (
        <NextLink className={link({ intent, className })} href={href}>
          {children}
        </NextLink>
      )}
    </>
  );
}

export default Link;
