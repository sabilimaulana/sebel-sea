import Image from "next/image";

const Sidebar = () => {
  return (
    <nav className="hidden lg:flex flex-col min-w-[122px] min-h-screen bg-secondary-black">
      <div className="flex w-full h-[100px] justify-center items-center">
        <Image src="/img/brand.png" width={48} height={48} alt="Sebel Sea" />
      </div>

      <div className="border-b-[1px] opacity-10 mb-4" />

      <div className="flex justify-center items-center h-[84px] bg-white bg-opacity-10 border-l-4 border-primary-purple">
        <Image
          src="/svg/dashboard.svg"
          width={36}
          height={36}
          alt="Dashboard"
        />
      </div>
      <div className="flex justify-center items-center h-[84px]">
        <Image
          src="/svg/transaction.svg"
          width={36}
          height={36}
          alt="Transaction"
        />
      </div>
      <div className="flex justify-center items-center h-[84px]">
        <Image src="/svg/note.svg" width={36} height={36} alt="Note" />
      </div>
      <div className="flex justify-center items-center h-[84px]">
        <Image src="/svg/gear.svg" width={36} height={36} alt="Gear" />
      </div>
      <div className="flex justify-center items-center h-[84px]">
        <Image src="/svg/package.svg" width={36} height={36} alt="Package" />
      </div>
    </nav>
  );
};

export default Sidebar;
