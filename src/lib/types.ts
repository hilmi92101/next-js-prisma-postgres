export type TPost = {
    id: number | string;
    title: string;
    content: string | null;
    published: boolean;
    author: {
        name: string | null;
    } | null;
};