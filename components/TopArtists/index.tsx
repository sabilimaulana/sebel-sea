import { avatars } from "data/avatars";
import Image from "next/image";
import { FC } from "react";
import { Artist } from "types";
import { random } from "utils/number";

interface TopArtists {
  topArtists: Artist[];
}

const TopArtists: FC<TopArtists> = ({ topArtists }) => {
  return (
    <div className="min-w-[333px] w-full p-5 bg-secondary-black rounded-[20px] flex flex-col gap-5">
      <h1 className="text-[20px] font-semibold">Top Artist</h1>

      {topArtists.map((artist, index) => (
        <section key={artist.id} className="flex items-center">
          <h3 className="text-heading-[20px] font-semibold mr-2">
            {index + 1}.
          </h3>
          <section className="w-10 h-10 relative">
            <Image
              src={avatars[random()].url}
              alt="Artist"
              layout="fill"
              className="rounded-full"
            />
          </section>
          <section className="flex-grow ml-2 overflow-hidden">
            <p className="text-heading-5 font-medium text-ellipsis  whitespace-nowrap overflow-hidden mr-4">
              {artist.name}
            </p>
            <p className="text-heading-6 text-primary-gray">
              @{artist.username}
            </p>
          </section>
          <button className="button-gradient rounded-lg text-heading-6 px-[10px] h-[30px] ">
            Follow
          </button>
        </section>
      ))}
    </div>
  );
};

export default TopArtists;
