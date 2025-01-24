import mongoose from "mongoose";
import { TAuthor, TPost } from "./blog.interface";

const authorSchema = new mongoose.Schema<TAuthor>({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true
    }
})

const blogSchema = new mongoose.Schema<TPost>({
    title: {
        type: String,
        required: true,
        unique: true

    },
    slug: {
        type: String,
        required: true,

    },
    author: authorSchema,
    category: {
        type: String,
        required: true,
    },
    category_slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    tags:
    {
        type: [String],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    readTime: {
        type: String,
        required: true
    }
})

const Blog = mongoose.model<TPost>("Blog", blogSchema);

export default Blog;