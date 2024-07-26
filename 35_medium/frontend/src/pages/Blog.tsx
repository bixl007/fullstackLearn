import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { Appbar } from "../components/Appbar";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading) {
    return (
      <div>
        <Appbar />
        <SkeletonLoader />
      </div>
    );
  }
  if (blog)
    return (
      <div>
        <FullBlog blog={blog} />
      </div>
    );
};
