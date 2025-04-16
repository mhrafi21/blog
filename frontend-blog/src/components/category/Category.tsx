import React from "react";
import { NavLink } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import useCategory from "@/hooks/useCategory";
import { CType } from "@/interface";
import { Card } from "../ui/card";


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
        <Card>
          <div className="h-screen">
          {data?.map((cate: CType) => (
            <NavLink
              key={cate.slug}
              to={`/category/${cate.slug}`}
              className={({ isActive }) =>
                `block px-3 py-3 uppercase border-b transition-colors text-sm
                ${isActive ? "bg-primary rounded-lg text-primary-foreground" : "hover:bg-muted"}`
              }
            >
              {cate.name}
            </NavLink>
          ))}
        </div>
        </Card>
      )}
    </div>
  );
};

export default Category;
