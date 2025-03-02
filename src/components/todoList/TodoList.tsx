import { TodoOutput } from "../../api/todo";
import LabelInput from "../LabelInput/LabelInput";
import styles from "./TodoList.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface TodoListProps {
  todos: TodoOutput[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string, description: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete, onUpdate }: TodoListProps) => {
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [updatedTitle, setUpdatedTitle] = useState<string>("");
  const [updatedDescription, setUpdatedDescription] = useState<string>("");

  const theme = useTheme();

  const handleEdit = (todo: TodoOutput) => {
    setEditingTodoId(todo._id);
    setUpdatedTitle(todo.title);
    setUpdatedDescription(todo.description);
  };

  const handleSave = () => {
    if (editingTodoId && updatedTitle.trim() && updatedDescription.trim()) {
      onUpdate(editingTodoId, updatedTitle, updatedDescription);
      setEditingTodoId(null);
      setUpdatedTitle("");
      setUpdatedDescription("");
    }
  };

  return (
    <div className={styles.todoListWrapper}>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo._id} className={todo.isDone ? styles.isDone : ""}>
            {editingTodoId === todo._id ? (
              <div className={styles.editForm}>
                <div className={styles.inputGroup}>
                  <LabelInput
                    label="عنوان جدید"
                    type="text"
                    value={updatedTitle}
                    onChange={setUpdatedTitle}
                    placeholder="عنوان جدید"
                  />
                  <LabelInput
                    label="توضیحات جدید"
                    type="text"
                    value={updatedDescription}
                    onChange={setUpdatedDescription}
                    placeholder="توضیحات جدید"
                  />
                </div>
                <div className={styles.buttonGroup}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    size="small"
                    sx={{
                      gap: 1,
                      fontSize: "0.8rem",
                      padding: "5px 24px",
                      backgroundColor: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    ذخیره
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => setEditingTodoId(null)}
                    size="small"
                    sx={{
                      gap: 1,
                      fontSize: "0.8rem",
                      padding: "5px 24px",
                    }}
                  >
                    لغو
                  </Button>
                </div>
              </div>
            ) : (
              <div className={styles.viewTodo}>
                <span onClick={() => onToggle(todo._id)}>{todo.title}</span>
                {todo.description && (
                  <p className={styles.todoDescription}>{todo.description}</p>
                )}
                <div className={styles.buttonGroup}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(todo)}
                    size="small"
                    sx={{
                      gap: 1,
                      fontSize: "0.8rem",
                      padding: "5px 24px",
                    }}
                  >
                    ویرایش
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => onDelete(todo._id)}
                    size="small"
                    sx={{
                      gap: 1,
                      fontSize: "0.8rem",
                      padding: "5px 24px",
                    }}
                  >
                    حذف
                  </Button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
