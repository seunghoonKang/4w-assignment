import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import styled from "styled-components";

export default function Lists() {
  const todos = useSelector((state) => state.reducer.todos);
  console.log(todos);
  const completedTodos = todos.filter((todo) => todo.isDone === true);
  const workingTodos = todos.filter((todo) => todo.isDone !== true);

  return (
    <ListContainer>
      <ListSecondContainer>
        <H2Toggle wordColor="red">Working🔥</H2Toggle>

        <RenderTodoList
          rendertitle="Working"
          todos={workingTodos}
        ></RenderTodoList>
      </ListSecondContainer>

      <ListSecondContainer>
        <H2Toggle wordColor="blue">Completed😎</H2Toggle>

        <RenderTodoList
          rendertitle="Complete"
          todos={completedTodos}
        ></RenderTodoList>
      </ListSecondContainer>
    </ListContainer>
  );
}

const RenderTodoList = ({ todos }) => {
  return (
    <RenderListContainer>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo todo={todo} />
          </div>
        );
      })}
    </RenderListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
`;

const ListSecondContainer = styled.div`
  flex: 1;
`;

const RenderListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const H2Toggle = styled.h2`
  color: ${(props) => props.wordColor};
`;
