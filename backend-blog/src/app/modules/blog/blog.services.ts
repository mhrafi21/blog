import { TPost } from "./blog.interface"
import Blog from "./blog.model"

const createBlogIntoDB =  async(payload: TPost) => {
    const result = await Blog.create(payload);
    return result;
}

const getAllBlogFromDB = async() => {
    const result = await Blog.find();
    return result;
}

const getBlogByIdFromDB = async(id:string) => {
    const result = await Blog.findById(id);
    return result;
}

const updateBlogByIdIntoDB = async(id: string, payload: TPost) => {
    const result = await Blog.findByIdAndUpdate(id, payload, {new: true});
    return result;
}

const deleteBlogByIdFromDB = async(id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    return result;

}



export const blogServices = {
    createBlogIntoDB,
    getAllBlogFromDB,
    getBlogByIdFromDB,
    updateBlogByIdIntoDB,
    deleteBlogByIdFromDB,
}