import React from "react";
import { NavLink } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import useCategory from "@/hooks/useCategory";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { TCategory } from "@/interface";

const Category: React.FC = () => {
  const { data, error, isLoading } = useCategory();

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
        <Card className="p-4 h-screen flex flex-col ">
          
          <CardHeader className="pt-0">
            <CardTitle className="text-center ">
              Browse Category
            </CardTitle>
          </CardHeader>

          <div className="overflow-y-auto grid gap-3 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
            {data?.map((cate: TCategory) => (
              <NavLink
                key={cate.slug}
                to={`/category/${cate.slug}`}
                className={({ isActive }) =>
                  `block px-4 py-3 border rounded-xl text-sm font-medium shadow-sm transition-all duration-300
          ${
            isActive
              ? "bg-primary text-primary-foreground border-primary"
              : " hover:bg-muted hover:shadow-md  border-gray-200"
          }`
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
