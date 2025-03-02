import { TodoOutput } from "../../api/todo";
import LabelInput from "../LabelInput/LabelInput";
import styles from "./TodoList.module.css";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

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
  const [openDialog, setOpenDialog] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<string | null>(null);

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

  const handleDelete = (id: string) => {
    setTodoToDelete(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    if (todoToDelete) {
      onDelete(todoToDelete);
      setOpenDialog(false);
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
                <FormControlLabel
                  control={
                    <Switch
                      checked={todo.isDone}
                      onChange={() => onToggle(todo._id)}
                      color="primary"
                    />
                  }
                  labelPlacement="top"
                  label={todo.title}
                />
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
                    startIcon={<EditIcon />}
                  >
                    ویرایش
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(todo._id)}
                    size="small"
                    sx={{
                      gap: 1,
                      fontSize: "0.8rem",
                      padding: "5px 24px",
                    }}
                    startIcon={<DeleteIcon />}
                  >
                    حذف
                  </Button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>آیا مطمئن هستید؟</DialogTitle>
        <DialogContent>
          <p>آیا از حذف این وظیفه اطمینان دارید؟</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            color="primary"
            startIcon={<CloseIcon />}
          >
            لغو
          </Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoList;
