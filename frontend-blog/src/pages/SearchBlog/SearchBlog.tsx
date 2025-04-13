import { PostCard } from "@/components/blog";
import NoPostFound from "@/components/NoPostFound";
import { Skeleton } from "@/components/ui/skeleton";
import { TPost } from "@/interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

const SearchBlog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q");

  const { data, isLoading } = useQuery({
    queryKey: ["blog-details", search],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/blogs?search=${search}`
      );
      return res?.data?.data?.data as TPost[];
    },
    enabled: !!search,
  });

  useEffect(() => {
    setSearchParams({ q: search as string });
  }, [search]);

  return (
    <div className="mt-4">
      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-5 w-3/4 rounded-md" />
              <Skeleton className="h-4 w-1/2 rounded-md" />
            </div>
          ))}
        </div>
      ) : (
        data && data.length === 0 ? <NoPostFound /> :  data?.map((blog: any) => <PostCard post={blog} />)
      )}
      {}
    </div>
  );
};

export default SearchBlog;
