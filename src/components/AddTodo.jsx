import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

export default function AddTodo() {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.length === 0 || content.length === 0) return;
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
      <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          name="title"
          onChange={onChangeHandler}
          value={title}
        ></input>
        <label htmlFor="content">내용</label>
        <input
          id="content"
          name="content"
          onChange={onChangeHandler}
          value={content}
        ></input>
        <button>추가하기</button>
      </form>
    </section>
  );
}
