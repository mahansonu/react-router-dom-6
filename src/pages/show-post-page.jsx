import React from "react";
import { useParams, Link } from "react-router-dom";

const ShowPostPage = () => {
  const { postId} = useParams();
  return (
    <>
      <h1 className="text-xl font-bold">Show Post</h1>
      <span>Url post id is: {postId}</span>
      <Link to="/posts" className="underline text-blue-800">Go to Posts Page</Link>
    </>
  )
}

export default ShowPostPage;