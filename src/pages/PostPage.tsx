import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useParams } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa6";

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

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "clean",
];

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const supabaseUrl = "https://svyholmxkcaadmualsfs.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [post, setPost] = useState<Post>({} as Post);
  const [upvotes, setUpvotes] = useState<number>(0);
  const [upvoted, setUpvoted] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id);
      if (error) console.error(error);
      if (data) {
        const formattedData = data.map((post: Post) => ({
          ...post,
          created_at: formatDateTime(post.created_at),
        }));
        setPost(formattedData[0]);
        setUpvotes(formattedData[0].upvotes);
      }
    };
    fetchPost();
  }, [id]);

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

  const handleCommentChange = (comment: string) => {
    setComment(comment);
  };

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sanitizedComment = comment.replace(/<[^>]*>?/gm, "");
    const { data, error } = await supabase
      .from("posts")
      .update({ comments: [...post.comments, sanitizedComment] })
      .eq("id", id);
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
    window.location.reload();
  };

  const handleUpvote = async () => {
    if (upvoted) return;
    setUpvotes(upvotes + 1);
    setUpvoted(true);

    const { data, error } = await supabase
      .from("posts")
      .update({ upvotes: upvotes + 1 })
      .eq("id", id);
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  };

  const handleDeletePost = async () => {
    const { data, error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
    window.location.href = "/view";
  };

  return (
    <div className="flex h-full bg-[#0b0d11] justify-center items-center">
      <div className="relative flex flex-col w-full h-auto justify-start items-center text-gray-200 mb-8">
        <div className="bg-[#0c0c0c] border-[1px] border-[#4b4b51] mt-8 px-4 pt-6 pb-6 max-w-[65rem] w-full h-auto rounded-lg shadow-sm shadow-[#cfcfcf] ">
          {upvoted ? (
            <button className="absolute flex max-w-[63rem] w-full justify-end gap-2 text-blue-500">
              <FaRegThumbsUp className="text-2xl" />
              <p className="font-open font-bold text-lg">{upvotes}</p>
            </button>
          ) : (
            <button
              className="absolute flex max-w-[63rem] w-full justify-end gap-2 text-gray-300 hover:text-blue-300 "
              onClick={handleUpvote}
            >
              <FaRegThumbsUp className="text-2xl " />
              <p className="font-open font-bold text-lg">{upvotes}</p>
            </button>
          )}
          <h1 className="font-bold text-4xl mb-1">{post.title}</h1>
          <p className="font-open text-sm mb-2">Posted @ {post.created_at}</p>
          <p className="font-open text-sm mb-6">{post.description}</p>
          <hr className="border-gray-300 mb-6" />
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-open font-bold text-lg mb-4">{post.content}</p>
            <img
              src={post.image}
              alt={post.title}
              className="max-w-[40rem] w-full max-h-[30rem] h-full border-[1px] border-[#4b4b51] rounded-lg"
            />
            <form
              onSubmit={handleCommentSubmit}
              className="relative flex flex-col justify-evenly items-center w-full bg-[#020304] border-[1px] border-[#4b4b51] mt-4  rounded-lg"
            >
              {post.comments && post.comments.length > 0 ? (
                <div className="flex flex-col justify-center items-center bg-[#020304] w-full h-full p-2 rounded-lg">
                  {post.comments.map((comment, index) => (
                    <div
                      key={index}
                      className="max-w-[95vh] w-full h-auto bg-black p-4 my-1 text-start text-gray-100 font-bold border-b-[1px] border-dotted"
                    >
                      {comment}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-open font-bold text-lg mt-6">
                  No comments yet... be the first to comment below!
                </p>
              )}
              <ReactQuill
                className="bg-white rounded-sm shadow-sm shadow-white text-gray-800 w-full max-w-[85vh] h-[25vh] overflow-y-auto mt-2"
                theme="snow"
                value={comment}
                onChange={handleCommentChange}
                modules={modules}
                formats={formats}
              />
              <button
                className="w-[10rem] h-[2.5rem] bg-blue-500 text-white text-2xl font-bold rounded-sm transition ease-in-out delay-150 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-200 my-4"
                type="submit"
              >
                Comment
              </button>
            </form>
          </div>
          <div className="flex w-full h-[3rem] justify-center items-center mt-4 font-bold gap-4 ">
            <Link
              to={`/edit/${post.id}`}
              className="flex justify-center items-center w-[8rem] h-[2.5rem] rounded-sm hover:bg-green-600  bg-green-700 text-lg"
            >
              Edit Post
            </Link>
            <button
              className="flex justify-center items-center w-[8rem] h-[2.5rem] rounded-sm hover:bg-red-600  bg-red-700 text-lg"
              onClick={handleDeletePost}
            >
              Delete Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
