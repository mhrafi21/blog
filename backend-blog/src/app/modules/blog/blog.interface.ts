export type TAuthor = {
    name: string;
    bio: string;
}

export type TPost = {
    _id: string;
    title: string;
    slug: string;
    author: TAuthor;
    category: string;
    publishDate: string;
    tags: [string]
    content: string;
    readTime: string;
}