import { categoryServices } from "./category.services"

const createCategory = async () => {
    const result = await categoryServices.createCategoryIntoDB();
    return result;
}

 export const categoryControllers = {
    createCategory,
}

