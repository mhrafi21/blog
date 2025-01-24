import { HttpStatusCode } from "axios";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CType } from "./category.interface";
import { categoryServices } from "./category.services"

const createCategory = catchAsync(async (req,res) => {
    const result = await categoryServices.createCategoryIntoDB(req.body as CType );
    sendResponse(res,{
        statusCode: HttpStatusCode.Created,
        success: true,
        message: "Category created successfully",
        data: result,
    })
})

const getCategory = catchAsync(async (req,res) => {
    const result = await categoryServices.getCategoryFromDB();
    sendResponse(res,{
        statusCode: HttpStatusCode.Created,
        success: true,
        message: "Category created successfully",
        data: result,
    })
})

const updateCategory = catchAsync(async(req,res)=>{
    const result = await categoryServices.updateCategoryIntoDB(req.params.id as string, req.body);
    sendResponse(res,{
        statusCode: HttpStatusCode.Ok,
        success: true,
        message: "Category updated successfully",
        data: result,
    })

})

const deleteCategory = catchAsync(async(req,res) => {
    const result = await categoryServices.deleteCategoryFromDB(req.params.id as string);
    sendResponse(res,{
        statusCode: HttpStatusCode.NoContent,
        success: true,
        message: "Category deleted successfully",
        data: result,
    })
})

 export const categoryControllers = {
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
}

