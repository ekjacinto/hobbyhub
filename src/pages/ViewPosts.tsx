import { useState } from "react";
import SortSelect from "@/components/SortSelect";
import FilterSelect from "@/components/FilterSelect";

const ViewPosts = () => {
  const [sortOption, setSortOption] = useState<string>("");
  const [filterOption, setFilterOption] = useState<string>("");

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const handleFilterChange = (filter: string) => {
    setFilterOption(filter);
    console.log(filter);
  };

  return (
    <div className="flex h-[92vh]">
      <div className="flex flex-col w-3/4 justify-start items-start bg-[#0b0d11]">
        <div className="items-start mt-10 ml-6">
          <SortSelect changeEvent={handleSortChange} />
        </div>
        <div className="flex flex-col items-center text-start w-full h-full">
          <div className="w-[90%] h-[8.5rem] bg-[#0b0d11] border-[1px] border-[#232326] rounded-md p-4 mb-6 text-white hover:bg-[#101112] hover:shadow-sm hover:shadow-[#cfcfcf] hover:-translate-y-1 hover:scale-[1.02] duration-200">
            <h1 className="font-bold text-2xl mb-[0.1rem]">Lorem Ipsum</h1>
            <p className="font-open text-xs mb-3">Posted @</p>
            <p className="font-open text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              molestiae consequuntur accusantium amet eum debitis provident
              natus? Eius esse laudantium ratione eveniet, asperiores sint!
              Minus earum nulla consequuntur facere dolores.
            </p>
          </div>
          <div className="w-[90%] h-[8.5rem] bg-[#0b0d11] border-[1px] border-[#232326] rounded-md p-4 mb-6 text-white hover:bg-[#101112] hover:shadow-sm hover:shadow-[#cfcfcf] hover:-translate-y-1 hover:scale-[1.02] duration-200">
            <h1 className="font-bold text-2xl mb-[0.1rem]">Lorem Ipsum</h1>
            <p className="font-open text-xs mb-3">Posted @</p>
            <p className="font-open text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              molestiae consequuntur accusantium amet eum debitis provident
              natus? Eius esse laudantium ratione eveniet, asperiores sint!
              Minus earum nulla consequuntur facere dolores.
            </p>
          </div>
          <div className="w-[90%] h-[8.5rem] bg-[#0b0d11] border-[1px] border-[#232326] rounded-md p-4 mb-6 text-white hover:bg-[#101112] hover:shadow-sm hover:shadow-[#cfcfcf] hover:-translate-y-1 hover:scale-[1.02] duration-200">
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

      <FilterSelect filter={filterOption} changeEvent={handleFilterChange} />
    </div>
  );
};

export default ViewPosts;
