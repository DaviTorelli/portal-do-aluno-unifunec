//* Library imports
import BoringAvatar from "boring-avatars";
import Image from "next/image";

//* Utils imports
import { cn } from "@/lib/utils";
import { AVATAR_COLORS } from "@/utils/colors";

type UserAvatarProps = {
  name: string;
  photoUrl?: string | null;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function UserAvatar(props: UserAvatarProps) {
  const alt = `Foto de ${props.name}`;

  return (
    <div className={cn("relative overflow-hidden bg-muted", props.className)}>
      {props.photoUrl ? (
        <Image
          src={props.photoUrl}
          alt={alt}
          fill
          className="object-cover"
          sizes={props.sizes ?? "96px"}
          priority={props.priority ?? false}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex size-full items-center justify-center [&_svg]:size-full"
        >
          <BoringAvatar
            size={256}
            name={props.name}
            variant="beam"
            colors={AVATAR_COLORS}
          />
        </div>
      )}
    </div>
  );
}
