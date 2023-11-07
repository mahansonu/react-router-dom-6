import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  let comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  comments = await comments.json()
  return {
    comments
  }
}

const CommentsPage = () => {
  const {comments} = useLoaderData();
  return (
    <>
      <h1 className="text-xl font-bold">Comments</h1>
      <ul className="flex flex-col gap-2">
        { comments.map((comment) => (
          <li key={comment.id} className="flex gap-4">
            <Link to={`/comments/${comment.id}`} className="underline text-blue-800">{comment.name}</Link>
            <span>{comment.body}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CommentsPage;