import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import styled from "styled-components";

export default function Lists() {
  const todos = useSelector((state) => state.reducer.todos);
  const completedTodos = todos.filter((todo) => todo.isDone === true);
  const workingTodos = todos.filter((todo) => todo.isDone !== true);

  return (
    <ListContainer>
      <RenderTodoList
        rendertitle="Working"
        todos={workingTodos}
      ></RenderTodoList>
      <RenderTodoList
        rendertitle="Complete"
        todos={completedTodos}
      ></RenderTodoList>
    </ListContainer>
  );
}

const RenderTodoList = ({ todos, rendertitle }) => {
  return (
    <div>
      <h2>{rendertitle}</h2>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

const ListContainer = styled.div``;
