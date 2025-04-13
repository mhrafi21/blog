import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { TPost } from "@/interface";
import { Container } from "lucide-react";
import { Card, CardDescription } from "../ui/card";

const PostDetails = () => {
  const { slug } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blog-details", slug],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/api/blogs/${slug}`);
      return (res?.data?.data as TPost) || {};
    },
    enabled: !!slug,
  });

  if (isError) {
    return (
      <div className="text-center text-red-500 py-10">
        Error: {error.message}
      </div>
    );
  }

  const post = data;

  return (
    <Card className="mt-4 p-4">
      {isLoading ? (
        <div className="space-y-3">
          <Skeleton className="h-48 w-full rounded-xl" />
          <Skeleton className="h-5 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
        </div>
      ) : (
        <div className="">
          <div className="mb-4 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{post?.title}</h1>
            <div className="text-sm text-muted-foreground flex items-center gap-4">
              <span>{post?.publishDate}</span>
              <span>• {post?.readTime} read</span>
            </div>
            <Badge variant="secondary" className="w-fit mt-1">
              {post?.category}
            </Badge>
          </div>

          <Separator className="my-4" />

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <CardDescription>{post?.content}</CardDescription>
          </div>

          <Separator className="my-6" />

          <div className="mt-8 flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Author</h3>
            <p className="text-md font-medium">{post?.author?.name}</p>
            <p className="text-sm text-muted-foreground">{post?.author?.bio}</p>
          </div>

          {post && post.tags.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {post?.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default PostDetails;
