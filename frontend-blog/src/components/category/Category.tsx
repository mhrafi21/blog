import React from "react";
import { NavLink } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import useCategory from "@/hooks/useCategory";
import { CType } from "@/interface";


const Category: React.FC = () => {

  const {data, error,isLoading} = useCategory();

  if (error) {
    console.error("Error fetching categories:", error);
  }

  return (
    <div className="sticky w-full">


      {isLoading ? (
        <div className="space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
        </div>
      ) : (
        <div className="">
          {data?.map((cate: CType) => (
            <NavLink
              key={cate.slug}
              to={`/category/${cate.slug}`}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md transition-colors  font-medium
                ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`
              }
            >
              {cate.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
