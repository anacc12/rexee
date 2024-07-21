import clsx from "clsx";

export interface PointProps {
  text: string;
  style?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "base" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}

export function Point(props: PointProps) {
  const { text, style, size, className, icon } = props;

  const styles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-gray-900",
    ghost: "bg-transparent text-gray-900",
    outline: "border border-gray-300",
    dark: "bg-dark text-white",
  };

  const sizes = {
    sm: "p-1.5",
    base: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const classNames = className
    ? className
        .split(" ")
        .map((name) => name)
        .join(" ")
    : "";

  return (
    <div
      className={clsx("flex gap-4 items-center", classNames)}
    >
      <div className={clsx("inline-flex items-center justify-center rounded-full", style && styles[style], size && sizes[size])}>
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Point;
