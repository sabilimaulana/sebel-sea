import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  setIsShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setIsShowSidebar }: HeaderProps) => {
  return (
    <header className="flex h-10 w-full items-center gap-5 px-4 sm:h-14 sm:px-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 min-w-[24px] lg:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setIsShowSidebar(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div className="relative h-full flex-grow">
        <section className="absolute flex h-full w-12 justify-center">
          <Image src="/svg/search.svg" width={24} height={24} alt="Search" />
        </section>

        <input
          type="text"
          name="search"
          id="search"
          className="h-full w-full rounded-lg bg-secondary-black pl-12 outline-none md:rounded-xl"
          placeholder="Search"
        />
      </div>

      <div className="hidden w-[215px] gap-[10px] rounded-xl bg-secondary-black px-3 py-4 md:flex">
        <Image src="/svg/ethereum.svg" width={24} height={24} alt="Ethereum" />

        <p className="whitespace-nowrap text-heading-5">543,694,666 ETH</p>
      </div>

      <div className="flex w-auto justify-between gap-4 sm:w-[333px] sm:gap-0">
        <div className="flex gap-2">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary-black transition duration-300 hover:opacity-70">
            <Image src="/svg/chat.svg" height={24} width={24} alt="Chat" />
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary-black transition duration-300 hover:opacity-70">
            <Image
              src="/svg/notification.svg"
              height={24}
              width={24}
              alt="Notification"
            />
          </div>
        </div>

        <section className="flex items-center gap-5 ">
          <div className="relative h-10 min-h-[40px] w-10 min-w-[40px]">
            <Image
              src="/svg/avatars/avatar-11.svg"
              layout="fill"
              alt="Sabili Maulana"
              className="rounded-full"
            />
          </div>

          <p className="hidden whitespace-nowrap text-heading-5 md:flex">
            Sabili Maulana
          </p>

          <section className="hidden md:flex">
            <Image
              src="/svg/arrow-down.svg"
              height={24}
              width={24}
              alt="Profile"
              className="cursor-pointer transition duration-300 hover:opacity-70"
            />
          </section>
        </section>
      </div>
    </header>
  );
};

export default Header;
