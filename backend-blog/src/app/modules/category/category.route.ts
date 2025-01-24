import { categoryControllers } from "./category.controller";

import express from "express"
const router = express.Router();

// Define a route
router.post("/create", categoryControllers.createCategory);
router.delete("/create", categoryControllers.de);


 export const categoryRoutes = router;