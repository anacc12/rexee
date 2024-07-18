import clsx from "clsx";

export interface ButtonProps {
  text: string;
  style?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "base" | "md" | "lg";
  width?: string;
  rounded?: "none" | "sm" | "base" | "md" | "lg" | "full";
  action?: () => void;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { text, width, style, size, action, className, rounded } = props;

  const styles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-gray-900 hover:bg-secondary-dark hover:cursor-pointer",
    ghost: "bg-transparent",
    outline: "border border-gray-300",
  };

  const corners = {
    none: "rounded-none",
    sm: "rounded-sm",
    base: "rounded-base",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const sizes = {
    none: "p-0",
    sm: "px-4 py-2",
    base: "px-6 py-3",
    md: "p-8",
    lg: "p-12",
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
        style && styles[style],
        size && sizes[size],
        rounded && corners[rounded],
        width,
        classNames
      )}
      onClick={action}
    >
      {text}
    </div>
  );
}

export default Button;
