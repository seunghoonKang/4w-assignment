import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { findTodo } from "../redux/modules/todos";

export default function Detail() {
  //현재 되는 코드..
  const todos = useSelector((state) => state.reducer.todos);
  console.log(todos);
  const param = useParams();
  const DetailTodo = todos.find((todo) => todo.id === +param.id);
  const { id, title, content } = DetailTodo;

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(findTodo(+param.id));
  // }, []);

  // const todos = useSelector((state) => state.reducer.todos);
  // const { id, title, content } = todos;
  // console.log(todos);

  return (
    <DetailDiv>
      <IdPtag>id: {id}</IdPtag>
      <label>제목</label>
      <TitleDiv>
        <h2>{title}</h2>
      </TitleDiv>
      <label>내용</label>
      <ContentDiv>{content}</ContentDiv>
      <BackBtn
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        뒤로가기
      </BackBtn>
    </DetailDiv>
  );
}

const DetailDiv = styled.div`
  width: 30rem;
  /* height: 30rem; */
  margin: auto;
  background: white;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  border-radius: 20px;
  background: #dedede;
  box-shadow: 20px 20px 60px #bdbdbd, -20px -20px 60px #ffffff;
  padding: 30px;
  gap: 10px;
`;

const IdPtag = styled.p`
  height: 20px;
  width: 100px;
  background: #efefef;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const TitleDiv = styled.div`
  height: 50px;
  background: #efefef;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ContentDiv = styled.div`
  height: 200px;
  background: #efefef;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const BackBtn = styled.button`
  height: 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #da43aa;
    color: white;
    transition: 0.2s ease-in;
  }
`;
