// types/TPost.ts
type TAuthor = {
  name: string;
  avatar: string;
};

type TPost = {
  title: string;
  slug: string;
  author: TAuthor;
  category: string;
  category_slug: string;
  publishDate: string;
  tags: string[];
  content: string;
  readTime: string;
};

// components/PostCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { Link } from "react-router";


type PostCardProps = {
  post: TPost;
};

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.slug}`}>
      <Card className="w-full border-none shadow-none hover:shadow-lg transition duration-200">
      <CardHeader>
        <CardTitle className="text-xl">{post.title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Avatar className="w-6 h-6">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{post.author.name}</span> • <span>{post.publishDate}</span> •{" "}
          <span>{post.readTime} read</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-sm text-blue-600 capitalize">
          {post.category}
        </div>
        <p className="text-muted-foreground line-clamp-3 mb-3">
          {post.content}
        </p>
        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};
