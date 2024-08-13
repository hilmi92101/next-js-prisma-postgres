import Link from 'next/link';
import prisma from '@/lib/prisma'

import styles from './page.module.css'

import Post from '@/components/Post';
import type { TPost } from '@/lib/types';

async function getPosts(): Promise<TPost[]> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  })
  return posts;
}
export default async function Home() {

  const posts = await getPosts();

  return (
    <main className={styles.main}>
      <h1>Feed</h1>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map(({ id, title, content, author }) => (
          <Post
            key={id}
            id={id}
            title={title}
            content={content}
            authorName={author?.name}
          />
        ))
      )}

      {/* {posts.length === 0 && <p>No posts available.</p>}
      {posts.length > 0 && posts.map(({ id, title, content, author }) => (
        <Post
          key={id}
          id={id}
          title={title}
          content={content}
          authorName={author?.name}
        />
      ))} */}
    </main>
  )
}