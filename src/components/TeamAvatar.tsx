import clsx from "clsx";
import Card from "./Card";

import { useInView } from "react-intersection-observer";
import LazyImage from "./LazyImage";
import { useEffect } from "react";

export interface TeamAvatarProps {
  src: string;
  alt: string;
  name: string;
  role: string;
  hoverSrc: string;
}

export function TeamAvatar(props: TeamAvatarProps) {
  const { src, alt, name, role, hoverSrc } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  useEffect(() => {
    // Preload the hover image
    const img = new Image();
    img.src = hoverSrc;
  }, [hoverSrc]);

  return (
    <Card
      cardSize="none"
      cardStyle="ghost"
      children={
        <div className="flex flex-col gap-2 items-start w-full team-avatar">
          <div
            ref={ref}
            className={clsx("w-full h-[290px] relative rounded-3xl bg-gray-light")}
          >
            <LazyImage
              src={src}
              alt={alt}
              className="default-image w-full h-full rounded-2xl object-cover"
            />
            <LazyImage
              src={hoverSrc}
              alt={alt}
              className="hover-image w-full h-full rounded-2xl object-cover absolute"
            />
          </div>
          <div className="flex flex-col gap-2 p-4 bg-light rounded-2xl w-full">
            <p className="text-[20px] font-semibold">{name}</p>
            <p className="text-sm">{role}</p>
          </div>
        </div>
      }
    />
  );
}

export default TeamAvatar;
