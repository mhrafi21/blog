import { Router } from "express";
import { blogControllers } from "./blog.controller";

const router = Router();

router.get("/", blogControllers.createBlog);

export const blogRoutes = router;
