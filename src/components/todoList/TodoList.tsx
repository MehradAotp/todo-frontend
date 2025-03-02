import { TodoOutput } from "../../api/todo";
import LabelInput from "../LabelInput/LabelInput";
import styles from "./TodoList.module.css";
import { useState } from "react";

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
                  <button className={styles.save} onClick={handleSave}>
                    ذخیره
                  </button>
                  <button
                    className={styles.cancel}
                    onClick={() => setEditingTodoId(null)}
                  >
                    لغو
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.viewTodo}>
                <span onClick={() => onToggle(todo._id)}>{todo.title}</span>
                {todo.description && (
                  <p className={styles.todoDescription}>{todo.description}</p>
                )}
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.edit}
                    onClick={() => handleEdit(todo)}
                  >
                    ویرایش
                  </button>
                  <button
                    className={styles.delete}
                    onClick={() => onDelete(todo._id)}
                  >
                    حذف
                  </button>
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
