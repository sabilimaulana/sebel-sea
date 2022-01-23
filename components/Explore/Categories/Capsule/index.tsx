import { Dispatch, FC, SetStateAction } from "react";

interface CapsuleProps {
  category: string;
  classNames: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const Capsule: FC<CapsuleProps> = ({
  category,
  classNames,
  setSelectedCategory,
}) => {
  return (
    <div
      key={category}
      className={`${classNames} sm:m-0 category-capsule`}
      onClick={() => setSelectedCategory(category)}
    >
      <p className="whitespace-nowrap">{category}</p>
    </div>
  );
};

export default Capsule;
