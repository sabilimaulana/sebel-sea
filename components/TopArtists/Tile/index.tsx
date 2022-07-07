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
      <h3 className="no">{index + 1}.</h3>
      <section className="relative h-10 w-10">
        <Avatar />
      </section>
      <section className="ml-2 flex-grow overflow-hidden">
        <p className="name">{artist.name}</p>
        <p className="username">@{artist.username}</p>
      </section>
      {isFollow ? (
        <p className="button-following" onClick={() => setIsFollow(false)}>
          Following
        </p>
      ) : (
        <button
          className="button-gradient button-follow"
          onClick={() => setIsFollow(true)}
        >
          Follow
        </button>
      )}
    </section>
  );
};

export default Tile;
