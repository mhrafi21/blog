import { PostCard } from "@/components/blog";
import { TPost } from "@/interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

const SearchBlog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q');

  const { data, isLoading, isError, error } = useQuery({
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
    setSearchParams({q: search as string})
  },[search])

  return (
    <div>
        {isLoading && "Loading..."}
      { data && data?.map((blog: any) => (
        <PostCard post={blog} />
      ))}
    </div>
  );
};

export default SearchBlog;
