import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { NavLink } from "react-router";
import { PostCard } from "@/components/blog";

export type TPost = {
  title: string;
  slug: string;
  author: { name: string; bio: string };
  category: string;
  category_slug: string;
  publishDate: string;
  tags: string[];
  content: string;
  readTime: string;
};

export type TCategory = {
  name: string;
  slug: string;
};

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["latest-posts"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/api/blogs");
      return res.data.data;
    },
  });

  return (
    <div>
      {/* Latest Posts */}
      <main className="">
        <h1 className="text-2xl font-bold">Latest Posts</h1>
        {isLoading ? (
          <div className="grid grid-cols-1 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-40 w-full rounded-md" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {data?.map((post: any) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
