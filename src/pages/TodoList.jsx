import React from "react";
import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Lists from "../components/Lists";

export default function TodoList() {
  return (
    <Layout>
      <Header />
      <AddTodo />
      <Lists />
    </Layout>
  );
}
