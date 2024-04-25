import { useState } from "react";

const ViewPosts = () => {
  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setSelectOpen(!selectOpen);
  };

  return (
    <div className="flex h-[92vh]">
      <div className="flex w-5/6 justify-start items-start bg-[#0a0c0e]">
        <div className="flex flex-col items-start m-12">
          <button
            onClick={handleOpen}
            className={`bg-gray-800 w-36 p-2 rounded-md text-left ${
              selectOpen ? "border-2 border-white" : ""
            }`}
          ></button>
          {selectOpen ? (
            <ul className="w-36 mt-2">
              <li className="bg-[#aab2b9] rounded-sm mb-1">Newest</li>
              <li className="bg-[#aab2b9] rounded-sm">Most Popular</li>
            </ul>
          ) : null}
        </div>
      </div>
      <div className="flex w-1/6 justify-center items-center bg-gray-950">
        hi
      </div>
    </div>
  );
};

export default ViewPosts;
