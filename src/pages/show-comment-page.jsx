import React from "react";
import { Link, useParams } from "react-router-dom";

const ShowCommentPage = () => {
  const {commentId} = useParams();
  return (
    <>
      <h1 className="text-xl font-bold">Show Comment Page.</h1>
      <span>URL comment id: <strong>{commentId}</strong></span>
      <Link to="/comments" className="underline text-blue-800">Go to Comments Page</Link>
    </>
  )
}

export default ShowCommentPage;