import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function Lists() {
  const todos = useSelector((state) => state.reducer.todos);

  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
