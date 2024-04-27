import { Link } from "react-router-dom";

interface PostMiniViewProps {
  id: number;
  title: string;
  createdAt: string;
  description: string;
}

const PostMiniView = ({
  id,
  title,
  createdAt,
  description,
}: PostMiniViewProps) => {
  return (
    <Link
      to={`/view/${id}`}
      className="w-[90%] h-[9.5rem] bg-[#0b0d11] border-[1px] border-[#232326] rounded-md p-4 mb-6 text-white hover:bg-[#101112] hover:shadow-sm hover:shadow-[#cfcfcf] hover:-translate-y-1 hover:scale-[1.02] duration-200"
    >
      <h1 className="font-bold text-2xl mb-[0.1rem]">{title}</h1>
      <p className="font-open text-xs mb-3">Posted @ {createdAt}</p>
      <p className="font-open text-sm">{description}</p>
    </Link>
  );
};

export default PostMiniView;
