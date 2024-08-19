import clsx from "clsx";

export interface TagProps {
    text: string;
    style?: "primary" | "secondary" | "ghost" | "dark" | "outline" ;
    size?: "sm" | "base" | "md" | "lg";
    className?: string;
    icon?: React.ReactNode;
}

export function Tag(props: TagProps) {
    const { text, style, size, className, icon } = props;

    const styles = {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-gray-900",
        ghost: "bg-transparent text-gray-900",
        outline: "border border-light bg-extra-light text-primary",
        dark: "bg-dark text-white",
    };

    const sizes = {
        sm: "px-3 py-2 text-[11px] leading-[8px]",
        base: "px-4 py-3 text-[12px] leading-[8px]",
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
        <div className={clsx("font-semibold rounded-full", style && styles[style], size && sizes[size])}>
            {text}
        </div>
    );
}

export default Tag;
