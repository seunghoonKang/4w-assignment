import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

export default function AddTodo() {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || content === "") return;
    dispatch(addTodo(inputs));
    setInputs({
      title: "",
      content: "",
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <section>
      <Forms action="" onSubmit={onSubmitHandler}>
        <InputDiv>
          <FormLabel htmlFor="title">제목</FormLabel>
          <InputItem
            type="text"
            maxLength="20"
            placeholder="제목을 입력하세요 (최대 20자)"
            id="title"
            name="title"
            onChange={onChangeHandler}
            value={title}
          ></InputItem>
        </InputDiv>
        <InputDiv>
          <FormLabel htmlFor="content">내용</FormLabel>
          <InputItem
            type="text"
            maxLength="50"
            placeholder="내용을 입력하세요 (최대 50자)"
            id="content"
            name="content"
            onChange={onChangeHandler}
            value={content}
          ></InputItem>
        </InputDiv>
        <AddDIv>
          <AddTodoBtn>추가하기</AddTodoBtn>
        </AddDIv>
      </Forms>
    </section>
  );
}

const FormLabel = styled.label`
  margin: 20px;
`;

const Forms = styled.form`
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const InputDiv = styled.div`
  flex: 1;
`;

const InputItem = styled.input`
  min-width: 23rem;
  height: 48px;
  border: none;

  border-radius: 20px;
  background: #dedede;
  box-shadow: 20px 20px 80px #bdbdbd, -20px -20px 60px #ffffff;
  text-align: center;
`;

const AddDIv = styled.div`
  flex: 0.2;
`;

const AddTodoBtn = styled.button`
  height: 48px;
  min-width: 5rem;
  border: none;
  border-radius: 10px;
  background: #a5bed9;

  color: #fff;
  cursor: pointer;

  &:hover {
    background: #386391;
    transition: 0.2s ease-in;
  }
`;
