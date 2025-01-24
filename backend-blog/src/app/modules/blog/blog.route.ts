import { Router } from "express";
import { blogControllers } from "./blog.controller";

const router = Router();

// Define a route

 router.post("/create", blogControllers.createBlog);
 router.get("/", blogControllers.getAllBlogs);
 router.get("/:id", blogControllers.getBlogById);
 router.put("/:id", blogControllers.updateBlog);
 router.delete("/:id", blogControllers.deleteBlog);

export const blogRoutes = router;
