import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { PostCard } from "@/components/blog";
import { TPost } from "@/interface";
import { CardHeader, CardTitle } from "@/components/ui/card";


export type TCategory = {
  name: string;
  slug: string;
};

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["latest-posts"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/api/blogs?page=1&limit=10");
      return res?.data?.data?.data as TPost[]; // Ensure TPost is an array type
    },
  });

  return (
    <div>
      {/* Latest Posts */}
      <main className="pt-4">
        <CardHeader className="border shadow rounded-lg">
          <CardTitle className="text-2xl">Latest Blogs</CardTitle>
        </CardHeader>
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
          <div className="grid grid-cols-1 gap-4 mt-4">
            {data &&
              data.map((post: TPost) => (
                <PostCard key={post?.slug} post={post} />
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
