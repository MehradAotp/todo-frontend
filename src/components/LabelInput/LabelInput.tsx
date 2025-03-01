interface LabelInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

import styles from "./LabelInput.module.css";
import Input from "../input/input";

const LabelInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}: LabelInputProps) => {
  return (
    <div className={styles.labelInputWrapper}>
      <label className={styles.label}>{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LabelInput;
