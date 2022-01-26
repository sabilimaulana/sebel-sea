import { useState } from 'react';
import Capsule from './Capsule';

const categories = [
  'Live Auction',
  'Art',
  'Photography',
  'Games',
  'Music',
  'Utility'
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );

  return (
    <div className="mt-3 flex gap-4 overflow-x-auto sm:max-w-[calc(100vw+4px-333px-122px-5rem)]">
      {categories.map((category, index) => (
        <Capsule
          key={category}
          category={category}
          classNames={`${
            index === 0 ? 'ml-4' : index === categories.length - 1 && 'mr-4'
          } ${
            selectedCategory === category
              ? 'bg-white bg-opacity-30 border-2 border-[#7B6FE5]'
              : 'bg-secondary-black hover:opacity-70 cursor-pointer'
          }`}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
};

export default Categories;
