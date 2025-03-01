import { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodos,
  toggleTodo,
  updateTodo,
} from "../../services/todoService";
import TodoInput from "../../components/todoInput/TodoInput";
import TodoList from "../../components/todoList/TodoList";
import styles from "./Home.module.css";

interface Todo {
  _id: string;
  title: string;
  description: string;
  isDone: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await getTodos();
    console.log("Fetched Todos:", data);
    setTodos(data);
  };

  const handleAdd = async (title: string, description: string) => {
    if (title.trim() && description.trim()) {
      await createTodo(title, description);
      loadTodos();
    }
  };

  const handleToggle = async (id: string) => {
    const updatedTodo = await toggleTodo(id);
    setTodos((prev) =>
      prev.map((todo) => (todo._id === id ? updatedTodo : todo))
    );
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };
  const handleUpdate = async (
    id: string,
    title: string,
    description: string
  ) => {
    const updatedTodo = await updateTodo(id, title, description);
    setTodos((prev) =>
      prev.map((todo) => (todo._id === id ? updatedTodo : todo))
    );
  };

  return (
    <div className={styles.container}>
      <h1>فهرست کارهای روزانه</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
      <footer className={styles.footer}>
        <p>تمامی حقوق محفوظ است</p>
      </footer>
    </div>
  );
};

export default Home;
