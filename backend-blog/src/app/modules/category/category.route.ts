import { categoryControllers } from "./category.controller";

import express from "express"
const router = express.Router();

// Define a route
router.post("/create", categoryControllers.createCategory);
router.get("/", categoryControllers.getCategory);
router.put("/:id", categoryControllers.updateCategory)
router.delete("/:id", categoryControllers.deleteCategory);


export const categoryRoutes = router;