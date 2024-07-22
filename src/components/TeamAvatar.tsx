import clsx from "clsx";
import Card from "./Card";

import { useInView } from "react-intersection-observer";
import LazyImage from "./LazyImage";

export interface TeamAvatarProps {
  src: string;
  alt: string;
  name: string;
  role: string;
}

export function TeamAvatar(props: TeamAvatarProps) {
  const { src, alt, name, role } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <Card
      cardSize="none"
      cardStyle="ghost"
      children={
        <div className="flex flex-col gap-2 items-start w-full">
          <div
            ref={ref}
            className={clsx("w-full h-[290px] rounded-3xl bg-gray-light")}
          >
            <LazyImage
              src={src}
              alt={alt}
              className="w-full h-full rounded-2xl object-cover"
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
