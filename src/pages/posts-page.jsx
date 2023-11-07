import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  posts = await posts.json()
  return {
    posts
  }
}
const PostsPage = () => {
  const {posts} = useLoaderData();
  return (
    <>
      <h1 className="text-xl font-bold">Posts</h1>
      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <li key={post.id} className="flex gap-4">
            <Link to={`/posts/${post.id}`} className="underline text-blue-800">{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostsPage;