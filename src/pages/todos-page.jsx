import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
  let todos = await fetch("https://jsonplaceholder.typicode.com/todos");
  todos = await todos.json();
  return {todos}
}
const ToDosPage = () => {
  const {todos} = useLoaderData();
  return (
    <>
      <h1 className="text-xl font-bold">Todos List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-4">
            <span>Completed?: {todo.completed ? 'Yes' : 'No'}</span>
            <span>UserID: {todo.userId}</span>
            <Link to={`/todos/${todo.id}`} className="underline text-blue-800"> {todo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ToDosPage;