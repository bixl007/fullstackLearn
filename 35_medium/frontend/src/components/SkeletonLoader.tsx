const BlogList = () => {
    return (
      <div className="animate-pulse p-4 space-y-4">
        <div className="bg-gray-300 h-6 w-1/4 mb-2"></div>
        <div className="bg-gray-300 h-4 w-full mb-2"></div>
        <div className="bg-gray-300 h-4 w-5/6"></div>
      </div>
    );
  };
  
  export const SkeletonLoader = () => {
    return (
      <div className="p-4">
            <BlogList />
            <BlogList />
            <BlogList />
            <BlogList />
            <BlogList />
            <BlogList />
      </div>
    );
  };