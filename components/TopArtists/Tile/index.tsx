import { avatars } from "data/avatars";
import Image from "next/image";
import { FC, memo, useState } from "react";
import { Artist } from "types";
import { random } from "utils/number";

interface TileProps {
  artist: Artist;
  index: number;
}

const Avatar = memo(function Avatar() {
  return (
    <Image
      src={avatars[random()].url}
      alt="Artist"
      layout="fill"
      className="rounded-full"
    />
  );
});

const Tile: FC<TileProps> = ({ artist, index }) => {
  const [isFollow, setIsFollow] = useState<boolean>(random(0, 100) % 2 === 0);

  return (
    <section key={artist.id} className="artist-tile">
      <h3 className="text-heading-[20px] font-semibold mr-2">{index + 1}.</h3>
      <section className="w-10 h-10 relative">
        <Avatar />
      </section>
      <section className="flex-grow ml-2 overflow-hidden">
        <p className="text-heading-5 font-medium text-ellipsis  whitespace-nowrap overflow-hidden mr-4">
          {artist.name}
        </p>
        <p className="text-heading-6 text-primary-gray">@{artist.username}</p>
      </section>
      {isFollow ? (
        <p
          className="text-xs text-primary-purple cursor-pointer"
          onClick={() => setIsFollow(false)}
        >
          Following
        </p>
      ) : (
        <button
          className="button-gradient rounded-lg text-heading-6 px-[10px] h-[30px] cursor-pointer hover:opacity-70 transition duration-300"
          onClick={() => setIsFollow(true)}
        >
          Follow
        </button>
      )}
    </section>
  );
};

export default Tile;
