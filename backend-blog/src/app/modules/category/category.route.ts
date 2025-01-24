import { categoryControllers } from "./category.controller";

import express from "express"
const router = express.Router();

// Define a route
router.get("/", categoryControllers.createCategory);


 export const categoryRoutes = router;