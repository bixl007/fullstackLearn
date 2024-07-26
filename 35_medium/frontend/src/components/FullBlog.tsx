import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import ImageGen from "./ImageGen";

export function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-12 px-4 sm:px-10 w-full pt-12 max-w-screen-2xl gap-8">
          {/* Author Capsule */}
          <div className="col-span-12 sm:col-span-4 order-1 sm:order-2">
            <div className="text-slate-600 py-3 px-1">Author</div>
            <Avatar name={blog.author.name || "Anonymous"} />
            <span className="px-1 font-bold">
              {blog.author.name || "Anonymous"}
            </span>
            <div className="text-slate-700 font-medium pl-10">
              Words are the whispers of the soul.
            </div>
          </div>

          {/* Blog Content */}
          <div className="col-span-12 sm:col-span-8 order-2 sm:order-1">
            <div className="text-3xl sm:text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd December 2023</div>
            <div className="my-5">
              <div>{blog.content}</div>
              <div className="p-5 max-w-lg mt-5"><ImageGen /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
