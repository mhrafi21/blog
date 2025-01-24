export type TAuthor = {
    name: string;
    bio: string;
}

export type TPost = {
    title: string;
    slug: string;
    author: TAuthor;
    category: string;
    category_slug: string;
    publishDate: string;
    tags: string[];
    content: string;
    readTime: string;
}