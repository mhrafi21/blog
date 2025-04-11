import { buildQuery } from "../../builder/buildQuery";
import { fetchCourses } from "../../builder/fetchQuery";
import { TPost } from "./blog.interface"
import Blog from "./blog.model"

const createBlogIntoDB = async (payload: TPost) => {
    const result = await Blog.create(payload);
    return result;
}

const getAllBlogFromDB = async (payload: {page: number, limit: number, search: string}) => {
    const { page, limit, search } = payload;
  const pageNum = Math.max(Number(page) || 1, 1);
  const limitPage = Math.max(Number(limit) || 10, 1);
  const skip = (pageNum - 1) * limitPage;
  // 🔹 Builds query dynamically based on search & category
  const query = buildQuery({ search });
  // Fetch data
   const result = await fetchCourses(query, skip, limitPage);
   return result ;

}

const getBlogByIdFromDB = async (slug: string) => {
    const result = await Blog.findOne({ slug });
    return result;
}
const getCategoryFromDB = async (category_slug: string) => {
    const result = await Blog.find({ category_slug });
    return result;
}

const updateBlogByIdIntoDB = async (id: string, payload: TPost) => {
    const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
    return result;
}

const deleteBlogByIdFromDB = async (id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    return result;

}

export const blogServices = {
    createBlogIntoDB,
    getAllBlogFromDB,
    getBlogByIdFromDB,
    getCategoryFromDB,
    updateBlogByIdIntoDB,
    deleteBlogByIdFromDB,
}