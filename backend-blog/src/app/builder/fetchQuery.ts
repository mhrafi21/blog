import Blog from "../modules/blog/blog.model";

// 🔹 Fetches data with pagination & sorting
export const fetchCourses = async (
    query: Record<string, any>,
    skip: number,
    limit: number,
) => {
    const totalData = await Blog.countDocuments(query);
    const data = await Blog.find(query)
        .skip(skip)
        .limit(limit)

    return { totalData, data };
};