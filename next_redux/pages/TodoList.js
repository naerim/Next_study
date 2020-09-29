import React, { useCallback, useState } from "react";
import Layout from "../components/Layout";
import { insert, check, remove } from "../reducers/todos";
import { useDispatch, useSelector } from "react-redux";

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
  const [todoInput, setTodoInput] = useState("");
  const { todos } = useSelector(({ todos }) => ({
    todos: todos.todos,
  }));

  const dispatch = useDispatch();
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onCheck = useCallback((id) => dispatch(check(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  // 등록 버튼을 눌렀을 때, todos배열에 추가되고 input이 초기화됨
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(todoInput);
    setTodoInput("");
  };

  const onChange = (e) => setTodoInput(e.target.value);

  return (
    <Layout>
      <div>
        <input value={todoInput} onChange={onChange} />
        <button type="button " onClick={onSubmit}>
          등록
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onCheck={onCheck}
            onRemove={onRemove}
          />
        ))}
      </div>
    </Layout>
  );
};

export default TodoList;
