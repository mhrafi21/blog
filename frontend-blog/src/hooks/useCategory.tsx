import { useQuery } from '@tanstack/react-query';
import axios from "axios";



const useCategory = () => {

  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/api/category");
      return response?.data?.data;
    },
  });

    return {data, error,isLoading}
  
};

export default useCategory;
