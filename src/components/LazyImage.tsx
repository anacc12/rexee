import clsx from "clsx";
import Card from "./Card";

import { useInView } from "react-intersection-observer";

export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage(props: LazyImageProps) {
  const { src, className, alt } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  const classNames = className
    ? className
        .split(" ")
        .map((name) => name)
        .join(" ")
    : "";

  return (
    <img
      ref={ref}
      src={inView ? src : undefined}
      alt={alt}
      className={`${classNames} transition-opacity duration-700 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

export default LazyImage;
