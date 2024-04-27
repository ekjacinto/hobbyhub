import { useEffect, useState } from "react";
import SortSelect from "@/components/SortSelect";
import FilterSelect from "@/components/FilterSelect";
import { createClient } from "@supabase/supabase-js";
import PostMiniView from "@/components/PostMiniView";

interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  created_at: string;
  language: string;
  upvotes: number;
}

const ViewPosts = () => {
  const supabaseUrl = "https://svyholmxkcaadmualsfs.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [sortOption, setSortOption] = useState<string>("");
  const [filterOption, setFilterOption] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("posts").select("*");
      if (error) console.error(error);
      if (data) {
        const formattedData = data.map((post: Post) => ({
          ...post,
          created_at: formatDateTime(post.created_at),
        }));
        setPosts(formattedData);
      }
      console.log(data);
    };
    fetchPosts();
  }, []);

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const handleFilterChange = (filter: string) => {
    setFilterOption(filter);
    console.log(filter);
  };

  const formatDateTime = (dateTimeString: string) => {
    const dateTime = new Date(dateTimeString);
    const time = dateTime.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
    const date = dateTime.toLocaleDateString();
    return `${time}, ${date}`;
  };

  return (
    <div className="flex h-[92vh]">
      <div className="flex flex-col w-3/4 justify-start items-start bg-[#0b0d11]">
        <div className="items-start mt-10 ml-6">
          <SortSelect changeEvent={handleSortChange} />
        </div>
        <div className="flex flex-col items-center text-start w-full h-full">
          {posts && (filterOption === "forum" || filterOption === "")
            ? sortOption === "Newest"
              ? posts
                  .sort((a, b) => (a.created_at > b.created_at ? -1 : 1))
                  .map((post) => (
                    <PostMiniView
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      createdAt={post.created_at}
                      description={post.description}
                    />
                  ))
              : sortOption === "mostPopular"
              ? posts
                  .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1))
                  .map((post) => (
                    <PostMiniView
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      createdAt={post.created_at}
                      description={post.description}
                    />
                  ))
              : posts.map((post) => (
                  <PostMiniView
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    createdAt={post.created_at}
                    description={post.description}
                  />
                ))
            : posts && filterOption !== ""
            ? sortOption === "Newest"
              ? posts
                  .filter((post) => post.language === filterOption)
                  .sort((a, b) => (a.created_at > b.created_at ? -1 : 1))
                  .map((post) => (
                    <PostMiniView
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      createdAt={post.created_at}
                      description={post.description}
                    />
                  ))
              : sortOption === "mostPopular"
              ? posts
                  .filter((post) => post.language === filterOption)
                  .sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1))
                  .map((post) => (
                    <PostMiniView
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      createdAt={post.created_at}
                      description={post.description}
                    />
                  ))
              : posts
                  .filter((post) => post.language === filterOption)
                  .map((post) => (
                    <PostMiniView
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      createdAt={post.created_at}
                      description={post.description}
                    />
                  ))
            : null}
        </div>
      </div>
      <FilterSelect filter={filterOption} changeEvent={handleFilterChange} />
    </div>
  );
};

export default ViewPosts;
