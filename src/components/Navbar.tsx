import { Link } from "react-router-dom";
import { MdOutlineCodeOff } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdPageview } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-12 py-4 bg-[#010409] border-b-[1px] border-b-white">
      <Link
        to="/"
        className="flex items-center gap-3 text-4xl hover:text-pink-600"
      >
        <MdOutlineCodeOff />
        <h1 className="text-3xl font-bold font-encode">code.</h1>
      </Link>

      <div className="flex relative">
        <input
          type="text"
          placeholder="Search"
          className="w-[52rem] h-12 rounded-xl pl-7 ml-36 bg-white border-black border-2 text-black"
        />
        <FaSearch className="absolute text-[#a5a9b3] top-4 left-[9.6rem]" />
      </div>

      <div className="flex justify-center items-center gap-8 text-lg">
        <Link
          to="/"
          className="flex justify-center items-center gap-2 hover:text-blue-200"
        >
          Home
          <IoHome />
        </Link>
        <Link
          to="/posts"
          className="flex justify-center items-center gap-2 hover:text-blue-200"
        >
          View
          <MdPageview />
        </Link>
        <Link
          to="/create"
          className="flex justify-center items-center gap-2 hover:text-blue-200"
        >
          Create
          <IoIosCreate />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
