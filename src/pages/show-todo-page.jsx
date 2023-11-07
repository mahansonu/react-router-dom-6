import React from "react";
import { Link, useParams } from "react-router-dom";

const ShowTodoPage = () => {
  const {todoId} = useParams()
  return (
    <>
      <p>TodoId from url is: {todoId}</p>
      <Link to="/todos" className="underline text-blue-800">Go to Todo Page</Link>
    </>
  )
}

export default ShowTodoPage;