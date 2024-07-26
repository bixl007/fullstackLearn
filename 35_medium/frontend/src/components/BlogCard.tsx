import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return <Link to={`/blog/${id}`}>
    <div className="p-5 border-b border-slate-300 pb-4 w-screen max-w-screen-2xl cursor-pointer">
      <div className=" flex ">
        <div className="flex justify-center flex-col">
          <Avatar name={authorName} />
        </div>
        <div className=" font-light flex justify-center flex-col pl-2"> {authorName}</div>
        <div className="flex justify-center flex-col px-2 ">
          <Circle />
        </div>
        <div className=" font-thin flex justify-center flex-col ">{publishedDate}</div>
      </div>
      <div className="text-xl font-semibold py-4">{title}</div>
      <div className="text-md font-extralight">{content.slice(0, 200) + "..."}</div>
      <div className="text-slate-500 text-sm py-3">{`${Math.ceil(content.length / 100)} minute(s) read`}</div>
      
    </div>
    </Link>
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-300 rounded-full ">
      <span className="font-medium text-gray-800 ">{name[0]}</span>
    </div>
  );
}

function Circle() {
  return <div className="bg-slate-300 h-1 w-1 rounded-full"></div>;
}
