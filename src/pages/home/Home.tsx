import { useQuery, useQueryClient } from "@tanstack/react-query";
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

const Home = () => {
  const queryClient = useQueryClient();
  const {
    data: todos = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const handleAdd = async (title: string, description: string) => {
    if (title.trim() && description.trim()) {
      await createTodo(title, description);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  };

  const handleToggle = async (id: string) => {
    await toggleTodo(id);
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  };

  const handleUpdate = async (
    id: string,
    title: string,
    description: string
  ) => {
    await updateTodo(id, title, description);
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  };

  return (
    <div className={styles.container}>
      <h1>فهرست کارهای روزانه</h1>
      <TodoInput onAdd={handleAdd} />
      {isLoading && <div>در حال بارگیری اطلاعات...</div>}
      {isError && <div>خطا در دریافت اطلاعات!</div>}
      {!isLoading && !isError && (
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      )}
      <footer className={styles.footer}>
        <p>تمامی حقوق محفوظ است</p>
      </footer>
    </div>
  );
};

export default Home;
