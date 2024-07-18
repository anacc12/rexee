import clsx from "clsx";

export interface CardProps {
  children: React.ReactNode;
  cardStyle?: "primary" | "light" | "grey" | "ghost" | "outline";
  align?: "start" | "center" | "end";
  cardSize?: "none" | "sml" | "base" | "med" | "lrg";
  fullWidth?: boolean;
  fullHeight?: boolean;
  action?: () => void;
  gap?: string;
  className?: string;
  rounded?: string;
}

export function Card(props: CardProps) {
  const {
    children,
    fullWidth,
    fullHeight,
    cardStyle,
    cardSize,
    action,
    gap,
    className,
    align,
    rounded,
  } = props;

  const cardStyles = {
    primary: "bg-violet-900 text-white",
    light: "bg-white",
    grey: "bg-gray-500",
    ghost: "bg-transparent",
    outline: "border border-gray-300",
  };

  const cardSizes = {
    none: "p-0",
    sml: "p-4",
    base: "p-6",
    med: "p-8",
    lrg: "p-12",
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
        align,
        rounded,
        gap,
        {
          fullWidth: fullWidth,
          fullHeight: fullHeight,
        },
        className
      )}
      onClick={action}
    >
      {children}
    </div>
  );
}

export default Card;
