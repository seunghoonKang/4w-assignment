import React from "react";
import styled from "styled-components";

export default function Todo({ todo }) {
  const { title, content, isDone } = todo;
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        <button>삭제하기</button>

        {isDone ? <button>취소</button> : <button>완료</button>}
      </div>
    </div>
  );
}
