import Image from 'next/image';
import { avatars } from 'data/avatars';
import { random } from 'utils/number';
import { Artwork } from 'types';
import { memo, useState } from 'react';

const People = memo(function People() {
  return (
    <section className="mt-4 flex">
      {Array.from(Array(5)).map((_, index) => (
        <section key={index} className="-ml-2">
          <Image
            src={avatars[random()].url}
            width={36}
            height={36}
            alt="Person"
            className="rounded-full"
          />
        </section>
      ))}

      <section className="relative -ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-secondary-purple">
        <p className="text-xs">{random(1, 100)}+</p>
      </section>
    </section>
  );
});

interface CardProps {
  artwork: Artwork;
  classNames: string;
}

const Card = ({ artwork, classNames }: CardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <section key={artwork.id} className={`${classNames} artwork-card sm:m-0`}>
      <section className="relative h-40 w-full rounded-xl">
        <Image
          src={artwork.artworksUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={artwork.name}
          className="rounded-xl"
        />
        <section className="relative z-10 flex h-full flex-col justify-between p-3">
          <section className="flex justify-between">
            <section className="category">
              <p>Art</p>
            </section>

            <section className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#c4c4c4] bg-opacity-20">
              {isLiked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 transition duration-300 hover:scale-125"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setIsLiked(false)}
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition duration-300 hover:scale-125"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setIsLiked(true)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
            </section>
          </section>

          <section className="countdown">
            <p className="text-sm">Ends in : 50h : 30m :20s</p>
          </section>
        </section>
      </section>

      <section className="mt-4 flex h-7 items-center justify-between text-sm">
        <p className="">Current Bid : </p>
        <p className="text-secondary-purple">{artwork.currentBid} ETH</p>
      </section>

      <h2 className="mt-3">{artwork.name}</h2>

      <section className="mt-4 border-[1px] border-white opacity-10" />
      <People />
    </section>
  );
};

export default Card;
