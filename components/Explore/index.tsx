import Categories from "components/Explore/Categories";
import { FC } from "react";
import { Artwork } from "types";
import Card from "components/Explore/Card";

interface ExploreProps {
  featuredArtworks: Artwork[];
}

const Explore: FC<ExploreProps> = ({ featuredArtworks }) => {
  return (
    <section className="mt-7 w-full">
      <h1 className="text-[20px] font-semibold px-4 sm:px-0">Explore</h1>
      <Categories />
      <section className="flex overflow-x-auto snap-x sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 w-full mt-7 gap-7 sm:overflow-visible">
        {featuredArtworks.map((artwork, index) => (
          <Card
            key={artwork.id}
            artwork={artwork}
            classNames={`${
              index === 0
                ? "ml-4"
                : index === featuredArtworks.length - 1 && "mr-4"
            }`}
          />
        ))}
      </section>
    </section>
  );
};

export default Explore;
