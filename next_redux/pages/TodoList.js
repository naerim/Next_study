import React, { useCallback, useState } from "react";
import Layout from "../components/Layout";

const TodoItem = ({ todo, onCheck, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onCheck(todo.id)}
        check={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const TodoList = () => {
  return (
    <Layout>
      <div>
        <input value="input" />
        <button type="button">등록</button>
      </div>
    </Layout>
  );
};

export default TodoList;
