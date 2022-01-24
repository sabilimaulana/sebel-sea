import { Artist } from "types";
import Tile from "components/TopArtists/Tile";

interface TopArtists {
  topArtists: Artist[];
}

const TopArtists = ({ topArtists }: TopArtists) => {
  return (
    <div className="w-full sm:w-[333px] p-5 bg-secondary-black rounded-[20px] flex flex-col gap-5">
      <h1 className="text-[20px] font-semibold">Top Artist</h1>

      {topArtists.map((artist, index) => (
        <Tile key={artist.id} artist={artist} index={index} />
      ))}
    </div>
  );
};

export default TopArtists;
