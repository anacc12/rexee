import clsx from "clsx";

export interface CardProps {
  children: React.ReactNode;
  cardStyle?: "primary" | "light" | "secondary" | "ghost" | "outline" | "dark";
  align?: string;
  cardSize?: "none" | "sm" | "base" | "md" | "lg" | "huge";
  width?: string;
  height?: string;
  action?: () => void;
  gap?: string;
  className?: string;
  rounded?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "xxl" | "xxxl";
}

export function Card(props: CardProps) {
  const {
    children,
    width,
    height,
    cardStyle,
    cardSize,
    action,
    gap,
    className,
    align,
    rounded,
  } = props;

  const cardStyles = {
    primary: "bg-primary text-white",
    light: "bg-light",
    secondary: "bg-secondary",
    ghost: "bg-transparent",
    outline: "bg-white border border-gray",
    dark: "bg-dark-video"
  };

  const corners = {
    none: "rounded-none",
    sm: "rounded-sm",
    base: "rounded-base",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    xxl: "rounded-2xl",
    xxxl: "rounded-3xl"
  };

  const cardSizes = {
    none: "p-0",
    sm: "p-4",
    base: "p-6",
    md: "p-8",
    lg: "p-20",
    huge: "p-24"
  };

  const classNames = className
    ? className
        .split(" ")
        .map((name) => name)
        .join(" ")
    : "";

  return (
    <div
      className={clsx(
        "common",
        cardStyle && cardStyles[cardStyle],
        cardSize && cardSizes[cardSize],
        rounded && corners[rounded],
        align,
        gap,
        width,
        height,
        classNames
      )}
      onClick={action}
    >
      {children}
    </div>
  );
}

export default Card;
