import { PostCard } from "@/components/blog";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import baseApi from "@/api/baseApi";

const CategoryPage = () => {
  const { slug } = useParams();

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["categories-post", slug],
    queryFn: async () => {
      const response = await baseApi.get(
        `/api/blogs/category/${slug}`
      );
      return response?.data?.data;
    },
    enabled: !!slug,
  });

  return (
    <div className="grid grid-cols-1 gap-4 pt-4">
      {isLoading
        ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-5 w-3/4 rounded-md" />
              <Skeleton className="h-4 w-1/2 rounded-md" />
            </div>
          ))
        : data?.map((blog: any) => <PostCard key={blog.slug} post={blog} />)}
    </div>
  );
};

export default CategoryPage;
