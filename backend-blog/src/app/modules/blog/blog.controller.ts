import catchAsync from "../../utils/catchAsync";
import { blogServices } from "./blog.services";

const createBlog = catchAsync(async() => {
    const result = await blogServices.createBlogIntoDB();
    return result;
})

const getAllBlogs = catchAsync(async() => {
    const result = await blogServices.getAllBlogsFromDB();
    return result;
})

const getBlogById = catchAsync(async(req) => {
    const result = await blogServices.getBlogByIdFromDB(req.params.id);
    return result;
})

const updateBlog = catchAsync(async(req) => {
    const result = await blogServices.updateBlogIntoDB(req.params.id, req.body);
    return result;
})

const deleteBlog = catchAsync(async(req) => {
    const result = await blogServices.deleteBlogFromDB(req.params.id);
    return result;
})

export const blogControllers = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
 
}