"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import useCategory from "@/hooks/useCategory";
import { TCategory, TPost } from "@/interface";
import useCreateBlog from "@/hooks/useCreateBlog";
import { toast } from "sonner";



const AddPost = () => {
  const { data, isLoading } = useCategory();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TPost>();

  const { mutate: createPost, isPending } = useCreateBlog();

  const onSubmit = (data: TPost) => {
    console.log(data);
    const finalPost: TPost = {
      ...data,
      tags: Array.isArray(data.tags) ? data.tags : data.tags.split(",")
    };

  
    createPost(finalPost, {
      onSuccess: () => {
        toast.success("Post created successfully");
        reset();
      },
      onError: (error) => {
        toast.error("Failed to create post");
        console.error("Create post error:", error);
      },
    });
    reset();
  };

  const handleCategoryChange = (slug: string) => {
    const selected = data?.find((c: TCategory) => c?.slug === slug);
    if (selected) {
      setValue("category", selected.name);
      setValue("category_slug", selected.slug);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10 p-6">
      <CardContent>
        <h2 className="text-2xl font-semibold mb-6">Add New Post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label>Title</Label>
            <Input
              {...register("title", { required: true })}
              placeholder="Post title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">Title is required</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Author Name</Label>
              <Input
                {...register("author.name", { required: true })}
                placeholder="Author name"
              />
            </div>
            <div>
              <Label>Author Bio</Label>
              <Input
                {...register("author.bio", { required: true })}
                placeholder="Short bio"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Category</Label>
              <Select onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {isLoading && isLoading
                    ? "Loading"
                    : data &&
                      data.map((cat: TCategory) => (
                        <SelectItem key={cat.slug} value={cat.slug}>
                          {cat.name}
                        </SelectItem>
                      ))}
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-red-500 text-sm">Category is required</p>
              )}
            </div>

            <div>
              <Label>Category Slug</Label>
              <Input
                {...register("category_slug", { required: true })}
                readOnly
                placeholder="category-slug"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Publish Date</Label>
              <Input
                type="date"
                {...register("publishDate", { required: true })}
              />
            </div>
            <div>
              <Label>Read Time</Label>
              <Input
                {...register("readTime", { required: true })}
                placeholder="e.g., 5 min read"
              />
            </div>
          </div>

          <div>
            <Label>Tags (comma separated)</Label>
            <Input
              {...register("tags", { required: true })}
              placeholder="tag1, tag2"
              onBlur={(e) => (e.target.value = e.target.value.trim())}
            />
          </div>

          <div>
            <Label>Content</Label>
            <Textarea
              rows={10}
              {...register("content", { required: true })}
              placeholder={`Write your blog content here...\n\nYou can also embed images like this:\n<img src="https://example.com/image.jpg" alt="Description" />`}
            />
            {errors.content && (
              <p className="text-red-500 text-sm">Content is required</p>
            )}
          </div>

          <Button type="submit" className="w-full">
          {isPending ? "Add Post..." : "Add Post"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddPost;
