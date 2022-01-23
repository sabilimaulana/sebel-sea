import Image from "next/image";
import type { Dispatch, FC, SetStateAction } from "react";

interface SidebarProps {
  isShowSidebar: boolean;
  setIsShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ isShowSidebar, setIsShowSidebar }) => {
  const navClass = `${
    isShowSidebar ? "fixed" : "hidden"
  } z-20 w-screen lg:w-auto bg-primary-black lg:static lg:flex flex-col min-w-[122px] min-h-screen lg:bg-secondary-black`;

  return (
    <nav className={navClass}>
      <div className="lg:static min-w-[122px] w-full">
        <div className="flex w-full h-[72px] lg:h-[100px] justify-between lg:justify-center items-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setIsShowSidebar(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <section className="flex items-center gap-3">
            <Image
              src="/img/brand.png"
              width={48}
              height={48}
              alt="Sebel Sea"
              className="cursor-pointer"
            />

            <h1 className="text-heading-4 label-gradient lg:hidden">
              Sebel Sea
            </h1>
          </section>
          <section className="w-8 h-full sm:hidden" />
        </div>

        <div className="border-b-[1px] opacity-10 lg:mb-4" />

        <section className="py-7 px-3 lg:hidden">
          <section className="flex gap-[10px] h-14 items-center bg-secondary-black px-3 rounded-xl">
            <Image
              src="/svg/ethereum.svg"
              width={24}
              height={24}
              alt="Ethereum"
            />
            <p className="lg:hidden">543,694,489 ETH</p>
          </section>
        </section>

        {/* <div className="flex px-8 lg:justify-center items-center h-[84px] bg-white bg-opacity-10 border-l-4 border-primary-purple gap-9">
          <Image
            src="/svg/dashboard.svg"
            width={36}
            height={36}
            alt="Dashboard"
          />
          <p className="lg:hidden">Dashboard</p>
        </div> */}

        <div className="flex px-8 lg:justify-center gap-9 items-center h-[84px] cursor-pointer hover:opacity-70 transition duration-300 hover:bg-white hover:bg-opacity-5">
          <Image
            src="/svg/dashboard.svg"
            width={36}
            height={36}
            alt="Dashboard"
          />

          <p className="lg:hidden">Dashboard</p>
        </div>
        <div className="flex px-8 lg:justify-center gap-9 items-center h-[84px] cursor-pointer hover:opacity-70 transition duration-300 hover:bg-white hover:bg-opacity-5">
          <Image
            src="/svg/transaction.svg"
            width={36}
            height={36}
            alt="Activity"
          />
          <p className="lg:hidden">Activity</p>
        </div>
        <div className="flex px-8 lg:justify-center gap-9 items-center h-[84px] cursor-pointer hover:opacity-70 transition duration-300 hover:bg-white hover:bg-opacity-5">
          <Image src="/svg/note.svg" width={36} height={36} alt="Transaction" />
          <p className="lg:hidden">Transaction</p>
        </div>
        <div className="flex px-8 lg:justify-center gap-9 items-center h-[84px] cursor-pointer hover:opacity-70 transition duration-300 hover:bg-white hover:bg-opacity-5">
          <Image src="/svg/package.svg" width={36} height={36} alt="Package" />
          <p className="lg:hidden">My Collection</p>
        </div>
        <div className="flex px-8 lg:justify-center gap-9 items-center h-[84px] cursor-pointer hover:opacity-70 transition duration-300 hover:bg-white hover:bg-opacity-5">
          <Image src="/svg/gear.svg" width={36} height={36} alt="Setting" />
          <p className="lg:hidden">Setting</p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
