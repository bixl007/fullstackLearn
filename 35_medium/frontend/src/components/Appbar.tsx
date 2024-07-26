import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex items-center justify-between p-2 px-4 ">
      <Link to={"/blogs"}>
        <div>Pen & Pulse</div>
      </Link>
      <div className="flex gap-6">
        <Link to="/publish">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-32 h-10"
          >
            Publish
          </button>
        </Link>
        <div>
          <Avatar name="X" />
        </div>
      </div>
    </div>
  );
};
