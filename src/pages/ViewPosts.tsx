import SortSelect from "@/components/SortSelect";
import { useState } from "react";

const ViewPosts = () => {
  const [sortOption, setSortOption] = useState("newest");

  return (
    <div className="flex h-[92vh]">
      <div className="flex flex-col w-3/4 justify-start items-start bg-[#010409]">
        <div className="items-start mt-10 ml-6">
          <SortSelect />
        </div>
        <div className="flex flex-col items-center text-start w-full h-full">
          <div className="w-[90%] h-[8.5rem] bg-[#0d0e13] rounded-md p-4 mb-6 text-white shadow-sm shadow-[#cfcfcf]">
            <h1 className="font-bold text-2xl mb-[0.1rem]">Lorem Ipsum</h1>
            <p className="font-open text-xs mb-3">Posted @</p>
            <p className="font-open text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              molestiae consequuntur accusantium amet eum debitis provident
              natus? Eius esse laudantium ratione eveniet, asperiores sint!
              Minus earum nulla consequuntur facere dolores.
            </p>
          </div>
          <div className="w-[90%] h-[8.5rem] bg-[#0d0e13] rounded-md p-4 mb-6 text-white shadow-sm shadow-[#cfcfcf]">
            <h1 className="font-bold text-2xl mb-[0.1rem]">Lorem Ipsum</h1>
            <p className="font-open text-xs mb-3">Posted @</p>
            <p className="font-open text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              molestiae consequuntur accusantium amet eum debitis provident
              natus? Eius esse laudantium ratione eveniet, asperiores sint!
              Minus earum nulla consequuntur facere dolores.
            </p>
          </div>
          <div className="w-[90%] h-[8.5rem] bg-[#0d0e13] rounded-md p-4 mb-6 text-white shadow-sm shadow-[#cfcfcf]">
            <h1 className="font-bold text-2xl mb-[0.1rem]">Lorem Ipsum</h1>
            <p className="font-open text-xs mb-3">Posted @</p>
            <p className="font-open text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              molestiae consequuntur accusantium amet eum debitis provident
              natus? Eius esse laudantium ratione eveniet, asperiores sint!
              Minus earum nulla consequuntur facere dolores.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-1/4 justify-center items-center bg-[#010409] text-white border-l-[0.1px] border-l-white">
        hi
      </div>
    </div>
  );
};

export default ViewPosts;
