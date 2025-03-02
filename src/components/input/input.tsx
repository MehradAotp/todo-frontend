import { TextField } from "@mui/material";
import styles from "./input.module.css";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = (props: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <TextField
        id="outlined-nocontrolled"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        variant="outlined"
        color="primary"
        fullWidth
        focused
        sx={{
          "& .MuiOutlinedInput-root": {
            padding: "1px",
          },
          marginBottom: "16px",
        }}
      />
    </div>
  );
};

export default Input;
