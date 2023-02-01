import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { getTodos } from '../services/todos.js';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchItems();
  }, []);
  return <TodosContext.Provider value={{ todos, setTodos }}>{children}</TodosContext.Provider>;
};

export { TodosContext, TodosProvider };
