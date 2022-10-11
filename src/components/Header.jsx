import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <Headerdiv>
      <span>My Todo List With Redux</span>
      <span>React</span>
    </Headerdiv>
  );
}

const Headerdiv = styled.div`
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid #ddd;

  margin-top: 20px;
  padding: 0 20px;
`;
