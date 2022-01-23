import Image from "next/image";
import type { Dispatch, FC, SetStateAction } from "react";

interface HeaderProps {
  setIsShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ setIsShowSidebar }) => {
  return (
    <header className="flex px-4 sm:px-0 gap-5 w-full h-10 sm:h-14 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="min-w-[24px] h-6 w-6 lg:hidden"
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

      <div className="relative flex-grow h-full">
        <section className="flex h-full w-12 absolute justify-center">
          <Image src="/svg/search.svg" width={24} height={24} alt="Search" />
        </section>

        <input
          type="text"
          name="search"
          id="search"
          className="pl-12 h-full rounded-lg md:rounded-xl bg-secondary-black outline-none w-full"
          placeholder="Search"
        />
      </div>

      <div className="hidden bg-secondary-black rounded-xl px-3 py-4 md:flex gap-[10px] w-[215px]">
        <Image src="/svg/ethereum.svg" width={24} height={24} alt="Ethereum" />

        <p className="text-heading-5 whitespace-nowrap">543,694,666 ETH</p>
      </div>

      <div className="w-auto gap-4 sm:gap-0 sm:w-[333px] flex justify-between">
        <div className="flex gap-2">
          <div className="rounded-full h-10 w-10 bg-secondary-black flex items-center justify-center cursor-pointer hover:opacity-70 transition duration-300">
            <Image src="/svg/chat.svg" height={24} width={24} alt="Chat" />
          </div>
          <div className="rounded-full h-10 w-10 bg-secondary-black flex items-center justify-center cursor-pointer hover:opacity-70 transition duration-300">
            <Image
              src="/svg/notification.svg"
              height={24}
              width={24}
              alt="Notification"
            />
          </div>
        </div>

        <section className="flex items-center gap-5 ">
          <div className="relative min-w-[40px] min-h-[40px] w-10 h-10">
            <Image
              src="/svg/avatars/avatar-11.svg"
              layout="fill"
              alt="Sabili Maulana"
              className="rounded-full"
            />
          </div>

          <p className="hidden md:flex text-heading-5 whitespace-nowrap">
            Sabili Maulana
          </p>

          <section className="hidden md:flex">
            <Image
              src="/svg/arrow-down.svg"
              height={24}
              width={24}
              alt="Profile"
              className="cursor-pointer hover:opacity-70 transition duration-300"
            />
          </section>
        </section>
      </div>
    </header>
  );
};

export default Header;
