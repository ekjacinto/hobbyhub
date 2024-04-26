import { useState } from "react";
import SortSelect from "@/components/SortSelect";
import { VscCommentDiscussion } from "react-icons/vsc";
import { FiThumbsUp } from "react-icons/fi";

import { FaJava, FaPython, FaHtml5, FaRust, FaPhp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";

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

      <div className="flex flex-col w-1/4 justify-center items-center bg-[#0b0d11] text-white">
        <button className="w-[88%] h-[6.5%] rounded-sm mr-8 mb-4 font-bold text-xl shadow-md transition ease-in-out delay-150 bg-[#3bacff] hover:bg-indigo-500 hover:-translate-y-1 hover:scale-105 duration-200">
          Start New Forum
        </button>
        <div className="flex flex-col w-[95%] h-[80%] bg-[#0d0e13] text-md rounded-lg mr-8 p-4 font-open font-bold text-white text-start">
          <div className="flex items-center gap-2 mb-4">
            <VscCommentDiscussion />
            <button onClick={() => handleFilterChange("forums")}>
              All Forums
            </button>
            {filterOption === "forums" && (
              <IoIosCheckmark className="text-blue-400 scale-[2]" />
            )}
          </div>
          <div className="flex items-center gap-2 pb-4 mb-4 border-b-[0.1px] border-b-[#4b4b51]">
            <FiThumbsUp />
            <button onClick={() => handleFilterChange("upvoted")}>
              Upvoted
            </button>
            {filterOption === "upvoted" && (
              <IoIosCheckmark className="text-blue-400 scale-[2]" />
            )}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaJava className="text-orange-500" />
            <button onClick={() => handleFilterChange("java")}>Java</button>
            {filterOption === "java" && (
              <IoIosCheckmark className="text-blue-400 scale-[2]" />
            )}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaPython className="text-blue-500" />
            <button onClick={() => handleFilterChange("python")}>Python</button>
            {filterOption === "python" && (
              <IoIosCheckmark className="text-blue-400 scale-[2]" />
            )}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <IoLogoJavascript className="text-yellow-500" />
            <button onClick={() => handleFilterChange("javascript")}>
              JavaScript
            </button>
            {filterOption === "javascript" && (
              <IoIosCheckmark className="text-blue-400 scale-[2]" />
            )}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaHtml5 className="text-orange-500" />
            <button onClick={() => handleFilterChange("html")}>HTML</button>
            {filterOption === "html" && (
              <IoIosCheckmark className="text-blue-400 scale-[2]" />
            )}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <IoLogoCss3 className="text-blue-500" />
            <button onClick={() => handleFilterChange("css")}>CSS</button>
            {filterOption === "css" && (
              <IoIosCheckmark className="text-blue-400 scale-[2]" />
            )}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaRust />
            <button onClick={() => handleFilterChange("rust")}>Rust</button>
            {filterOption === "rust" && (
              <IoIosCheckmark className="text-blue-400 scale-[2]" />
            )}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaPhp className="text-[#7377ae]" />
            <button onClick={() => handleFilterChange("php")}>PHP</button>
            {filterOption === "php" && (
              <IoIosCheckmark className="text-blue-400 scale-[2]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPosts;
