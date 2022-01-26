import { avatars } from 'data/avatars';
import Image from 'next/image';
import { memo, useState } from 'react';
import { Artist } from 'types';
import { random } from 'utils/number';

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

const Tile = ({ artist, index }: TileProps) => {
  const [isFollow, setIsFollow] = useState<boolean>(random(0, 100) % 2 === 0);

  return (
    <section key={artist.id} className="artist-tile">
      <h3 className="text-heading-[20px] mr-2 font-semibold">{index + 1}.</h3>
      <section className="relative h-10 w-10">
        <Avatar />
      </section>
      <section className="ml-2 flex-grow overflow-hidden">
        <p className="mr-4 overflow-hidden text-ellipsis  whitespace-nowrap text-heading-5 font-medium">
          {artist.name}
        </p>
        <p className="text-heading-6 text-primary-gray">@{artist.username}</p>
      </section>
      {isFollow ? (
        <p
          className="cursor-pointer text-xs text-primary-purple"
          onClick={() => setIsFollow(false)}
        >
          Following
        </p>
      ) : (
        <button
          className="button-gradient h-[30px] cursor-pointer rounded-lg px-[10px] text-heading-6 transition duration-300 hover:opacity-70"
          onClick={() => setIsFollow(true)}
        >
          Follow
        </button>
      )}
    </section>
  );
};

export default Tile;
