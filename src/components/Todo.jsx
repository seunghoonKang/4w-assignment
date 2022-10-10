import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, isDoneTodo } from "../redux/modules/todos";
import styled from "styled-components";

export default function Todo({ todo }) {
  const { id, title, content, isDone } = todo;
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(deleteTodo(id));
  };
  const onIsDone = () => {
    dispatch(isDoneTodo(id));
  };

  return (
    <div>
      <button>상세보기</button>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        <button onClick={onRemove}>삭제하기</button>

        {isDone ? (
          <button onClick={onIsDone}>취소</button>
        ) : (
          <button onClick={onIsDone}>완료</button>
        )}
      </div>
    </div>
  );
}
