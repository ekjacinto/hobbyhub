import Logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-12 py-4 bg-[#010409] border-b-[1px] border-b-white">
      <div className="flex items-baseline gap-3">
        <img src={Logo} alt="logo" width={50} />
        <h1 className="text-3xl font-bold font-encode hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
          code.
        </h1>
      </div>

      <div className="flex relative">
        <input
          type="text"
          placeholder="Search"
          className="w-[45rem] h-12 rounded-lg pl-7 bg-white border-black border-2 text-black"
        />
        <FaSearch className="absolute text-[#a5a9b3] top-4 left-2 " />
      </div>

      <div className="flex gap-8 text-lg">
        <h1>Home</h1>
        <h1>Create New Post</h1>
      </div>
    </div>
  );
};

export default Navbar;
