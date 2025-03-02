import { useState } from "react";
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
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import { Snackbar, Alert } from "@mui/material";

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

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleAdd = async (title: string, description: string) => {
    if (title.trim() && description.trim()) {
      try {
        await createTodo(title, description);
        queryClient.invalidateQueries({ queryKey: ["todos"] });
        setSuccessMessage("با موفقیت اضافه شد");
        setErrorMessage(null);
      } catch {
        setErrorMessage("اطلاعات را درست وارد کنید");
        setSuccessMessage(null);
      }
    } else {
      setErrorMessage("لطفاً عنوان و توضیحات را وارد کنید");
      setSuccessMessage(null);
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
    <div>
      <Navbar />
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

        <Snackbar
          open={Boolean(successMessage)}
          autoHideDuration={3000}
          onClose={() => setSuccessMessage(null)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={() => setSuccessMessage(null)} severity="success">
            {successMessage}
          </Alert>
        </Snackbar>

        <Snackbar
          open={Boolean(errorMessage)}
          autoHideDuration={3000}
          onClose={() => setErrorMessage(null)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={() => setErrorMessage(null)} severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>

        <footer className={styles.footer}>
          <p>تمامی حقوق محفوظ است</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
