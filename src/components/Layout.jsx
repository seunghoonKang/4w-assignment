import React from "react";
import styled from "styled-components";

export default function Layout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

const LayoutContainer = styled.div`
  margin: auto;
  box-sizing: border-box;
  max-width: 1200px;
  min-width: 800px;
`;
