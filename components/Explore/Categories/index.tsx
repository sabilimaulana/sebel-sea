import { useState } from "react";
import Capsule from "./Capsule";

const categories = [
  "Live Auction",
  "Art",
  "Photography",
  "Games",
  "Music",
  "Utility",
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );

  return (
    <div className="w-full flex gap-4 mt-3 overflow-x-auto">
      {categories.map((category, index) => (
        <Capsule
          key={category}
          category={category}
          classNames={`${
            index === 0 ? "ml-4" : index === categories.length - 1 && "mr-4"
          } ${
            selectedCategory === category
              ? "bg-white bg-opacity-30 border-2 border-[#7B6FE5] cursor-default"
              : "bg-secondary-black hover:opacity-70 cursor-pointer"
          }`}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
};

export default Categories;
