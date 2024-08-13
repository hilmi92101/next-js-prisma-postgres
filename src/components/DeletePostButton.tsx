'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import { DeletePostButtonProps } from '@/lib/interfaces';

const DeletePostButton: React.FC<DeletePostButtonProps> = ({ postId }) => {
    const router = useRouter()

    const handleClick = async () => {
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE',
            })
            router.refresh()
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <button
            onClick={handleClick}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
            Delete Post
        </button>
    )
}

export default DeletePostButton
