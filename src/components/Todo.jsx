import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, isDoneTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Todo({ todo }) {
  const navigate = useNavigate();
  const { id, title, content, isDone } = todo;
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(deleteTodo(id));
  };
  const onIsDone = () => {
    dispatch(isDoneTodo(id));
  };

  return (
    <TodoContainer>
      <button
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
      >
        상세보기
      </button>
      <h2>{title}</h2>
      <p>{content}</p>
      <ButtonContainer>
        <button onClick={onRemove}>삭제하기</button>

        {isDone ? (
          <button onClick={onIsDone}>취소</button>
        ) : (
          <button onClick={onIsDone}>완료</button>
        )}
      </ButtonContainer>
    </TodoContainer>
  );
}

const TodoContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid tomato;
  border-radius: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20%;
`;
