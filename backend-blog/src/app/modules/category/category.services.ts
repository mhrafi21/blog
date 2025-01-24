import { CType } from "./category.interface"
import { Category } from "./category.model"

const createCategoryIntoDB = async(payload: CType) => {
    const result = await Category.create(payload);
    return result;
}

const getCategoryFromDB =async () => {
    const result = await Category.find();
    return result;
}

const updateCategoryIntoDB = async (id:string, payload: Partial<CType>) => {
    const result = await Category.findByIdAndUpdate(id, payload, { new: true })
    return result;
}

const deleteCategoryFromDB = async (id:string) => {
    const result = await Category.findByIdAndDelete(id)
    return result;
}

export const categoryServices = {
    createCategoryIntoDB,
    getCategoryFromDB,
    updateCategoryIntoDB,
    deleteCategoryFromDB,
}