import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogServices } from "./blog.services";
import { TPost } from "./blog.interface";

const createBlog = catchAsync(async(req,res) => {
    const result = await blogServices.createBlogIntoDB(req.body as TPost);
   sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Blog created successfully",
    data: result,
   })
})

const getAllBlogs = catchAsync(async(req,res) => {
    const result = await blogServices.getAllBlogFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Blog retried successfully",
        data: result,
       })
})

const getBlogById = catchAsync(async(req,res) => {
    const result = await blogServices.getBlogByIdFromDB(req.params.id as string);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Single blog retried successfully",
        data: result,
       })
})

const updateBlog = catchAsync(async(req,res) => {
    const result = await blogServices.updateBlogByIdIntoDB(req.params.id as string, req.body as TPost);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog updated successfully",
        data: result,
    })
})

const deleteBlog = catchAsync(async(req,res) => {
    const result = await blogServices.deleteBlogByIdFromDB(req.params.id as string);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog deleted successfully",
        data: result,
    })
})

export const blogControllers = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
 
}