import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogServices } from "./blog.services";
import { TPost } from "./blog.interface";
import { generateSlug } from "../../utils/generateSlug";

const createBlog = catchAsync(async (req, res) => {
    const result = await blogServices.createBlogIntoDB({ slug: generateSlug(req.body?.title), ...req.body } as TPost);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Blog created successfully",
        data: result,
    })
})

const getAllBlogs = catchAsync(async (req, res) => {

    const result = await blogServices.getAllBlogFromDB(req.query as unknown as { page: number; limit: number; search: string });
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Blog retried successfully",
        data: result,
    })
})

const getBlogById = catchAsync(async (req, res) => {

    const result = await blogServices.getBlogByIdFromDB(req.params.slug as string);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Single blog retried successfully",
        data: result,
    })
})

const getCategory = catchAsync(async (req, res) => {
    const { category_slug } = req.params;
    console.log(category_slug);
    const result = await blogServices.getCategoryFromDB(category_slug as string);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Category retrieve Successfully",
        data: result

    })
})

const updateBlog = catchAsync(async (req, res) => {
    const result = await blogServices.updateBlogByIdIntoDB(req.params.id as string, req.body as TPost);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog updated successfully",
        data: result,
    })
})

const deleteBlog = catchAsync(async (req, res) => {
    const result = await blogServices.deleteBlogByIdFromDB(req.params.id as string);
    sendResponse(res, {
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
    getCategory,
    updateBlog,
    deleteBlog,
}