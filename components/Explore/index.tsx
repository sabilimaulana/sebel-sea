import Image from "next/image";
import Categories from "components/Explore/Categories";
import { FC } from "react";
import { Artwork } from "types";
import { avatars } from "data/avatars";
import { random } from "utils/number";

interface ExploreProps {
  featuredArtworks: Artwork[];
}

const Explore: FC<ExploreProps> = ({ featuredArtworks }) => {
  return (
    <section className="mt-7">
      <h1 className="text-[20px] font-semibold">Explore</h1>
      <Categories />
      <section className="flex overflow-x-auto sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 w-full mt-7 gap-7">
        {featuredArtworks.map((artwork) => (
          <section
            key={artwork.id}
            className="w-full min-w-[291px] sm:min-w-0 h-[336px] bg-secondary-black rounded-xl p-3"
          >
            <section className="relative w-full h-40">
              <Image
                src={artwork.artworksUrl}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="Art"
              />
              <section className="relative z-10 p-3 flex flex-col justify-between h-full">
                <section className="flex justify-between">
                  <section className="w-12 h-8 rounded-xl flex items-center justify-center bg-[#c4c4c4] bg-opacity-20">
                    <p>Art</p>
                  </section>

                  <section className="w-10 h-10 rounded-full flex items-center justify-center bg-[#c4c4c4] bg-opacity-20">
                    <Image
                      src="/svg/heart.svg"
                      width={24}
                      height={24}
                      alt="Favorite"
                    />
                  </section>
                </section>

                <section className="flex justify-center items-center absolute bottom-0 left-0 w-full bg-[#262D3A] bg-opacity-80 h-[29px]">
                  <p className="text-sm">Ends in : 50h : 30m :20s</p>
                </section>
              </section>
            </section>

            <section className="flex justify-between items-center mt-4 h-7 text-sm">
              <p className="">Current Bid : </p>
              <p className="text-secondary-purple">{artwork.currentBid} ETH</p>
            </section>

            <h2 className="mt-3">{artwork.name}</h2>

            <section className="border-[1px] border-white opacity-10 mt-4" />
            <section className="mt-4 flex">
              <section className="">
                <Image
                  src={avatars[random()].url}
                  width={36}
                  height={36}
                  alt="Person"
                  className="rounded-full"
                />
              </section>
              <section className="-ml-2">
                <Image
                  src={avatars[random()].url}
                  width={36}
                  height={36}
                  alt="Person"
                  className="rounded-full"
                />
              </section>
              <section className="-ml-2">
                <Image
                  src={avatars[random()].url}
                  width={36}
                  height={36}
                  alt="Person"
                  className="rounded-full"
                />
              </section>
              <section className="-ml-2">
                <Image
                  src={avatars[random()].url}
                  width={36}
                  height={36}
                  alt="Person"
                  className="rounded-full"
                />
              </section>
              <section className="-ml-2">
                <Image
                  src={avatars[random()].url}
                  width={36}
                  height={36}
                  alt="Person"
                  className="rounded-full"
                />
              </section>

              <section className="-ml-2 relative bg-secondary-purple h-9 w-9 rounded-full flex items-center justify-center">
                <p className="text-xs">{random(1, 100)}+</p>
              </section>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Explore;
