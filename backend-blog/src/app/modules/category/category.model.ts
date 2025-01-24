import mongoose from "mongoose";
import { CType } from "./category.interface";

const categorySchema = new mongoose.Schema<CType>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
})

const Category = mongoose.model<CType>("Category", categorySchema);

export { Category }