import { Input } from "@/components/ui/input";
import { useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['blog-details', slug],
        queryFn: async () => {
          const res = await axios.get(
            `http://localhost:5000/api/blogs/${slug}`
          );
          return res?.data?.data as TPost;
        },
        enabled: !!slug,
      });
    if (search.trim()) {
      // Handle search logic
      
      console.log("Searching for:", search);
    }
  };

  return (
    <div className="space-y-2">
      <Input
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};
