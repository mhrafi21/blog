
import useCategory from "@/hooks/useCategory";
import React from "react";
import { NavLink } from "react-router";

const Category: React.FC = () => {

   const {mutate: data} = useCategory();
console.log(data)
  return (
    <div className="sticky bg-gray-300 ">
      <div>
        <h2>Category</h2>
        <NavLink to={"/category/javascript"}>JavaScript</NavLink>
      </div>
    </div>
  );
};

export default Category;
