interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}
import styles from "./input.module.css";
const Input = (props: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
