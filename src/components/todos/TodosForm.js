import React, { useState } from 'react';
import { useTodo } from '../../context/TodosContext.js';
import { createTodo } from '../../services/todos.js';

export default function TodosForm() {
  const [description, setDesc] = useState('');
  const { setTodos } = useTodo();
  const handleNewTodo = async () => {
    try {
      const todo = await createTodo(description);
      setTodos((prev) => [...prev, todo]);
      setDesc('');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="new todo"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={handleNewTodo}></button>
    </div>
  );
}
