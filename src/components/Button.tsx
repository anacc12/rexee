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
    primary: "bg-primary font-semibold !text-white transition-colors hover:bg-primary-dark",
    secondary: "bg-secondary font-semibold transition-colors hover:bg-secondary-dark",
    ghost: "bg-transparent font-semibold",
    outline: "border border-gray-300",
    dark: "bg-dark text-white font-semibold"
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
    base: "px-4 py-3",
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
      style={style=="secondary" ? { color: 'rgba(17,8,43)' } : style == "primary" ? {color: 'rgb(255, 255, 255)'} : {}}
      onClick={action}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

export default Button;
