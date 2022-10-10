import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail";
import TodoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="detail" element={<Detail />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
