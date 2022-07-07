import Categories from 'components/Explore/Categories';
import { Artwork } from 'types';
import Card from 'components/Explore/Card';

interface ExploreProps {
  featuredArtworks: Artwork[];
}

const Explore = ({ featuredArtworks }: ExploreProps) => {
  return (
    <section className="mt-7 w-full">
      <h1 className="px-4 text-[20px] font-semibold sm:px-0">Explore</h1>
      <Categories />
      <section className="3xl:grid-cols-5 mt-7 flex w-full snap-x grid-cols-1 gap-7 overflow-x-auto sm:grid sm:grid-cols-2 sm:overflow-visible md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {featuredArtworks.map((artwork, index) => (
          <Card
            key={artwork.id}
            artwork={artwork}
            classNames={`${
              index === 0
                ? 'ml-4'
                : index === featuredArtworks.length - 1
                ? 'mr-4'
                : ''
            }`}
          />
        ))}
      </section>
    </section>
  );
};

export default Explore;
