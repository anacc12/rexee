import clsx from "clsx";
import Card from "./Card";

export interface TeamAvatarProps {
    src: string,
    alt: string,
    name: string,
    role: string
}

export function TeamAvatar(props: TeamAvatarProps) {
  const {src, alt, name, role} = props;

  return (
    <Card
      cardSize="none"
      cardStyle="ghost"
      children={
        <div className="flex flex-col gap-2 items-start w-full">
          <div className="w-full h-[290px] rounded-3xl bg-gray-light">
            <img
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
