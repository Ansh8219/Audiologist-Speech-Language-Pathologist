import Link from "next/link";
import { HoverArrow } from "./HoverArrow";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "text"
  | "inverse"
  | "outlineInverse";
type ButtonSize = "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-55 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-[9px] bg-ink text-white hover:bg-ink-soft hover:-translate-y-px shadow-[0_1px_0_rgba(23,40,42,0.1)] hover:shadow-[0_6px_16px_rgba(23,40,42,0.12)]",
  secondary:
    "rounded-[9px] border border-ink/20 bg-surface/40 text-ink hover:border-ink/45 hover:bg-surface",
  inverse:
    "rounded-[9px] bg-white text-ink hover:bg-[#F8F5EF] hover:-translate-y-px shadow-[0_1px_0_rgba(23,40,42,0.06)]",
  outlineInverse:
    "rounded-[9px] border border-white/35 bg-transparent text-white hover:border-white hover:bg-white/8",
  text: "rounded-[9px] gap-1.5 px-0 text-ink hover:text-ink",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[0.9375rem]",
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    showArrow,
  } = props;

  const withArrow = showArrow || variant === "text";

  const classes = cn(
    base,
    variants[variant],
    variant !== "text" && sizes[size],
    variant === "text" && "text-sm tracking-[0.01em]",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <HoverArrow />}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={cn(classes, "group")}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={cn(classes, "group")} {...rest}>
      {content}
    </button>
  );
}
