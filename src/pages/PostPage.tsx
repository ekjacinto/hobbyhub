import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

const PostPage = () => {
  const supabaseUrl = "https://svyholmxkcaadmualsfs.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {});

  return (
    <div className="flex h-[92vh]">
      <div className="flex flex-col w-full justify-center items-center bg-[#0b0d11] border-[1px] border-[#4b4b51] text-white">
        <div className="flex w-[65rem] h-[55rem] bg-[#0b0d11] border-[1px] border-[#4b4b51]">
          Hi
        </div>
      </div>
    </div>
  );
};

export default PostPage;
