import { Artist } from 'types';
import Tile from 'components/TopArtists/Tile';

interface TopArtists {
  topArtists: Artist[];
}

const TopArtists = ({ topArtists }: TopArtists) => {
  return (
    <div className="flex w-full flex-col gap-5 rounded-[20px] bg-secondary-black p-5 sm:w-[333px]">
      <h1 className="text-[20px] font-semibold">Top Artist</h1>

      {topArtists.map((artist, index) => (
        <Tile key={artist.id} artist={artist} index={index} />
      ))}
    </div>
  );
};

export default TopArtists;
