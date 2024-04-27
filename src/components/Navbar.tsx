import { Link } from "react-router-dom";
import { MdOutlineCodeOff } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdPageview } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useRef, useState } from "react";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  content: string;
  created_at: string;
  language: string;
  upvotes: number;
  comments: string[];
}

const Navbar = () => {
  const supabaseUrl = "https://svyholmxkcaadmualsfs.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("posts").select("*");
      if (error) console.error(error);
      if (data) setPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full flex justify-between items-center px-12 py-4 bg-[#010409] border-b-[0.1px] border-b-white text-[#dedfdf]">
      <Link
        to="/"
        className="flex items-center gap-3 text-4xl hover:text-pink-600"
      >
        <MdOutlineCodeOff />
        <h1 className="text-3xl font-bold font-encode">code.</h1>
      </Link>

      <div className="flex relative">
        <div></div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={onChange}
          onClick={() => setOpen(!open)}
          className="w-[45rem] h-12 rounded-xl pl-7 ml-36 bg-white border-black border-2 text-black"
        />
        <div
          ref={dropdownRef}
          className="z-10 absolute flex flex-col w-[41rem] h-auto bg-white top-14 left-[11rem] rounded-sm border-2 border-black text-[#5b5959]"
        >
          {open === true &&
            posts
              .filter((post) => {
                const currentSearch = searchTerm.toLowerCase();
                const currentTitle = post.title.toLowerCase();
                return currentTitle.includes(currentSearch);
              })
              .map((post) => (
                <Link
                  to={`view/${post.id}`}
                  className="text-md font-open border-b-[1px] border-b-[#b6b5b5]"
                >
                  {post.title}
                </Link>
              ))}
        </div>
        <FaSearch className="absolute text-[#a5a9b3] top-4 left-[9.6rem]" />
      </div>

      <div className="flex gap-8 text-lg">
        <Link
          to="/"
          className="flex justify-center items-center gap-2 hover:text-blue-200 font-bold"
        >
          Home
          <IoHome />
        </Link>
        <Link
          to="/view"
          className="flex justify-center items-center gap-2 hover:text-blue-200 font-bold"
        >
          View
          <MdPageview />
        </Link>
        <Link
          to="/create"
          className="flex justify-center items-center gap-2 hover:text-blue-200 font-bold"
        >
          Create
          <IoIosCreate />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
