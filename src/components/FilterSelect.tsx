import { VscCommentDiscussion } from "react-icons/vsc";
import { FiThumbsUp } from "react-icons/fi";
import { FaJava, FaPython, FaHtml5, FaRust, FaPhp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

interface FilterSelectProps {
  filter: string;
  changeEvent: (filter: string) => void;
}

const FilterSelect = ({ filter, changeEvent }: FilterSelectProps) => {
  return (
    <main className="flex flex-col w-1/4 h-fill justify-center items-center bg-[#0b0d11] text-white border-l-[1px] border-l-[#232326] pl-8">
      <button className="w-[88%] h-[3.75rem] rounded-sm mr-8 mb-4 font-bold text-2xl shadow-md transition ease-in-out delay-150 bg-[#3bacff] hover:bg-indigo-500 hover:-translate-y-1 hover:scale-105 duration-200">
        <Link to="/create">Start New Forum</Link>
      </button>
      <div className="flex flex-col w-[95%] h-[80%] text-xl rounded-lg mr-8 p-4 font-open font-bold text-white text-start gap-2">
        <section className="flex justify-between items-center mb-4 hover:-translate-y-1 hover:scale-[1.02] duration-200">
          <div className="flex items-center gap-2">
            <VscCommentDiscussion />
            <button onClick={() => changeEvent("forums")}>All Forums</button>
          </div>
          {filter === "forums" && (
            <IoIosCheckmark className="text-blue-400 scale-[2]" />
          )}
        </section>
        <section className="flex justify-between items-center mb-4 hover:-translate-y-1 hover:scale-[1.02] duration-200">
          <div className="flex items-center gap-2">
            <FiThumbsUp />
            <button onClick={() => changeEvent("upvoted")}>Upvoted</button>
          </div>
          {filter === "upvoted" && (
            <IoIosCheckmark className="text-blue-400 scale-[2]" />
          )}
        </section>
        <hr className="border-[#4b4b51] mb-4" />
        <section className="flex justify-between items-center gap-2 mb-4 hover:-translate-y-1 hover:scale-[1.02] duration-200">
          <div className="flex items-center gap-2 ">
            <FaJava className="text-orange-500" />
            <button onClick={() => changeEvent("java")}>Java</button>
          </div>
          {filter === "java" && (
            <IoIosCheckmark className="text-blue-400 scale-[2]" />
          )}
        </section>
        <section className="flex justify-between items-center gap-2 mb-4 hover:-translate-y-1 hover:scale-[1.02] duration-200">
          <div className="flex items-center gap-2">
            <FaPython className="text-blue-500" />
            <button onClick={() => changeEvent("python")}>Python</button>
          </div>
          {filter === "python" && (
            <IoIosCheckmark className="text-blue-400 scale-[2]" />
          )}
        </section>
        <section className="flex justify-between items-center gap-2 mb-4 hover:-translate-y-1 hover:scale-[1.02] duration-200">
          <div className="flex items-center gap-2">
            <IoLogoJavascript className="text-yellow-500" />
            <button onClick={() => changeEvent("javascript")}>
              JavaScript
            </button>
          </div>
          {filter === "javascript" && (
            <IoIosCheckmark className="text-blue-400 scale-[2]" />
          )}
        </section>
        <section className="flex justify-between items-center gap-2 mb-4 hover:-translate-y-1 hover:scale-[1.02] duration-200">
          <div className="flex items-center gap-2">
            <FaHtml5 className="text-orange-500" />
            <button onClick={() => changeEvent("html")}>HTML</button>
          </div>
          {filter === "html" && (
            <IoIosCheckmark className="text-blue-400 scale-[2]" />
          )}
        </section>
        <section className="flex justify-between items-center gap-2 mb-4 hover:-translate-y-1 hover:scale-[1.02] duration-200">
          <div className="flex items-center gap-2">
            <IoLogoCss3 className="text-blue-500" />
            <button onClick={() => changeEvent("css")}>CSS</button>
          </div>
          {filter === "css" && (
            <IoIosCheckmark className="text-blue-400 scale-[2]" />
          )}
        </section>
        <section className="flex justify-between items-center gap-2 mb-4 hover:-translate-y-1 hover:scale-[1.02] duration-200">
          <div className="flex items-center gap-2">
            <FaRust />
            <button onClick={() => changeEvent("rust")}>Rust</button>
          </div>
          {filter === "rust" && (
            <IoIosCheckmark className="text-blue-400 scale-[2]" />
          )}
        </section>
        <section className="flex justify-between items-center gap-2 mb-4 hover:-translate-y-1 hover:scale-[1.02] duration-200">
          <div className="flex items-center gap-2">
            <FaPhp className="text-[#7377ae]" />
            <button onClick={() => changeEvent("php")}>PHP</button>
          </div>
          {filter === "php" && (
            <IoIosCheckmark className="text-blue-400 scale-[2]" />
          )}
        </section>
      </div>
    </main>
  );
};

export default FilterSelect;
