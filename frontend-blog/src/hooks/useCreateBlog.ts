// hooks/useCreatePost.ts
import baseApi from "@/api/baseApi";
import { TPost } from "@/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

 const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPost: TPost) => {
      const response = await baseApi.post("/api/blogs/create", newPost);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate posts list or show success
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

export default useCreateBlog;