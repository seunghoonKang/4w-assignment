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
      <GotoDetail
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        // id={id}
      >
        상세보기
      </GotoDetail>
      <h2>{title}</h2>
      <p>{content}</p>
      <ButtonContainer>
        <DeleteBtn onClick={onRemove}>삭제하기</DeleteBtn>

        {isDone ? (
          <ToggleBtn
            bgColor="#d48788"
            hoverBgColor="#e41c20"
            onClick={onIsDone}
          >
            취소
          </ToggleBtn>
        ) : (
          <ToggleBtn
            bgColor="#92abc5"
            hoverBgColor="#4189d7"
            onClick={onIsDone}
          >
            완료
          </ToggleBtn>
        )}
      </ButtonContainer>
    </TodoContainer>
  );
}

const TodoContainer = styled.div`
  width: 270px;
  /* height: 200px; */
  border-radius: 20px;
  background: #dedede;
  box-shadow: 20px 20px 60px #bdbdbd, -20px -20px 60px #ffffff;
  padding: 10px;
  word-break: break-all;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const GotoDetail = styled.button`
  height: 30px;
  border: none;
  border-radius: 10px;
  background: #a5bed9;

  color: #fff;
  cursor: pointer;

  &:hover {
    background: #3282d8;
    transition: 0.2s ease-in;
  }
`;

const DeleteBtn = styled.button`
  border: none;
  border-radius: 10px;
  background: #bfb9b9;
  width: 80px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #da43aa;
    transition: 0.2s ease-in;
  }
`;

const ToggleBtn = styled.button`
  border: none;
  border-radius: 10px;
  background: ${(props) => props.bgColor};
  width: 80px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.hoverBgColor};
    transition: 0.2s ease-in;
  }
`;
