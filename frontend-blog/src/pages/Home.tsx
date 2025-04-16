import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PostCard } from "@/components/blog";
import { TPost } from "@/interface";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import baseApi from "@/api/baseApi";
import { Button } from "@/components/ui/button";

export type TCategory = {
  name: string;
  slug: string;
};

const Home = () => {
  const [page, setPage] = useState(1);
  const POSTS_PER_PAGE = 5;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["latest-posts", page],
    queryFn: async () => {
      const res = await baseApi.get(
        `/api/blogs?page=${page}&limit=${POSTS_PER_PAGE}`
      );
      return res?.data?.data; // assuming response includes { data: TPost[], totalPages: number }
    },
    
  });

  const posts: TPost[] = data?.data || [];
  const totalPages: number =
    Number(Math.ceil(data?.totalData / POSTS_PER_PAGE)) || 1;

  return (
    <div>
      {/* Latest Posts */}
      <main className="pt-4">
        <CardHeader className="border p-2 px-4 shadow rounded-lg">
          <CardTitle className="text-2xl">Latest Blogs</CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-4 mt-4">
              {[...Array(POSTS_PER_PAGE)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-48 w-full rounded-xl" />
                  <Skeleton className="h-5 w-3/4 rounded-md" />
                  <Skeleton className="h-4 w-1/2 rounded-md" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 mt-4">
              {posts.map((post) => (
                <PostCard key={post?.slug} post={post} />
              ))}
            </div>
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
        </CardContent>
      </main>
    </div>
  );
};

export default Home;
