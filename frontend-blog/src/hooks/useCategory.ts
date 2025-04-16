import baseApi from "@/api/baseApi";
import { useQuery } from "@tanstack/react-query";
const useCategory = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await baseApi.get("/api/category");
      return response?.data?.data;
    },
  });

  return { data, error, isLoading };
};

export default useCategory;
