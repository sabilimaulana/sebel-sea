const Banner = () => {
  return (
    <div className="banner">
      <h1 className="text-base sm:text-[40px] font-semibold">
        One Stop NFT Marketplace
      </h1>
      <p className="text-[11px] sm:text-sm">
        Discover limited-edition digital artwork <br /> Create, Sell, and
        Collect yours now!
      </p>

      <div className="flex gap-1 sm:gap-4 sm:mb-4 ">
        <button className="h-[20px] sm:h-[45px] w-[72px] sm:w-[148px] bg-white rounded-[4px] sm:rounded-lg">
          <p className="label-gradient text-[8px] sm:text-heading-5">
            Start Create
          </p>
        </button>

        <button className="h-[20px] sm:h-[45px] w-[72px] sm:w-[148px] bg-white rounded-[4px] sm:rounded-lg">
          <p className="label-gradient text-[8px] sm:text-heading-5">
            How It works
          </p>
        </button>
      </div>
    </div>
  );
};

export default Banner;
