import React from 'react';
import { useTodo } from '../../context/TodosContext.js';
import { completeTodo } from '../../services/todos.js';

export default function TodosList() {
  const { todos, setTodos } = useTodo();

  if (!todos) return null;

  const handleChange = async (id) => {
    try {
      const updatedTodo = await completeTodo();
      setTodos((prevTodos) =>
        prevTodos.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo))
      );
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      {todos.map(({ id, description }) => (
        <div {...{ id, description }} onClick={() => handleChange({ id })} key={id}>
          {description}
        </div>
      ))}
    </div>
  );
}
