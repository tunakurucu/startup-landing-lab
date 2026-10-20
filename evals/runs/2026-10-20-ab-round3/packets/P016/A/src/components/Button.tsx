import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-wort text-white hover:bg-wort-dark",
  secondary: "border border-ink/20 bg-white text-ink hover:border-ink/40",
  ghost: "text-wort underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-base",
  lg: "min-h-12 px-6 text-lg",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type LinkProps = CommonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = LinkProps | NativeButtonProps;

export function Button({ variant = "primary", size = "md", className = "", children, ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
