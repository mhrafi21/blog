import baseApi from "@/api/baseApi";
import { PostCard } from "@/components/PostCard";
import NoPostFound from "@/components/NoPostFound";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TPost } from "@/interface";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const SearchBlog = () => {
  const POSTS_PER_PAGE = 5;
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const search = searchParams.get("q");
  const pageNum = searchParams.get("page");
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["blog-details", search],
    queryFn: async () => {
      const res = await baseApi.get(
        `/api/blogs?search=${search}&page=${pageNum}&limit=${POSTS_PER_PAGE}`
      );
      return res?.data?.data?.data || ([] as TPost[]);
    },
    enabled: !!search,
  });

  useEffect(() => {
    setSearchParams({
      q: String(search),
      page: String(page),
      limit: String(POSTS_PER_PAGE),
    });
  }, [search, page, POSTS_PER_PAGE]);

  const totalPages: number =
    Number(Math.ceil(data?.totalData / POSTS_PER_PAGE)) || 1;

    useEffect(() => {
      window.scrollTo({top: 0, behavior: 'smooth'})
    },[])


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
      ) : data && data.length === 0 ? (
        <NoPostFound />
      ) : (
        data?.map((blog: any) => (
          <div className="mb-4">
            <PostCard post={blog} />
          </div>
        ))
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          variant="outline"
          disabled={page === 1 || isFetching}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages || isFetching}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SearchBlog;
