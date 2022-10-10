import React from "react";

export default function AddTodo() {
  return (
    <section>
      <form action="">
        <label htmlFor="title">제목</label>
        <input id="title"></input>
        <label htmlFor="content">내용</label>
        <input id="content"></input>
        <button>추가하기</button>
      </form>
    </section>
  );
}
