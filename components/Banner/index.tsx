const Banner = () => {
  return (
    <div className="banner">
      <h1 className="text-base font-semibold sm:text-[40px]">
        One Stop NFT Marketplace
      </h1>
      <p className="text-[11px] sm:text-sm">
        Discover limited-edition digital artwork <br /> Create, Sell, and
        Collect yours now!
      </p>

      <div className="flex gap-1 sm:mb-4 sm:gap-4 ">
        <button className="h-[20px] w-[72px] rounded-[4px] bg-white sm:h-[45px] sm:w-[148px] sm:rounded-lg">
          <p className="label-gradient text-[8px] sm:text-heading-5">
            Start Create
          </p>
        </button>

        <button className="h-[20px] w-[72px] rounded-[4px] bg-white sm:h-[45px] sm:w-[148px] sm:rounded-lg">
          <p className="label-gradient text-[8px] sm:text-heading-5">
            How It works
          </p>
        </button>
      </div>
    </div>
  );
};

export default Banner;
