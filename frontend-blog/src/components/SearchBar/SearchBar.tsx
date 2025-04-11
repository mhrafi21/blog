import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
    const navigate = useNavigate();
  const handleSearch = () => {
   
    if (search.trim()) {
      // Handle search logic
      navigate(`/search?q=${search}`)
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
