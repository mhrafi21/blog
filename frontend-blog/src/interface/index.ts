export type TAuthor = {

    name: string;
    bio: string;
    avatar?: string
};

export type TPost = {
    title: string;
    slug: string;
    author: TAuthor;
    category: string;
    category_slug: string;
    publishDate: string;
    tags: string[] | string;
    content: string;
    readTime: string;
};

export type TCategory = {
    _id?: string;
    name: string;
    slug: string;
  };