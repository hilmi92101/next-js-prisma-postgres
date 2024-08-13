import type { TPost } from '@/lib/types';

export default function Post({ id, title, content, authorName }: Omit<TPost, 'published' | 'author'> & { authorName: string | null | undefined }) {
    return (
        <div className="border border-white p-4 my-2 bg-gray-800 text-white rounded-md shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{authorName}</h3>
            <h4 className="text-md font-medium mb-1">{title}</h4>
            <p className="text-sm">{content}</p>
        </div>
    );
}