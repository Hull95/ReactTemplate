import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Todo = ({ todo }) => {
  return <div className="todo">{todo.text}</div>;
};

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
}

function ListWithData() {
  const [todos, setToods] = useState([
    {
      text: "Lear about React",
      isCompleted: false,
    },
    {
      text: "Lear about React",
      isCompleted: false,
    },
    {
      text: "Lear about React",
      isCompleted: false,
    },
    {
      text: "Lear about React",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setToods(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default ListWithData;
