import Computer from "../assets/htmlendtag.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-12 py-4 bg-[#010409] border-b-[1px] border-b-white">
      <div className="flex items-baseline gap-3">
        <img src={Computer} alt="logo" width={50} />
        <h1 className="text-3xl font-bold font-encode italic hover:">code.</h1>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-[42rem] h-12 rounded-lg pl-2 bg-white border-black border-2 text-black"
      />
      <div className="flex gap-8 text-xl font-bold">
        <h1>Home</h1>
        <h1>Create New Post</h1>
      </div>
    </div>
  );
};

export default Navbar;
