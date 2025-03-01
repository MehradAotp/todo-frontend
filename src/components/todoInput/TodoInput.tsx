import { useState } from "react";
import styles from "./TodoInput.module.css";
import LabelInput from "../LabelInput/LabelInput";

interface TodoInputProps {
  onAdd: (title: string, description: string) => void;
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [newTodo, setNewTodo] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAdd = () => {
    onAdd(newTodo, newDescription);
  };
  const inputs = [
    {
      label: "عنوان",
      type: "text",
      placeholder: "عنوان مورد نظر را وارد کنید",
      value: newTodo,
      onChange: setNewTodo,
    },
    {
      label: "توضیحات",
      type: "text",
      placeholder: "توضیحات مورد نظر را وارد کنید",
      value: newDescription,
      onChange: setNewDescription,
    },
  ];
  return (
    <div className={styles.inputGroup}>
      {inputs.map((input) => (
        <LabelInput
          key={input.label}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          onChange={input.onChange}
        />
      ))}
      <button onClick={handleAdd}>اضافه کردن</button>
    </div>
  );
};

export default TodoInput;
