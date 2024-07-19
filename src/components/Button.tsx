import clsx from "clsx";

export interface ButtonProps {
  text: string;
  style?: "primary" | "secondary" | "ghost" | "outline" | "dark";
  size?: "sm" | "base" | "md" | "lg";
  width?: string;
  rounded?: "none" | "sm" | "base" | "md" | "lg" | "full";
  action?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { text, width, style, size, action, className, rounded, icon } = props;

  const styles = {
    primary: "bg-primary !text-white",
    secondary: "bg-secondary !text-gray-900 hover:bg-secondary-dark",
    ghost: "bg-transparent",
    outline: "border border-gray-300",
    dark: "bg-dark text-white"
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
    md: "px-8 py-4", 
    lg: "px-12 py-6",
  };

  const classNames = className
    ? className
        .split(" ")
        .map((name) => name)
        .join(" ")
    : "";

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center",
        style && styles[style],
        size && sizes[size],
        rounded && corners[rounded],
        width,
        className
      )}
      onClick={action}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

export default Button;
