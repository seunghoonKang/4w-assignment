import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Detail() {
  const todos = useSelector((state) => state.reducer.todos);
  const param = useParams();
  const navigate = useNavigate();

  const DetailTodo = todos.find((todo) => todo.id === +param.id);
  const { id, title, content } = DetailTodo;

  return (
    <div>
      <p>{id}</p>
      <h2>{title}</h2>
      <div>{content}</div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}
