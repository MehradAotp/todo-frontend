import { useState } from "react";
import styles from "./TodoInput.module.css";
import LabelInput from "../LabelInput/LabelInput";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface TodoInputProps {
  onAdd: (title: string, description: string) => void;
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [newTodo, setNewTodo] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAdd = () => {
    onAdd(newTodo, newDescription);
  };

  const theme = useTheme();

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
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        fullWidth
        sx={{
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
          fontSize: "16px",
          padding: "5px 24px",
        }}
      >
        اضافه کردن
      </Button>
    </div>
  );
};

export default TodoInput;
